/* Shared helpers for the map data files. Every image URL here is the ORIGINAL source;
   the page loads Images/<file name> first and falls back to the original. */
window.MAPS = [];
const PX  = n => "https://www.powerpyx.com/wp-content/uploads/" + n + ".jpg";
const SK  = n => "https://skycoach.gg/storage/uploads/products/description/product_" + n + ".png";
const MGMAP = slug => "https://images.margwa.net/images/maps/" + slug + ".webp";
const E   = n => PX("black-ops-7-easter-egg-" + n);
const K   = n => PX("black-ops-7-zombies-easter-egg-" + n);
const MIX = n => PX("black-ops-7-mixologist-" + n);
const RL  = n => PX("black-ops-7-relic-" + n);
/* codzombiesguides.com photos (CZ) and its main-quest pages (CZQ); mmmrkennedy.com photos (MKP) and guides (MKQ) */
const CZ  = (map, n) => "https://www.codzombiesguides.com/content/" + map + "/" + map + "-" + n + ".webp";
const CZQ = map => "https://www.codzombiesguides.com/main-quests/black-ops-7/" + map;
const MKP = (map, n) => "https://mmmrkennedy.com/games/BO7/" + map + "/pictures/" + n + ".webp";
const MKQ = map => "https://mmmrkennedy.com/games/BO7/" + map + "/" + map + "_guide";

/* Local file name for an image URL (must match image-list.txt, which is generated from the same rule).
   PowerPyx / Skycoach / Margwa keep their own file name; other sites get a short hash prefix so
   different images that share a name (e.g. "11.PNG") never collide. */
const LEGACY_HOSTS = /powerpyx\.com|skycoach\.gg|margwa\.net/;
const fnv = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); };
const LOCAL = u => {
  const base = u.split("?")[0].split("/").pop();
  if (LEGACY_HOSTS.test(u)) return "Images/" + base;
  let b = base.replace(/[^A-Za-z0-9._-]/g, "_").slice(-60);
  if (!/\.(jpe?g|png|webp|gif|avif)$/i.test(b)) b += ".jpg";
  return "Images/" + fnv(u) + "-" + b;
};

/* Pin categories for the interactive map */
window.PIN_CATS = {
  quest: { label: "Main quest", color: "#e0662b" },
  ww:    { label: "Wonder Weapon", color: "#c2410c" },
  egg:   { label: "Side egg", color: "#16a34a" },
  perk:  { label: "Free perk", color: "#0ea5e9" },
  pu:    { label: "Power-up", color: "#eab308" },
  music: { label: "Music", color: "#db2777" },
  intel: { label: "Intel", color: "#8b5cf6" },
  relic: { label: "Relic", color: "#dc2626" },
  tool:  { label: "Tools & pickups", color: "#64748b" }
};
