/* BO7 Zombies Field Guide — UI. Map data lives in js/maps/*.js (one file per map). */

/* ---------------- STATE ---------------- */
const store = {
  get(k,d){ try{ const v=localStorage.getItem("bo7fg:"+k); return v==null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem("bo7fg:"+k,JSON.stringify(v)); }catch(e){} }
};
const TABS=[["ww","Wonder Weapon"],["main","Main Quest"],["side","Side Eggs"],["relics","Relics"],["intel","Intel"],["map","Map"],["super","Super EE"],["codes","Codes"]];
const TAB_IDS = TABS.map(t=>t[0]);
let state = { map: store.get("map","ashes"), tab: store.get("tab","main") };
if (!TAB_IDS.includes(state.tab)) state.tab = "main";
(function readHash(){
  const [mp,tb] = (location.hash||"").slice(1).split("/");
  if (mp && (MAPS.some(m=>m.id===mp) || mp==="boss")) state.map = mp;
  if (tb && TAB_IDS.includes(tb)) state.tab = tb;
})();

const cam = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const esc = t => String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
const strip = t => String(t).replace(/<[^>]*>/g,"");
const srcName = u => u.includes("powerpyx") ? "PowerPyx" : u.includes("skycoach") ? "Skycoach" : u.includes("margwa") ? "MargwaNetwork" : (u.split("/")[2]||"source").replace(/^(www|static|media|image|images|i|nfapi|s3-images)\./,"");
const phItem = (l,u,pg) => `<span class="phwrap"><button type="button" class="ph" data-src="${esc(LOCAL(u))}" data-orig="${esc(u)}" data-label="${esc(l)}"${pg?` data-page="${esc(pg)}"`:""} aria-expanded="false">${cam}${l}</button></span>`;
const phRow = list => list && list.length ? '<div class="phs">'+list.map(([l,u,pg])=>phItem(l,u,pg)).join("")+(list.length>1?'<button type="button" class="linkbtn phall">Show all</button>':'')+'</div>' : "";
const ul = arr => "<ul>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ul>";
const ol = arr => "<ol>"+arr.map(x=>"<li>"+x+"</li>").join("")+"</ol>";

/* ---------------- RENDER ---------------- */
const rail = document.getElementById("rail"), app = document.getElementById("app");
function renderRail(){
  const items = MAPS.map(m=>[m.id,m.name,m.color]).concat([["boss","Super EE Finale","#7d6b91"]]);
  rail.innerHTML = items.map(([id,n,c])=>`<button class="chip" style="--c:${c}" aria-pressed="${state.map===id}" data-map="${id}"><i></i>${n}</button>`).join("");
  const on = rail.querySelector('[aria-pressed="true"]');
  if (on && on.scrollIntoView) on.scrollIntoView({block:"nearest",inline:"nearest"});
}
rail.addEventListener("click",e=>{const b=e.target.closest("[data-map]"); if(!b) return; state.map=b.dataset.map; store.set("map",state.map); render(); window.scrollTo({top:0});});
function setHash(){
  const h = "#" + state.map + (state.map==="boss" ? "" : "/" + state.tab);
  try{ history.replaceState(null,"",h); }catch(e){}
}

function render(){
  renderRail(); setHash();
  const m = MAPS.find(x=>x.id===state.map);
  document.documentElement.style.setProperty("--map", m? m.color : "#7d6b91");
  if(!m){ renderFinale(); return; }
  document.getElementById("sub").textContent = m.season;
  document.title = m.name + " · BO7 Zombies Field Guide";
  app.innerHTML = `
  <section class="hero">
    <div class="eyebrow">${m.season} · ${m.date}</div>
    <h2>${m.name}</h2>
    <p>${m.blurb}</p>
    <div class="facts">
      <div class="fact"><b>Wonder Weapon</b><span>${m.ww}</span></div>
      <div class="fact"><b>Final boss</b><span>${m.boss}</span></div>
      <div class="fact"><b>Quest reward</b><span>${m.reward}</span></div>
      <div class="fact"><b>Super EE toy</b><span>${m.toy.name}</span></div>
    </div>
  </section>
  <div class="tabs" role="tablist">${TABS.map(([k,l])=>`<button class="tab" role="tab" aria-selected="${state.tab===k}" data-tab="${k}">${l}${tabCount(m,k)}</button>`).join("")}</div>
  <div id="panel"></div>
  <div class="srcs">Tap a photo name to expand it; tap the image to shrink it back. Screenshots come from the guide sites credited under each one. Sources: ${m.src.map(([t,u])=>`<a href="${u}" target="_blank" rel="noopener">${t}</a>`).join(" · ")}</div>`;
  app.querySelector(".tabs").addEventListener("click",e=>{const b=e.target.closest("[data-tab]"); if(!b) return; state.tab=b.dataset.tab; store.set("tab",state.tab); render();});
  const sel = app.querySelector('.tab[aria-selected="true"]'); if (sel && sel.scrollIntoView) sel.scrollIntoView({block:"nearest",inline:"nearest"});
  const p = document.getElementById("panel");
  ({ww:pWW,main:pMain,side:pSide,relics:pRelics,intel:pIntel,map:pMap,super:pSuper,codes:pCodes})[state.tab](m,p);
}
function tabCount(m,k){
  const n = k==="side" ? m.side.length : k==="relics" ? m.relics.length : k==="intel" ? m.intel.length : 0;
  return n ? ` <small class="cnt">${n}</small>` : "";
}

function pWW(m,p){
  p.innerHTML = `<h3 class="sec">${m.ww}</h3><p class="lede">${m.wwInfo.what}</p>
  <ol class="steps">${m.wwInfo.steps.map((s,i)=>`<li class="step"><div class="num"><label>${i+1}</label></div><div class="st-body"><p class="st-title" style="font-weight:500">${s}</p></div></li>`).join("")}</ol>
  <h3 class="sec">Tips</h3>${ul(m.wwInfo.tips)}
  <div class="note">The full step-by-step with photos is in the <b>Main Quest</b> tab — the Wonder Weapon is part of it.</div>`;
}

function pMain(m,p){
  const mode = store.get("route:"+m.id,"guide");
  const done = new Set(store.get("done:"+m.id,[]));
  const byId = Object.fromEntries(m.steps.map(s=>[s.id,s]));
  const order = mode==="speed" ? m.speed.map(id=>byId[id]) : m.steps;
  const guideNum = Object.fromEntries(m.steps.map((s,i)=>[s.id,i+1]));
  p.innerHTML = `
  <div class="toolbar">
    <div class="seg" role="group" aria-label="Step order">
      <button data-mode="guide" aria-pressed="${mode==="guide"}">Guide order</button>
      <button data-mode="speed" aria-pressed="${mode==="speed"}">Speed route</button>
    </div>
    <div class="prog"><span id="pc">${done.size}/${m.steps.length}</span><div class="bar"><i id="pb" style="width:${done.size/m.steps.length*100}%"></i></div><button class="linkbtn" id="reset">Reset</button></div>
  </div>
  ${mode==="speed" ? `<div class="note"><b>Speed route.</b> ${m.speedIntro} Steps keep their guide numbers so you can follow along with videos.</div>` : ""}
  <ol class="steps">${order.map(s=>{
    const n=guideNum[s.id], d=done.has(s.id);
    const moved = mode==="speed" && m.speed.indexOf(s.id) < n-1;
    return `<li class="step${d?" done":""}" data-id="${s.id}">
      <div class="num"><label for="c-${s.id}">${n}</label><input type="checkbox" id="c-${s.id}" ${d?"checked":""} aria-label="Mark step ${n} done"></div>
      <div class="st-body"><p class="st-title">${s.t}</p>
        <div class="tags">${s.loc?`<span class="tag loc">${s.loc}</span>`:""}${s.gate?`<span class="tag gate">${s.gate}</span>`:""}${moved?`<span class="tag par">moved earlier</span>`:""}</div>
        ${ul(s.b)}
        ${s.keys? keysBlock():""}
        ${mode==="speed" && m.speedNotes[s.id] ? `<div class="speed"><b>Time-saver:</b> ${m.speedNotes[s.id]}</div>`:""}
        ${phRow(s.ph)}
      </div></li>`;}).join("")}</ol>`;
  p.querySelector(".seg").addEventListener("click",e=>{const b=e.target.closest("[data-mode]"); if(!b) return; store.set("route:"+m.id,b.dataset.mode); render();});
  p.querySelectorAll('input[type=checkbox]').forEach(cb=>cb.addEventListener("change",()=>{
    const id=cb.closest(".step").dataset.id; cb.checked?done.add(id):done.delete(id); store.set("done:"+m.id,[...done]);
    cb.closest(".step").classList.toggle("done",cb.checked);
    document.getElementById("pc").textContent=done.size+"/"+m.steps.length; document.getElementById("pb").style.width=(done.size/m.steps.length*100)+"%";
  }));
  p.querySelector("#reset").addEventListener("click",()=>{store.set("done:"+m.id,[]); render();});
}

function keysBlock(){
  const rows=[
   ["Red","Orda Graveyard (Ashwood → Exit 115)","No health regen while held",[["#1 Behind a vehicle, left, just before the Exit 115 entrance",K("key-1-2_1")],["#2 Up inside a dinosaur skull",K("key-1-1_1")],["#3 Ground skull, on the neck bone at the back (nearly invisible — shoot and reel blind)",K("key-1-3_1"),K("key-1-3-2_1")]],K("red-key-area")],
   ["Green","Grounded Ship (Vandorn → Ashwood)","Can't sprint — park the car next to it",[["#1 Top of ship, blue container on the west edge; look in at an angle from the left, aim at the floor",K("key-2-1-1_1"),K("key-2-1-2_1")],["#2 Top of ship, through the middle cabin window, on the shelf",K("key-2-2-1_1"),K("key-2-2-2_1")],["#3 Under the ship facing north, yellow-lit area: floor between two barrels right of the unreachable stairs (jump-shoot)",K("key-2-3-1_1"),K("key-2-3-2_1")]],K("green-key-area")],
   ["Yellow","Crashed Rocket road (Ashwood → Cosmodrome)","Melee only while held",[["#1 Through the Ashwood exit gate, turn left, top of the cliff (glows — easiest)",K("key-3-1-1_1"),K("key-3-1-2_1")],["#2 Halfway along, on top of the fallen red pylon",K("key-3-2-1_1")],["#3 End of the road, on the spinning radar-dish building",K("key-3-3-1_1")]],K("yellow-key-area")]
  ];
  return `<div class="tbl" style="margin-top:12px"><table><thead><tr><th>Key</th><th>Road · drawback</th><th>Three possible spots</th></tr></thead><tbody>${rows.map(([c,road,dis,spots,area])=>`<tr><td><b>${c}</b></td><td>${road}<br><small class="accent-text">${dis}</small><div class="phs">${phItem("Area",area)}</div></td><td>${spots.map(([txt,...ims])=>`<div style="margin-bottom:8px">${txt}<div class="phs" style="margin-top:4px">${ims.map((u,i)=>phItem("Photo"+(ims.length>1?" "+(i+1):""),u)).join("")}</div></div>`).join("")}</td></tr>`).join("")}</tbody></table></div>`;
}

/* ---------------- SIDE EGGS: reward first ---------------- */
function pSide(m,p){
  const done = new Set(store.get("side:"+m.id,[]));
  p.innerHTML = `<h3 class="sec">Side Easter eggs</h3><p class="lede">Free perks, crystals, loot and secrets you can fold into a normal run. Each card shows what you get first, then how to do it.</p>
  <div class="cards">${m.side.map((s,i)=>`<article class="card egg${done.has(i)?" done":""}" data-i="${i}">
    <div class="egg-head"><h4>${s.t}</h4><label class="eggchk"><input type="checkbox" ${done.has(i)?"checked":""} aria-label="Mark ${esc(strip(s.t))} done"> Done</label></div>
    <div class="rw"><b>Reward</b><span>${s.r}</span></div>
    ${s.req?`<div class="rq"><b>Requires</b> ${s.req}</div>`:""}
    <div class="how">How to do it</div>${ul(s.b)}${phRow(s.ph)}</article>`).join("")}</div>`;
  p.querySelectorAll(".eggchk input").forEach(cb=>cb.addEventListener("change",()=>{
    const card=cb.closest(".card"), i=+card.dataset.i; cb.checked?done.add(i):done.delete(i);
    card.classList.toggle("done",cb.checked); store.set("side:"+m.id,[...done]);
  }));
}

/* ---------------- RELICS ---------------- */
function pRelics(m,p){
  const tierName={grim:"Grim · round 20",sin:"Sinister · round 40",wic:"Wicked · round 60"};
  const got = new Set(store.get("relic:"+m.id,[]));
  p.innerHTML = `<h3 class="sec">Cursed relics</h3><p class="lede">${m.relicNote}</p>
  ${m.relics.length? `
  <div class="tbl"><table class="compact"><thead><tr><th>Got it</th><th>Relic</th><th>Tier</th><th>How you find it</th></tr></thead><tbody>
  ${m.relics.map((r,i)=>`<tr><td><input type="checkbox" class="rchk" data-i="${i}" ${got.has(i)?"checked":""} aria-label="Unlocked ${esc(r.n)}"></td><td><a href="#relic-${m.id}-${i}" class="jump">${r.n}</a></td><td><span class="tier ${r.tier}">${r.tier==="grim"?"Grim":r.tier==="sin"?"Sinister":"Wicked"}</span></td><td>${strip(r.u[0])}${r.u.length>1?" …":""}</td></tr>`).join("")}
  </tbody></table></div>
  <h3 class="sec">How to find each relic</h3>
  <div class="cards">${m.relics.map((r,i)=>`<article class="card" id="relic-${m.id}-${i}"><div class="row" style="justify-content:space-between"><h4>${r.n}</h4><span class="tier ${r.tier}">${tierName[r.tier]}</span></div>
    <p class="effect"><b>Curse</b>${r.e}</p>
    ${r.trial?`<p class="effect"><b>Trial</b>${r.trial}</p>`:""}
    <div class="how">How to unlock it</div>${ol(r.u)}${phRow(r.ph)}</article>`).join("")}</div>`:`<div class="note">Nothing to hunt here — equip relics you unlocked on the other maps.</div>`}
  <h3 class="sec">How tiers pay out</h3>
  <div class="tbl"><table><thead><tr><th>Tier</th><th>Relics needed</th><th>Unlocks in-match</th></tr></thead><tbody>
  <tr><td>Tier I</td><td>Grim relics fill the first third of the meter</td><td>Golden Armor wall-buy</td></tr>
  <tr><td>Tier II</td><td>Add Sinister relics</td><td>Ultra weapon rarity</td></tr>
  <tr><td>Tier III</td><td>Needs at least one Wicked relic</td><td>Pack-a-Punch level IV</td></tr></tbody></table></div>
  <div class="note">Every unlock ends the same way: finish the setup, a sinister laugh confirms it, a colored portal appears, and you survive the trial inside. Don't save-and-quit mid-setup — progress is usually lost.</div>`;
  p.querySelectorAll(".rchk").forEach(cb=>cb.addEventListener("change",()=>{const i=+cb.dataset.i; cb.checked?got.add(i):got.delete(i); store.set("relic:"+m.id,[...got]);}));
  p.querySelectorAll("a.jump").forEach(a=>a.addEventListener("click",e=>{e.preventDefault(); const t=document.getElementById(a.getAttribute("href").slice(1)); if(t){ t.scrollIntoView({behavior:"smooth",block:"start"}); t.classList.add("flash"); setTimeout(()=>t.classList.remove("flash"),1200);} }));
}

/* ---------------- INTEL ---------------- */
function pIntel(m,p){
  const found = new Set(store.get("intel:"+m.id,[]));
  const kinds = ["Audio log","Document","Artifact"];
  const areas = [...new Set(m.intel.map(x=>x.a))];
  const f = store.get("intelArea:"+m.id,"all");
  p.innerHTML = `<h3 class="sec">Intel</h3>
  <p class="lede">Every audio log, document and artifact on ${m.name}. Tick them off as you go; the challenge each one completes is listed where it has one. Intel also shows up on the <b>Map</b> tab under its area.</p>
  <div class="toolbar">
    <div class="prog"><span id="ic">${found.size}/${m.intel.length}</span><div class="bar"><i id="ib" style="width:${found.size/m.intel.length*100}%"></i></div><button class="linkbtn" id="ireset">Reset</button></div>
    <label class="row" style="gap:6px;font-size:.9rem">Area <select id="iarea"><option value="all">All areas</option>${areas.map(a=>`<option ${a===f?"selected":""}>${a}</option>`).join("")}</select></label>
  </div>
  ${kinds.map(k=>{const list=m.intel.map((x,i)=>[x,i]).filter(([x])=>x.k===k); if(!list.length) return "";
    return `<h3 class="sec sm">${k}s <small class="cnt">${list.length}</small></h3>
    <div class="intel">${list.map(([x,i])=>`<label class="it${found.has(i)?" done":""}" data-area="${esc(x.a)}"><input type="checkbox" data-i="${i}" ${found.has(i)?"checked":""}>
      <span class="it-b"><b>${x.n}</b><span class="it-a">${x.a}</span><span class="it-l">${x.loc}</span>${x.ch?`<span class="it-c">Challenge: ${x.ch}</span>`:""}</span></label>`).join("")}</div>`;}).join("")}`;
  const upd=()=>{ document.getElementById("ic").textContent=found.size+"/"+m.intel.length; document.getElementById("ib").style.width=(found.size/m.intel.length*100)+"%"; };
  p.querySelectorAll(".it input").forEach(cb=>cb.addEventListener("change",()=>{const i=+cb.dataset.i; cb.checked?found.add(i):found.delete(i); cb.closest(".it").classList.toggle("done",cb.checked); store.set("intel:"+m.id,[...found]); upd();}));
  p.querySelector("#ireset").addEventListener("click",()=>{store.set("intel:"+m.id,[]); render();});
  const applyF=v=>{ p.querySelectorAll(".it").forEach(el=>el.hidden = v!=="all" && el.dataset.area!==v); p.querySelectorAll(".intel").forEach(g=>{ const h=g.previousElementSibling; const any=[...g.children].some(c=>!c.hidden); g.hidden=!any; if(h) h.hidden=!any; }); };
  p.querySelector("#iarea").addEventListener("change",e=>{store.set("intelArea:"+m.id,e.target.value); applyF(e.target.value);});
  applyF(f);
}

/* ---------------- INTERACTIVE MAP ---------------- */
function allPins(m){
  const found = new Set(store.get("intel:"+m.id,[]));
  const intelPins = m.intel.map((x,i)=>({a:x.a,c:"intel",n:x.n+" ("+x.k.toLowerCase()+")",d:x.loc+(x.ch?" · Challenge: "+x.ch:""),got:found.has(i)}));
  return m.pins.concat(intelPins);
}
function pMap(m,p){
  const cats = Object.keys(PIN_CATS);
  let on = new Set(store.get("cats", cats));
  const pins = allPins(m);
  const showImg = store.get("mapimg", true);
  const counts = Object.fromEntries(cats.map(c=>[c,pins.filter(x=>x.c===c).length]));
  p.innerHTML = `<h3 class="sec">Interactive map</h3>
  <p class="lede">Everything on ${m.name}, sorted by area. Switch categories on and off, or search. Zoom and drag the map image (pinch or scroll); it's there to help you match area names to the layout.</p>
  <div class="mapbar">
    <div class="cats" role="group" aria-label="Categories">${cats.filter(c=>counts[c]).map(c=>`<button type="button" class="cat" data-c="${c}" aria-pressed="${on.has(c)}" style="--pc:${PIN_CATS[c].color}"><i></i>${PIN_CATS[c].label} <small>${counts[c]}</small></button>`).join("")}</div>
    <div class="row mapctl"><button type="button" class="linkbtn" id="callon">Select all</button><button type="button" class="linkbtn" id="calloff">Select none</button>
      <input type="search" id="pq" placeholder="Search pins…" aria-label="Search pins">
      <button type="button" class="linkbtn" id="imgtog">${showImg?"Hide map image":"Show map image"}</button></div>
  </div>
  <div id="mvhost" ${showImg?"":"hidden"}></div>
  <div class="areas" id="areas"></div>`;
  if (showImg) mapViewer(m, p.querySelector("#mvhost"));
  const q = p.querySelector("#pq");
  const draw = () => {
    const term = q.value.trim().toLowerCase();
    const known = m.areas.slice(); const extra=[...new Set(pins.map(x=>x.a).filter(a=>!known.includes(a)))];
    const groups = known.concat(extra).map(a=>[a, pins.filter(x=>x.a===a && on.has(x.c) && (!term || (x.n+" "+x.d+" "+a).toLowerCase().includes(term)))]).filter(([,l])=>l.length);
    p.querySelector("#areas").innerHTML = groups.length ? groups.map(([a,l])=>`<section class="area"><h4>${a} <small>${l.length}</small></h4><ul>${l.map(x=>`<li class="pin${x.got?" got":""}"><i style="background:${PIN_CATS[x.c].color}" title="${PIN_CATS[x.c].label}"></i><div><b>${x.n}</b>${x.got?' <span class="gotm">found</span>':""}<span>${x.d}</span></div></li>`).join("")}</ul></section>`).join("") : `<div class="note">Nothing matches. Turn on more categories or clear the search.</div>`;
  };
  p.querySelector(".cats").addEventListener("click",e=>{const b=e.target.closest("[data-c]"); if(!b) return; const c=b.dataset.c; on.has(c)?on.delete(c):on.add(c); b.setAttribute("aria-pressed",on.has(c)); store.set("cats",[...on]); draw();});
  const setAll = v => { on = new Set(v?cats:[]); p.querySelectorAll(".cat").forEach(b=>b.setAttribute("aria-pressed",v)); store.set("cats",[...on]); draw(); };
  p.querySelector("#callon").addEventListener("click",()=>setAll(true));
  p.querySelector("#calloff").addEventListener("click",()=>setAll(false));
  q.addEventListener("input",draw);
  p.querySelector("#imgtog").addEventListener("click",()=>{store.set("mapimg",!showImg); render();});
  draw();
}

function mapViewer(m, host){
  const local = "Images/" + m.slug + ".webp", orig = m.mapImg;
  host.innerHTML = `<div class="mv">
    <div class="mv-stage" tabindex="0" aria-label="${esc(m.name)} map — drag to pan, scroll or pinch to zoom"><img alt="${esc(m.name)} overview map" src="${local}" draggable="false" referrerpolicy="no-referrer"></div>
    <div class="mv-ctl"><button type="button" data-z="in" aria-label="Zoom in">+</button><button type="button" data-z="out" aria-label="Zoom out">−</button><button type="button" data-z="reset">Reset</button><button type="button" data-z="fs">Full screen</button></div>
    <div class="mv-cap">Map image: <a href="${orig}" target="_blank" rel="noopener">MargwaNetwork</a></div>
  </div>`;
  const mv = host.querySelector(".mv"), stage = host.querySelector(".mv-stage"), img = stage.querySelector("img");
  let triedOrig = false;
  img.addEventListener("error",()=>{
    if(!triedOrig){ triedOrig=true; img.src=orig; return; }
    mv.innerHTML = `<div class="note">No overview image is available for ${m.name} yet (run the image downloader, or MargwaNetwork may not host one for this map). The area list below still has every pin.</div>`;
  });
  let s=1,x=0,y=0;
  const clamp=()=>{ const W=stage.clientWidth,H=stage.clientHeight; x=Math.min(0,Math.max(W*(1-s),x)); y=Math.min(0,Math.max(H*(1-s),y)); };
  const apply=()=>{ clamp(); img.style.transform=`translate(${x}px,${y}px) scale(${s})`; stage.classList.toggle("zoomed",s>1.01); };
  const zoomAt=(f,cx,cy)=>{ const r=stage.getBoundingClientRect(); const px=(cx==null?r.width/2:cx-r.left), py=(cy==null?r.height/2:cy-r.top); const ns=Math.min(8,Math.max(1,s*f)); x=px-(px-x)*(ns/s); y=py-(py-y)*(ns/s); s=ns; apply(); };
  stage.addEventListener("wheel",e=>{ e.preventDefault(); zoomAt(e.deltaY<0?1.2:1/1.2,e.clientX,e.clientY); },{passive:false});
  stage.addEventListener("dblclick",e=>zoomAt(2,e.clientX,e.clientY));
  const pts=new Map(); let last=null;
  const mid=()=>{const a=[...pts.values()]; return a.length<2?a[0]:{x:(a[0].x+a[1].x)/2,y:(a[0].y+a[1].y)/2,d:Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y)};};
  stage.addEventListener("pointerdown",e=>{ stage.setPointerCapture(e.pointerId); pts.set(e.pointerId,{x:e.clientX,y:e.clientY}); last=mid(); });
  stage.addEventListener("pointermove",e=>{ if(!pts.has(e.pointerId)) return; pts.set(e.pointerId,{x:e.clientX,y:e.clientY}); const c=mid();
    if(last){ if(pts.size>=2 && last.d && c.d){ zoomAt(c.d/last.d,c.x,c.y); } x+=c.x-last.x; y+=c.y-last.y; apply(); }
    last=c; });
  const up=e=>{ pts.delete(e.pointerId); last=pts.size?mid():null; };
  stage.addEventListener("pointerup",up); stage.addEventListener("pointercancel",up);
  stage.addEventListener("keydown",e=>{ const k=e.key, st=40; if(k==="+"||k==="="){zoomAt(1.25);} else if(k==="-"){zoomAt(0.8);} else if(k==="ArrowLeft"){x+=st;apply();} else if(k==="ArrowRight"){x-=st;apply();} else if(k==="ArrowUp"){y+=st;apply();} else if(k==="ArrowDown"){y-=st;apply();} else return; e.preventDefault(); });
  const fsBtn = host.querySelector('[data-z="fs"]');
  const setFsLabel=()=>{ const full=document.fullscreenElement===mv||mv.classList.contains("mv-full"); fsBtn.textContent=full?"Exit full screen":"Full screen"; };
  host.querySelector(".mv-ctl").addEventListener("click",e=>{ const b=e.target.closest("[data-z]"); if(!b) return; const z=b.dataset.z;
    if(z==="in") zoomAt(1.4); else if(z==="out") zoomAt(1/1.4); else if(z==="reset"){ s=1;x=0;y=0;apply(); }
    else if(z==="fs"){
      if(document.fullscreenElement){ document.exitFullscreen(); }
      else if(mv.classList.contains("mv-full")){ mv.classList.remove("mv-full"); document.body.classList.remove("noscroll"); s=1;x=0;y=0;apply(); setFsLabel(); }
      else if(mv.requestFullscreen){ mv.requestFullscreen().catch(()=>{ mv.classList.add("mv-full"); document.body.classList.add("noscroll"); setFsLabel(); }); }
      else { mv.classList.add("mv-full"); document.body.classList.add("noscroll"); setFsLabel(); }
    }});
  mvHook = reset => { if(!stage.isConnected) return; if(reset){ s=1;x=0;y=0; setFsLabel(); } apply(); };
}
let mvHook = null;
document.addEventListener("fullscreenchange",()=>mvHook&&mvHook(true));
window.addEventListener("resize",()=>mvHook&&mvHook(false));

/* ---------------- SUPER EE ---------------- */
function pSuper(m,p){
  p.innerHTML = `<h3 class="sec">Super EE: ${m.toy.name} toy</h3>
  <p class="lede">${m.toy.prep}</p>
  <div class="note"><b>Before you start:</b> the Super EE unlocks after every map's main quest is done (Directed counts). Toy quests must be Standard or Cursed. You must <b>exfil with the toy</b> for it to register. Avoid save-and-quit.</div>
  <ol class="steps">${m.toy.steps.map(([t,b,ph],i)=>`<li class="step"><div class="num"><label>${i+1}</label></div><div class="st-body"><p class="st-title">${t}</p><p style="margin:4px 0 0">${b}</p>${phRow(ph)}</div></li>`).join("")}</ol>
  <p style="margin-top:16px"><button class="linkbtn" id="goBoss" style="font-size:.95rem">Open the boss rush finale →</button></p>`;
  p.querySelector("#goBoss").addEventListener("click",()=>{state.map="boss";store.set("map","boss");render();window.scrollTo({top:0});});
}

function renderFinale(){
  document.getElementById("sub").textContent="Season 6";
  document.title = "Super Easter Egg · BO7 Zombies Field Guide";
  const toys = MAPS.map(m=>`<li><b>${m.toy.name}</b> — ${m.name}</li>`).join("");
  app.innerHTML = `
  <section class="hero"><div class="eyebrow">Season 6 · live since Sep 17, 2026</div><h2>Super Easter Egg</h2>
  <p>Six toys, one shelf in Her House, and a five-boss rush that ends the Dark Aether story.</p></section>
  <h3 class="sec">Requirements</h3>
  ${ul(["Main quest done on all six maps (Standard, Cursed or Directed).","Each map's toy quest done in Standard or Cursed, ending in a successful exfil with the toy. The first five go in any order; the Warden toy on Rex Infernus comes last.","In co-op, every player must place their own Warden toy on the shelf to get the rewards."])}
  <h3 class="sec">The six toys</h3><ol>${toys}</ol>
  <p class="lede">Each map's <b>Super EE</b> tab has its toy quest step by step.</p>
  <h3 class="sec">Boss rush</h3>
  <p class="lede">Place the Warden toy on the shelf upstairs in Her House and interact with it to start the playdate. When all six glow purple, the rush opens in Veytharion's Sepulcher (Pack-a-Punch, Arsenal, crafting table and Wunderfizz — no GobbleGum machine). You get one minute between fights.</p>
  <div class="boss">
   <div><b>1</b>Z-Rex</div>
   <div><b>2</b>The Guardian</div>
   <div><b>3</b>Ol' Tessie Demolition Derby<br><small>survival round</small></div>
   <div><b>4</b>Caltheris the Needle</div>
   <div><b>5</b>The Warden<br><small>modified final form</small></div>
  </div>
  <h3 class="sec">Rewards</h3>
  ${ul(["<b>The Warden</b> playable operator.","<b>Mr. Peeks Mayhem</b> for Cursed mode: Tier III-style perks (PaP IV, Ultra rarity, Golden Armor, cheaper PaP, better box odds) without equipping relics; Wunderfizz sells eternal perks.","A black-and-purple Dark Aether skin for the crew character you finished with (each of the eight has one).","The final story cutscene."])}
  <div class="srcs">Sources: <a href="https://margwa.net/rex-infernus" target="_blank" rel="noopener">MargwaNetwork — Rex Infernus</a> · <a href="https://skycoach.gg/blog/call-of-duty/articles/super-easter-egg-guide" target="_blank" rel="noopener">Skycoach — Super Easter Egg guide</a></div>`;
}

/* ---------------- CODES ---------------- */
function pCodes(m,p){ ({ashes:cAshes,astra:cAstra,pj:cPJ,toten:cToten,kowa:cKowa,rex:cRex})[m.codes](p); }

function cAshes(p){
  const W={ROCKET:"17-14-02-10-04-19",ENGINE:"04-13-06-08-13-04",LAUNCH:"11-00-20-13-02-07",WEAPON:"20-04-00-15-14-13"};
  const AL="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  p.innerHTML = `
  <h3 class="sec">Launch code (step 21)</h3>
  <div class="tool"><h4>Pick the word on your screens</h4>
   <div class="wordbtns" id="wb">${Object.keys(W).map(w=>`<button data-w="${w}" aria-pressed="false">${w}</button>`).join("")}</div>
   <div class="out" id="wo"><span class="lede">Shoot the red buttons left to right when each screen shows its number.</span></div>
   <p class="lede" style="margin:8px 0 0">The cipher counts from zero: <b>A = 00</b>, B = 01 … Z = 25. Any other word? Type it: <input id="cw" maxlength="8" style="width:8em;font:500 .95rem var(--mono);text-transform:uppercase;background:var(--panel2);color:var(--fg);border:1px solid var(--line);border-radius:8px;padding:4px 8px" aria-label="Custom word"></p>
   ${phRow([["Glyph → word key",PX("black-ops-7-ee-computer-screen-cypher-solution")]])}</div>
  <div class="note">Tip: watch each screen cycle once and remember the number <b>before</b> yours, then shoot the instant it flips.</div>
  <h3 class="sec">Yuri's Lab bowls (step 17)</h3>
  <div class="tbl"><table><thead><tr><th>Bowl (left → right)</th><th>Ingredient</th><th>Glyph word</th></tr></thead><tbody>
  <tr><td>1</td><td>Human Bones</td><td><code>TALUS</code></td></tr><tr><td>2</td><td>Hoard Husk Chunks</td><td><code>CONCH</code></td></tr>
  <tr><td>3</td><td>Widow's Lantern</td><td><code>FUNGI</code></td></tr><tr><td>4</td><td>Ravager Eyes</td><td><code>OCULI</code></td></tr>
  <tr><td>5</td><td>Powder of the Forgotten</td><td>Starts the puzzle only — don't press again</td></tr><tr><td>6</td><td>Mysterious Limb</td><td><code>LIMB</code></td></tr></tbody></table></div>
  ${phRow([["Chalkboard glyph alphabet",PX("black-ops-7-zombies-ee-chalkboard-glyph-puzzle-solution")]])}
  <h3 class="sec">Projector reels (step 25)</h3>
  <div class="tbl"><table><thead><tr><th>Projector shows</th><th>Where the reel is</th><th>Photos</th></tr></thead><tbody>
  <tr><td>Tool shed (fishing hut)</td><td>Shed left behind the cabin; side room left of the workbench, metal shelf</td><td>${phRow([["Slide",PX("black-ops-7-zombies-easter-projector-puzzle-fishing-hut")],["Reel",PX("black-ops-7-zombies-projector-puzzle-tool-shed-reel_1")]])}</td></tr>
  <tr><td>Boat shed</td><td>Broken building right of the cabin; up in the rafters (hardest to see)</td><td>${phRow([["Slide",PX("black-ops-7-zombies-easter-projector-puzzle-boat-shed")],["Reel",PX("black-ops-7-zombies-projector-puzzle-boat-shed-reel_1")]])}</td></tr>
  <tr><td>Front of cabin</td><td>Front door → right → upstairs → left, on the cupboard right of Melee Macchiato</td><td>${phRow([["Slide",PX("black-ops-7-zombies-easter-projector-puzzle-front-entrance")],["Reel",PX("black-ops-7-zombies-projector-puzzle-front-cabin-reel_1")]])}</td></tr>
  <tr><td>Back of cabin</td><td>In the snow behind the ammo crate, by the small stairs to the veranda</td><td>${phRow([["Slide",PX("black-ops-7-zombies-easter-projector-puzzle-back-entrance")],["Reel",PX("black-ops-7-zombies-projector-puzzle-back-cabin-reel_1")]])}</td></tr></tbody></table></div>
  <h3 class="sec">Farmhouse clock (step 22)</h3>
  <p class="lede">The wall clock shows <code>6:00</code>, <code>9:00</code> or <code>12:00</code>. Stand on that number scratched in the floor while you're purple.</p>`;
  const show = parts => { p.querySelector("#wo").innerHTML = `<div class="row">${parts.map((n,i)=>`<span class="tag" style="font-size:.75rem">Screen ${i+1}</span><span class="bigcode">${n}</span>`).join("")}</div>`; };
  p.querySelector("#wb").addEventListener("click",e=>{const b=e.target.closest("[data-w]"); if(!b) return;
    p.querySelectorAll("#wb button").forEach(x=>x.setAttribute("aria-pressed",x===b)); p.querySelector("#cw").value=""; show(W[b.dataset.w].split("-"));});
  p.querySelector("#cw").addEventListener("input",e=>{ const w=e.target.value.toUpperCase().replace(/[^A-Z]/g,""); p.querySelectorAll("#wb button").forEach(x=>x.setAttribute("aria-pressed","false")); if(w) show([...w].map(ch=>String(AL.indexOf(ch)).padStart(2,"0"))); });
}

function cAstra(p){
  const P=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
  const B=[["Bust right of the entrance",["Musica Universalis","The Black Veil","The Moon Directive"]],["Bust across from the entrance",["Ash and Bone","Echoes of Andromeda","The Unknowable Void"]],["Bust in the lower corner",["Pyramids of Cydonia","Silence at Singularity","Witchlight Codex"]]];
  const sel=id=>`<select id="${id}" aria-label="Planet">${P.map((x,i)=>`<option value="${i+1}">${x}</option>`).join("")}</select>`;
  p.innerHTML=`
  <h3 class="sec">Planet code (step 6)</h3>
  <div class="tool"><h4>Enter the planets O.S.C.A.R. names after “Elimination Twenty”</h4>
   <div class="row">${sel("p1")}${sel("p2")}${sel("p3")}</div>
   <div class="out">Code: <span class="bigcode" id="pco">111</span></div></div>
  <div class="tbl"><table><thead><tr><th>#</th><th>Planet</th><th>#</th><th>Planet</th></tr></thead><tbody>
  ${[0,1,2,3].map(i=>`<tr><td>${i+1}</td><td>${P[i]}</td><td>${i+5}</td><td>${P[i+4]}</td></tr>`).join("")}</tbody></table></div>
  <h3 class="sec">Library busts (step 9)</h3>
  <div class="tool"><h4>Tick the books on the brain machine's reading list</h4>
   <div class="books">${B.map(([bust,books],bi)=>`<fieldset><legend>${bust}</legend>${books.map((t,ti)=>`<label><input type="checkbox" data-b="${bi}"> ${t}</label>`).join("")}<div class="out">Turn it <span class="bigcode" id="bo${bi}">0</span> times</div></fieldset>`).join("")}</div>
   <p class="lede" style="margin:6px 0 0">Shelf groupings from MargwaNetwork. Busts only turn in the first 15–30 seconds of a round.</p></div>
  <h3 class="sec">Mars pylon order (step 11)</h3>
  <p class="lede"><span class="bigcode">BR → BL → FR → FL → TOP</span><br>Back-right, back-left, front-right, front-left, then the orb above the portal.</p>
  <h3 class="sec">Organ → pillars (steps 12–13)</h3>
  <p class="lede">Four symbols flash; one slot may be static. The static slot is where the pillar symbol that didn't flash goes. Interact with all five pillars in that order, quickly.</p>
  <h3 class="sec">Skull perk order</h3>
  <p class="lede">Place skulls on the Machina Astralis desk as <span class="bigcode">4 · 3 · 2 · 1 · 5</span>, then shoot them in the order they spin.</p>`;
  const upd=()=>p.querySelector("#pco").textContent=["p1","p2","p3"].map(i=>p.querySelector("#"+i).value).join("");
  ["p1","p2","p3"].forEach(i=>p.querySelector("#"+i).addEventListener("change",upd));
  p.querySelectorAll(".books input").forEach(cb=>cb.addEventListener("change",()=>{ const b=cb.dataset.b; p.querySelector("#bo"+b).textContent=p.querySelectorAll(`.books input[data-b="${b}"]:checked`).length; }));
}

function cPJ(p){
  p.innerHTML=`
  <h3 class="sec">Piano (step 8)</h3>
  <div class="tool"><h4>Key order</h4><span class="bigcode">8 · 6 · 7 · 5 · 6 · 5 · 3 · 5</span>
  <p class="lede" style="margin-top:8px">Players report this sequence is the same every match. If it fails, do the notes puzzle: each of eight glowing notes lights 1–8 times; interact with them in order of that count, then play the matching keys.</p>${phRow([["Note locations",SK("69b2b92ea25924.61645122")]])}</div>
  <h3 class="sec">115 clock (side egg)</h3>
  <p class="lede">From the cul-de-sac bus, set the roof clock to <span class="bigcode">1:15</span> — hour hand on 1, minute hand on 3.</p>
  <h3 class="sec">Boss clock (step 12)</h3>
  <p class="lede">Both hands to <span class="bigcode">12:00</span>, then shoot the red hand as you interact with the portal.</p>
  <h3 class="sec">Hopscotch (step 11)</h3>
  <p class="lede">Tiles <span class="bigcode">1 → 12 → 1</span>. If you step in the black mist, restart.</p>
  <h3 class="sec">Four square (step 9)</h3>
  <p class="lede">Never let the ball land outside the four squares, and never twice in a row in the same square.</p>`;
}

function cToten(p){
  p.innerHTML=`
  <h3 class="sec">Constellation order (step 6)</h3>
  <p class="lede">Back to the stairs, facing the table: <span class="bigcode">LEFT → RIGHT → BACK → FRONT</span></p>
  <h3 class="sec">Genetic Lab jars (step 10)</h3>
  <div class="tool"><h4>Door numbers with radiation symbols</h4>
   <div class="row"><input type="number" id="d1" min="1" max="5" value="1" aria-label="First door"><input type="number" id="d2" min="1" max="5" value="2" aria-label="Second door"></div>
   <div class="out">Use jars: <span class="bigcode" id="jo">A + B</span></div>
   <p class="lede" style="margin:6px 0 0">1=A · 2=B · 3=C · 4=D · 5=E. Purple mist = correct; blue = wrong pair.</p></div>
  <h3 class="sec">Oscilloscope (step 8)</h3>
  <div class="tool"><h4>Write your flashes here</h4>
   <div class="tbl" style="margin:0"><table><thead><tr><th></th><th>Left dial</th><th>Right dial</th></tr></thead><tbody>
   <tr><td>Pair 1</td><td><input type="number" id="o1" min="0" max="9" aria-label="Pair 1 left"></td><td><input type="number" id="o2" min="0" max="9" aria-label="Pair 1 right"></td></tr>
   <tr><td>Pair 2</td><td><input type="number" id="o3" min="0" max="9" aria-label="Pair 2 left"></td><td><input type="number" id="o4" min="0" max="9" aria-label="Pair 2 right"></td></tr></tbody></table></div>
   <p class="lede" style="margin:6px 0 0">Enter pair 1, wait for the console to come back, then pair 2 (sometimes next round).</p></div>
  <h3 class="sec">Bullet crates (step 8)</h3>
  ${ul(["Core Foundry, by the sniper wall-buy","Dry Dock, behind the boat","War Factory, the room before Admin","End of Fjord Road"])}
  <h3 class="sec">Richtofen radio codes</h3>
  <p class="lede"><span class="bigcode">01 01 05</span> · <span class="bigcode">09 03 05</span> · <span class="bigcode">07 00 04</span><br>With Melee Macchiato, on round 15 or a round ending in 5 or 0, after digging up the Iron Cross.</p>
  <h3 class="sec">Rune dial (step 15)</h3>
  <p class="lede">Arrow with <b>1 line</b> → first bonfire, <b>2 lines</b> → second, <b>3 lines</b> → third. Use charged Jotunn Star shots.</p>
  <h3 class="sec">Uranium rods (step 12)</h3>
  <p class="lede">Clustered rods add a lot of charge, isolated rods add a little. Use the last rod away from the cluster to nudge into green without overloading.</p>`;
  const L="ABCDE",u=()=>{const a=+p.querySelector("#d1").value,b=+p.querySelector("#d2").value;p.querySelector("#jo").textContent=(L[a-1]||"?")+" + "+(L[b-1]||"?");};
  ["d1","d2"].forEach(i=>p.querySelector("#"+i).addEventListener("input",u));
  const saved=store.get("osc",{}); ["o1","o2","o3","o4"].forEach(i=>{const el=p.querySelector("#"+i); if(saved[i]!=null) el.value=saved[i]; el.addEventListener("input",()=>{saved[i]=el.value;store.set("osc",saved);});});
}

function cKowa(p){
  const Z=["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Boar"];
  const L=[["Outer Ward","Near the Mystery Box spawn"],["Staging Area","Hillside path toward Central Courtyard"],["Stables","Near the GobbleGum machine"],["Training Area","Out of bounds near Melee Macchiato"],["Tea Garden","Near the Mystery Box spawn"],["Tenshu Entrance","Along the route, upper castle/exfil side"],["Central Courtyard","Left of the big cherry tree"],["Central Courtyard","Near the Kitchens entrance"],["Kitchens","Near the stairs"],["Flower Garden","Near the GobbleGum machine"],["Gatehouse","Near Speed Cola"]];
  p.innerHTML=`
  <h3 class="sec">Zodiac dial helper (murder board)</h3>
  <div class="tool"><h4>Doctor's Note animal, minus poison hours</h4>
   <div class="row"><select id="za" aria-label="Death time animal">${Z.map(z=>`<option>${z}</option>`).join("")}</select>
   <span>minus</span><input type="number" id="zh" min="0" max="11" value="1" aria-label="Hours the poison takes"><span>hours</span></div>
   <div class="out">Set the dial to: <span class="bigcode" id="zo">Boar</span></div>
   <p class="lede" style="margin:6px 0 0">Counter-clockwise by the poison's hours (from the Poison Compendium). Close variants count — Boar/Pig, Stallion/Horse. This uses the standard zodiac order; double-check it against the in-game dial.</p></div>
  <h3 class="sec">Murder board answers</h3>
  <div class="tbl"><table><thead><tr><th>Painting</th><th>Place</th></tr></thead><tbody>
  <tr><td>1</td><td>Mitsuhime's Comb (always)</td></tr>
  <tr><td>2</td><td>Accomplice from the trap ghost: Merchant → Mercantile Abacus · Gardener → Gardening Shears · Nobleman/Courtier → Nobleman's Hat</td></tr>
  <tr><td>3</td><td>Poison from the Doctor's Note: noxious food / vomiting → Pufferfish · contaminated plant → Plum Pit or Monkshood (read the wording) · paralysis → Monkshood</td></tr>
  <tr><td>4</td><td>Background of painting 4: Fish → Tea Whisk · Mountain → Horse Statuette · Bird → Calligraphy Brush</td></tr>
  <tr><td>5</td><td>Crest Medallion (always)</td></tr></tbody></table></div>
  <h3 class="sec">11 lanterns (step 7)</h3>
  <div class="tbl"><table><thead><tr><th>#</th><th>Area</th><th>Where to look</th></tr></thead><tbody>${L.map(([a,w],i)=>`<tr><td>${i+1}</td><td>${a}</td><td>${w}</td></tr>`).join("")}</tbody></table></div>
  <h3 class="sec">Flag puzzle (step 19)</h3>
  <p class="lede">A flag's value = its number of symbols. Plant flags whose values add up to each clock number at the matching symbol location. Used flags leave the pool, so a repeated number may need a different combination (6 = 5+1 or 4+2).</p>
  <h3 class="sec">Mask Simon Says (step 10)</h3>
  <p class="lede">Three rounds: <span class="bigcode">3 · 4 · 5</span> masks. Kill matching masked zombies in the glow order.</p>
  <h3 class="sec">Dragon Egg symbols (relic)</h3>
  <p class="lede">With the electrified Path of Sorrows, melee: <span class="bigcode">姿 → を → 見世</span></p>`;
  const u=()=>{const a=Z.indexOf(p.querySelector("#za").value),h=((+p.querySelector("#zh").value)%12+12)%12;p.querySelector("#zo").textContent=Z[(a-h+12)%12];};
  p.querySelector("#za").value="Rat"; u();
  ["za","zh"].forEach(i=>p.querySelector("#"+i).addEventListener("input",u));
}

function cRex(p){
  const R=[["I remember the runner that travels to stars while moons and galaxies stay true.",0,2,3],["I drift to the runner that travels moons who borrow from galaxies when stars stay true.",3,2,1],["I drift to stars that remember moons who borrow the runner that travels the galaxy.",1,2,2],["I remember galaxies that drift to moons who borrow the runner that travels the stars.",2,0,2]];
  p.innerHTML=`
  <h3 class="sec">Dravakar's riddle (step 7)</h3>
  <p class="lede">Times to press each switch, starting from untouched switches (all at 0). Then pull the center lever.</p>
  <div class="tbl"><table><thead><tr><th>Riddle Dravakar reads</th><th>Left</th><th>Bottom</th><th>Right</th></tr></thead><tbody>
  ${R.map(([t,a,b,c])=>`<tr><td>${t}</td><td class="bigcode">${a}</td><td class="bigcode">${b}</td><td class="bigcode">${c}</td></tr>`).join("")}</tbody></table></div>
  <h3 class="sec">Cleansing cheat sheet (steps 13–16)</h3>
  <div class="tbl"><table><thead><tr><th>Shadowsmith</th><th>Item</th><th>Titan hand</th><th>Slab trigger</th><th>Disc target</th><th>Flame point</th></tr></thead><tbody>
  <tr><td>Nyxara</td><td>Ancient Scroll</td><td>Trap near Veytharion</td><td>Go prone, stay still (~1 min)</td><td>Lower wall under main area</td><td>Between the eyes</td></tr>
  <tr><td>Dravakar</td><td>Blacksmith's Hammer</td><td>Trap near Caltheris</td><td>Get kills on it (step back on if you leave)</td><td>Back-right wall</td><td>Forehead above eye</td></tr>
  <tr><td>Caltheris</td><td>Shimmering Thread</td><td>Trap near Caltheris</td><td>Stand still, aim down sights</td><td>Middle-left wall</td><td>Between the eyes</td></tr>
  <tr><td>Veytharion</td><td>Woven Sash</td><td>Trap in front of Veytharion</td><td>Keep jumping (~1 min)</td><td>Lower-left spawn window</td><td>Forehead</td></tr></tbody></table></div>
  <div class="note">Every temple: aim the Monoliths → item in brazier → Astral Flame → marked zombie dies to the matching Titan hand → slab → charged shot raises the ring → disc → soul box → shoot face → Shadow Souls → shoot face → orb under the floating platform + charged shot → rain-round flame.</div>
  <h3 class="sec">Her House symbols (step 8)</h3>
  <div class="tool"><h4>Record the order they appear</h4>
   <div class="row">${[1,2,3,4].map(i=>`<label>${i}. <input id="hs${i}" style="width:9em;font:500 .95rem var(--body);background:var(--panel2);color:var(--fg);border:1px solid var(--line);border-radius:8px;padding:6px 8px" placeholder="position on house"></label>`).join("")}</div>
   <p class="lede" style="margin:6px 0 0">Exfil rounds: 11, 16, 21… Shoot them oldest to newest.</p></div>
  <h3 class="sec">Piano code (intel)</h3>
  <p class="lede"><span class="bigcode">8 · 6 · 7 · 5 · 6 · 5 · 3 · 5 · 4</span><br>Unlocks “A Game of Cat and Strauss” and the Blueprint.</p>
  <h3 class="sec">Veytharion blocks rule</h3>
  <p class="lede">Fire may never be left with Water or Earth unless Air is with them. Ferry Fire and Air first, bring Air back, then move Water and Earth one at a time.</p>`;
  const s=store.get("hs",{}); [1,2,3,4].forEach(i=>{const el=p.querySelector("#hs"+i); el.value=s[i]||""; el.addEventListener("input",()=>{s[i]=el.value;store.set("hs",s);});});
}

/* ---------------- PHOTO TOGGLES ---------------- */
function openPhoto(btn){
  const wrap=btn.parentElement, u=btn.dataset.src, o=btn.dataset.orig, l=btn.dataset.label, pg=btn.dataset.page;
  const credit = pg ? `<a href="${esc(pg)}" target="_blank" rel="noopener">${esc(srcName(pg))}</a>` : esc(srcName(o));
  btn.hidden=true; btn.setAttribute("aria-expanded","true");
  const fig=document.createElement("figure"); fig.className="phfig";
  fig.innerHTML=`<img src="${esc(u)}" alt="${esc(l)}" referrerpolicy="no-referrer" decoding="async" tabindex="0" title="Tap to shrink"><figcaption><span>${l} · image: ${credit}</span><a href="${esc(u)}" target="_blank" rel="noopener">Open full size</a></figcaption>`;
  const img=fig.querySelector("img"); let triedOrig=false;
  img.addEventListener("error",()=>{
    if(!triedOrig && o){ triedOrig=true; img.src=o; fig.querySelector("figcaption a").href=o; return; }
    img.outerHTML=`<div class="fail" tabindex="0" role="button">${esc(l)} couldn't load. <a href="${esc(o||u)}" target="_blank" rel="noopener">Open it on ${srcName(o||u)}</a> · tap to close</div>`;
  });
  wrap.style.display="block"; wrap.style.flex="1 0 100%";
  wrap.appendChild(fig);
}
function closePhoto(fig){
  const wrap=fig.parentElement, btn=wrap.querySelector("button.ph");
  fig.remove(); wrap.style.display=""; wrap.style.flex="";
  btn.hidden=false; btn.setAttribute("aria-expanded","false"); btn.focus({preventScroll:true});
}
document.addEventListener("click",e=>{
  const btn=e.target.closest("button.ph[data-src]");
  if(btn){ openPhoto(btn); return; }
  const all=e.target.closest("button.phall");
  if(all){
    const row=all.parentElement, open=row.querySelectorAll(".phfig").length>0;
    if(open){ row.querySelectorAll(".phfig").forEach(closePhoto); all.textContent="Show all"; }
    else { row.querySelectorAll("button.ph[data-src]").forEach(openPhoto); all.textContent="Hide all"; }
    return;
  }
  if(e.target.closest("a")) return;
  const fig=e.target.closest(".phfig");
  if(fig && (e.target.tagName==="IMG"||e.target.closest(".fail"))){
    const row=fig.closest(".phs"); closePhoto(fig);
    const a=row&&row.querySelector("button.phall"); if(a&&!row.querySelector(".phfig")) a.textContent="Show all";
  }
});
document.addEventListener("keydown",e=>{
  if((e.key==="Enter"||e.key===" ") && e.target.matches(".phfig img,.phfig .fail")){ e.preventDefault(); closePhoto(e.target.closest(".phfig")); }
  if(e.key==="Escape"){ const f=document.querySelector(".mv.mv-full"); if(f){ const b=f.querySelector('[data-z="fs"]'); if(b) b.click(); } }
});
window.addEventListener("hashchange",()=>{
  const [mp,tb]=(location.hash||"").slice(1).split("/");
  let ch=false;
  if (mp && mp!==state.map && (MAPS.some(m=>m.id===mp)||mp==="boss")){ state.map=mp; ch=true; }
  if (tb && tb!==state.tab && TAB_IDS.includes(tb)){ state.tab=tb; ch=true; }
  if (ch) render();
});

render();
