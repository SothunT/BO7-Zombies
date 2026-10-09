/* Extra screenshots from other guide sites, attached to steps, side eggs, relics and toy steps.
   Keys: "step:<step id>", "side:<side egg title>", "relic:<relic name>", "toy:<toy step index>".
   Each photo is [label, image URL, page it came from]. Loaded after the map files, before app.js. */
(function(){
const EXTRA = {
 "ashes": {
  "step:a1": [
   [
    "T.E.D.D.'s Head",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-pap-tedd-1024x576.jpg",
    "https://gameranx.com/features/id/557164/article/black-ops-7-zombies-how-to-unlock-pack-a-punch-on-ashes-of-the-damned/"
   ],
   [
    "Generator growth",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-farm-generator-shoot-1024x576.jpg",
    "https://gameranx.com/features/id/557164/article/black-ops-7-zombies-how-to-unlock-pack-a-punch-on-ashes-of-the-damned/"
   ],
   [
    "Pack-a-Punch",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-pap-1024x576.png",
    "https://gameranx.com/features/id/557164/article/black-ops-7-zombies-how-to-unlock-pack-a-punch-on-ashes-of-the-damned/"
   ]
  ],
  "step:a3": [
   [
    "Garage build",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-carcass-build-1024x576.jpg",
    "https://gameranx.com/features/id/557273/article/black-ops-7-zombies-how-to-unlock-the-ol-tessie-abomination-upgrade-on-ashes-of-the-damned/"
   ],
   [
    "Abomination heads",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-abomination-1024x576.png",
    "https://gameranx.com/features/id/557273/article/black-ops-7-zombies-how-to-unlock-the-ol-tessie-abomination-upgrade-on-ashes-of-the-damned/"
   ]
  ],
  "step:a11": [
   [
    "Ashwood generator",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-canister-generator1-1024x576.jpg",
    "https://gameranx.com/features/id/557345/article/black-ops-7-zombies-ashes-of-the-damned-main-quest-easter-egg-guide/"
   ],
   [
    "Blackwater generator",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-canister-generator2-1024x576.jpg",
    "https://gameranx.com/features/id/557345/article/black-ops-7-zombies-ashes-of-the-damned-main-quest-easter-egg-guide/"
   ],
   [
    "Farm generator",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-canister-generator3-1024x576.jpg",
    "https://gameranx.com/features/id/557345/article/black-ops-7-zombies-ashes-of-the-damned-main-quest-easter-egg-guide/"
   ]
  ],
  "step:a28": [
   [
    "Boss fight",
    "https://image.thenerdstash.com/2025/11/Ashes-of-the-damned-boss-fight-1024x576.jpg",
    "https://thenerdstash.com/ashes-of-the-damned-zombies-full-easter-egg-quest-guide/"
   ],
   [
    "Ram the mouth",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-boss3-ram-1-1024x576.jpg",
    "https://gameranx.com/features/id/557345/article/black-ops-7-zombies-ashes-of-the-damned-main-quest-easter-egg-guide/"
   ],
   [
    "Beam charge",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-boss5-charge-1024x576.jpg",
    "https://gameranx.com/features/id/557345/article/black-ops-7-zombies-ashes-of-the-damned-main-quest-easter-egg-guide/"
   ]
  ],
  "side:Ghost Twins": [
   [
    "Farmhouse TV",
    "https://www.destructoid.com/wp-content/uploads/2025/11/MixCollage-17-Nov-2025-01-49-PM-8496.jpg",
    "https://www.destructoid.com/how-to-complete-the-ghost-twins-easter-egg-in-black-ops-7-zombies-ashes-of-the-damned/"
   ],
   [
    "Twin",
    "https://www.destructoid.com/wp-content/uploads/2025/11/MixCollage-17-Nov-2025-01-49-PM-4416.jpg",
    "https://www.destructoid.com/how-to-complete-the-ghost-twins-easter-egg-in-black-ops-7-zombies-ashes-of-the-damned/"
   ],
   [
    "Both twins",
    "https://www.destructoid.com/wp-content/uploads/2025/11/MixCollage-17-Nov-2025-01-50-PM-3576.jpg",
    "https://www.destructoid.com/how-to-complete-the-ghost-twins-easter-egg-in-black-ops-7-zombies-ashes-of-the-damned/"
   ]
  ],
  "side:Ray Gun Mark II": [
   [
    "Jump pad",
    "https://gamingpromax.com/wp-content/uploads/2025/12/exit-115-jump-pad-in-black-ops-7-e1765376452630.webp",
    "https://gamingpromax.com/black-ops-7-free-ray-gun-mk2-ashes-damned-guide/"
   ],
   [
    "Ashwood pad",
    "https://gamingpromax.com/wp-content/uploads/2025/12/ashwood-jump-pad-in-black-ops-7-e1765376304200-1024x561.webp",
    "https://gamingpromax.com/black-ops-7-free-ray-gun-mk2-ashes-damned-guide/"
   ],
   [
    "Portal",
    "https://gamingpromax.com/wp-content/uploads/2025/12/vandorn-farm-portal-in-black-ops-7-e1765376629277-1024x562.webp",
    "https://gamingpromax.com/black-ops-7-free-ray-gun-mk2-ashes-damned-guide/"
   ]
  ],
  "side:Toxic Spores": [
   [
    "Fumigator",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-fumigator3-1024x576.jpg",
    "https://gameranx.com/features/id/557330/article/black-ops-7-zombies-ashes-of-the-damned-plant-easter-egg-guide/"
   ],
   [
    "Toxic plant",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-plant-1024x576.jpg",
    "https://gameranx.com/features/id/557330/article/black-ops-7-zombies-ashes-of-the-damned-plant-easter-egg-guide/"
   ],
   [
    "Bloomed spore",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-spore-1024x576.jpg",
    "https://gameranx.com/features/id/557330/article/black-ops-7-zombies-ashes-of-the-damned-plant-easter-egg-guide/"
   ]
  ],
  "side:Lucidity": [
   [
    "Dog tags",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-tags-1024x576.jpg",
    "https://gameranx.com/features/id/557272/article/black-ops-7-zombies-how-to-complete-the-dempsey-dog-tags-easter-egg-on-ashes-of-the-damned-good-soldiers-achievement-guide/"
   ],
   [
    "Black orb",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-tags-orb-1024x576.jpg",
    "https://gameranx.com/features/id/557272/article/black-ops-7-zombies-how-to-complete-the-dempsey-dog-tags-easter-egg-on-ashes-of-the-damned-good-soldiers-achievement-guide/"
   ]
  ],
  "side:Cursed Bear": [
   [
    "Orda tracks map",
    "https://gameranx.com/wp-content/uploads/2025/12/bo7-ashes-orda-map-1024x576.png",
    "https://gameranx.com/features/id/558026/article/black-ops-7-zombies-how-to-complete-the-bear-tracks-easter-egg-on-ashes-of-the-damned/"
   ],
   [
    "Footprint",
    "https://gameranx.com/wp-content/uploads/2025/12/bo7-ashes-orda-track1-1024x576.png",
    "https://gameranx.com/features/id/558026/article/black-ops-7-zombies-how-to-complete-the-bear-tracks-easter-egg-on-ashes-of-the-damned/"
   ],
   [
    "Bear fight",
    "https://gameranx.com/wp-content/uploads/2025/12/bo7-ashes-bear-fight-1024x576.png",
    "https://gameranx.com/features/id/558026/article/black-ops-7-zombies-how-to-complete-the-bear-tracks-easter-egg-on-ashes-of-the-damned/"
   ]
  ],
  "side:Free power-ups": [
   [
    "Fire Sale icon",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-sale-scope-1024x576.jpg",
    "https://gameranx.com/features/id/558154/article/black-ops-7-zombies-how-to-get-all-free-power-ups-on-ashes-of-the-damned/"
   ],
   [
    "Fire Sale spot",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-sale-1024x576.jpg",
    "https://gameranx.com/features/id/558154/article/black-ops-7-zombies-how-to-get-all-free-power-ups-on-ashes-of-the-damned/"
   ],
   [
    "Max Ammo icon",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-ammo-scope-1024x576.jpg",
    "https://gameranx.com/features/id/558154/article/black-ops-7-zombies-how-to-get-all-free-power-ups-on-ashes-of-the-damned/"
   ]
  ],
  "side:Song: “Turn to Ashes”": [
   [
    "Server room",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-headphones1-1024x576.jpg",
    "https://gameranx.com/features/id/557165/article/black-ops-7-zombies-ashes-of-the-damned-music-easter-egg-guide/"
   ],
   [
    "Ashwood ledge",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-headphones2-1024x576.jpg",
    "https://gameranx.com/features/id/557165/article/black-ops-7-zombies-ashes-of-the-damned-music-easter-egg-guide/"
   ],
   [
    "Truck seat",
    "https://gameranx.com/wp-content/uploads/2025/11/bo7-ashes-headphones3-1024x576.jpg",
    "https://gameranx.com/features/id/557165/article/black-ops-7-zombies-ashes-of-the-damned-music-easter-egg-guide/"
   ]
  ],
  "relic:Vril Sphere": [
   [
    "Portal",
    "https://image.thenerdstash.com/2025/12/Virl-Sphere-Portal-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ],
   [
    "Trial",
    "https://image.thenerdstash.com/2025/12/Viral-Sphere-Relic-Trial-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ]
  ],
  "relic:Focusing Stone": [
   [
    "Zursa bottle",
    "https://image.thenerdstash.com/2025/12/Focusing-Stone-Bear-Hunt-Bottle-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ],
   [
    "T.E.D.D. bottle",
    "https://image.thenerdstash.com/2025/12/Focusing-Stone-Bottle-2-TEDD-TASK-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ],
   [
    "Bottle puzzle",
    "https://image.thenerdstash.com/2025/12/Focusing-Stone-Bottle-Puzzle-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ]
  ],
  "relic:Blood Vial": [
   [
    "Red phone",
    "https://image.thenerdstash.com/2025/12/Blackwater-Lake-Red-Telephone-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ],
   [
    "Red phone",
    "https://image.thenerdstash.com/2025/12/Ashwood-Red-Telephone-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ],
   [
    "Trial",
    "https://image.thenerdstash.com/2025/12/Blood-Vials-Trial-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ]
  ],
  "relic:TranZit Bus": [
   [
    "Trial",
    "https://image.thenerdstash.com/2025/12/Bus-Relic-Trial-1024x576.jpg",
    "https://thenerdstash.com/black-ops-7-zombies-ashes-of-the-damned-all-relics-location-and-guide/"
   ]
  ],
  "relic:Dragon": [
   [
    "Boat house",
    "https://nfapi.noobfeed.com/storage/media/45199/Call-of-Duty-Black-Ops-7-Dragon-3.jpg",
    "https://www.noobfeed.com/articles/call-of-duty-black-ops-7-dragon-relic"
   ],
   [
    "Trial start",
    "https://nfapi.noobfeed.com/storage/media/45198/Call-of-Duty-Black-Ops-7-Dragon-2.jpg",
    "https://www.noobfeed.com/articles/call-of-duty-black-ops-7-dragon-relic"
   ]
  ],
  "relic:Samantha's Drawing": [
   [
    "Samantha's Drawing relic",
    "https://www.codzombiesguides.com/relics/samanthas-drawing-relic.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/samanthas-drawing"
   ],
   [
    "Relic trial portal (Zarya Cosmodrome)",
    "https://www.codzombiesguides.com/content/ashes-of-the-damned/aotd-samanthas-drawing-relic-trial-portal-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/samanthas-drawing"
   ]
  ]
 },
 "astra": {
  "step:m2": [
   [
    "Hacksaw case",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-f9Jov4MQ-ro-71-early-setup-museum.webp",
    "https://allthings.how/?p=204540"
   ],
   [
    "Hacksaw",
    "https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2025/12/03/scie-astra-malorum-bo7-zombies.jpg",
    "https://www.dexerto.fr/wikis/black-ops-7/easter-egg-quete-principale-astra-malorum/"
   ]
  ],
  "step:m6": [
   [
    "Code machine",
    "https://static.beebom.com/wp-content/uploads/2025/12/Black-Ops-7-Astra-Malorum-Planetary-Code-Machine.jpg",
    "https://beebom.com/black-ops-7-zombies-astra-malorum-main-easter-egg-guide/amp/"
   ],
   [
    "Cryo Key",
    "https://static.beebom.com/wp-content/uploads/2025/12/Black-Ops-7-Astra-Malorum-Cryo-Pod.jpg",
    "https://beebom.com/black-ops-7-zombies-astra-malorum-main-easter-egg-guide/amp/"
   ],
   [
    "Following O.S.C.A.R.",
    "https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2025/12/03/oscar-bo7-zombies.jpg",
    "https://www.dexerto.fr/wikis/black-ops-7/easter-egg-quete-principale-astra-malorum/"
   ]
  ],
  "step:m13": [
   [
    "Pillar symbols",
    "https://static.beebom.com/wp-content/uploads/2025/12/Black-Ops-7-Astra-Malorum-Symbol-Activation.jpg",
    "https://beebom.com/black-ops-7-zombies-astra-malorum-main-easter-egg-guide/amp/"
   ],
   [
    "Pillar",
    "https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2025/12/03/piliers-astra-malorum-bo7-zombies-1024x576.jpg",
    "https://www.dexerto.fr/wikis/black-ops-7/easter-egg-quete-principale-astra-malorum/"
   ]
  ],
  "side:Wisp Orbs": [
   [
    "Wisps",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-lHr8EGQGyIs-111-upgrading-wisps.webp",
    "https://allthings.how/?p=204540"
   ]
  ],
  "toy:3": [
   [
    "Gold wisps",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-lHr8EGQGyIs-111-upgrading-wisps.webp",
    "https://allthings.how/?p=204540"
   ]
  ],
  "side:DG-2 space trip": [
   [
    "DG-2 on Tessie",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-WAOfhhhhw2w-88-wunderwaffe-dg-2-turret-side-quest-overv.webp",
    "https://allthings.how/?p=204540"
   ]
  ],
  "side:Bongo the friendly Ravager": [
   [
    "Bongo",
    "https://www.destructoid.com/wp-content/uploads/2025/12/MixCollage-06-Dec-2025-11-39-AM-4195.jpg",
    "https://www.destructoid.com/?p=1151593"
   ],
   [
    "O.S.C.A.R.",
    "https://www.destructoid.com/wp-content/uploads/2025/12/1938090_905.jpg",
    "https://www.destructoid.com/?p=1151593"
   ]
  ],
  "side:Free perk — Museum gramophone": [
   [
    "Museum record location",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/record_speed_cola.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Museum gramophone by Speed Cola",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/gramophone_speed_cola.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Record on the wooden beam",
    "https://detonated.com/wp-content/uploads/2025/12/img_9871-1024x577.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Gramophone by Speed Cola",
    "https://detonated.com/wp-content/uploads/2025/12/img_9885-1024x577.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Free perk — Luminarium gramophone": [
   [
    "Luminarium record location",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/record_luminarium.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Luminarium gramophone",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/gramophone_luminarium.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Record by the grandfather clock",
    "https://detonated.com/wp-content/uploads/2025/12/img_9888-1024x581.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Gramophone between the couches",
    "https://detonated.com/wp-content/uploads/2025/12/img_9889-1024x582.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Luminarium gramophone",
    "https://www.destructoid.com/wp-content/uploads/2025/12/gramo.jpg",
    "https://www.destructoid.com/black-ops-7-zombies-astra-malorum-alpha-omega-game-over-song-easter-egg-walkthrough/"
   ]
  ],
  "side:Free perk — Archive gramophone": [
   [
    "Archive record location",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/record_orbis.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Archive of Orbis gramophone",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/gramophones/gramophone_orbis.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Record in the box",
    "https://detonated.com/wp-content/uploads/2025/12/img_9886-1024x577.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Gramophone by Stamin-Up",
    "https://detonated.com/wp-content/uploads/2025/12/img_9887-1024x577.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Five Skulls": [
   [
    "Skull: Luminarium",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/skull_luminarium.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Skull: Museum (Speed Cola)",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/skull_speed_cola.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Skull: Stargazer's Courtyard",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/skull_stargazers.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Skull: Machina Astralis",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/skull_arsenal.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Skull: The Veilwalk",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/skull_veilwalk.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Mirror cabinet for the skulls",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_perk_skulls/cabinet_with_mirror.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Skull in Museum display case",
    "https://detonated.com/wp-content/uploads/2025/12/img_9891-1024x581.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Skulls placed on the cabinet",
    "https://detonated.com/wp-content/uploads/2025/12/img_9898-1024x582.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:The Twins": [
   [
    "First display case (Museum)",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/display_case_inital.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Twins: Crash Site",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/twins_crash_site.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Twins: Wisp Tea",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/twins_wisp_tea.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Twins: X9 Maverick",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/twins_x9_maverick.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Twins: Veilwalk",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/twins_veilwalk.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Twins: Museum",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/twins/twins_museum.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Museum display case",
    "https://detonated.com/wp-content/uploads/2025/12/img_9861-1024x580.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Time Dilation": [
   [
    "Clock: Luminarium",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/slow_down_time/clock_novaline.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Clock: Museum (Speed Cola)",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/slow_down_time/clock_speed_cola.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Clock: Machina middle floor",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/slow_down_time/clock_akita.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Clock: Machina bottom floor",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/slow_down_time/clock_main_ee_machine.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Clock: Archive by Stamin-Up",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/slow_down_time/clock_staminup.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ]
  ],
  "side:Echoes of the Damned (Nikolai)": [
   [
    "First Molotov spot",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/nikolai_side_quest/molotov_loc_1.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Fiery footprints",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/nikolai_side_quest/fire_steps.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Goat toy",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/nikolai_side_quest/goat_toy.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Altar in the cave",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/nikolai_side_quest/altar.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Footprints to the goat toy",
    "https://detonated.com/wp-content/uploads/2025/12/img_9859-1024x584.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Power-up statues": [
   [
    "Bonus Points",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/bonus_points.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Insta-Kill",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/insta_kill.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Double Points",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/double_points.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Nuke",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/nuke.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Full Power",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/full_power.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Max Armor",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/max_armour.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Max Ammo",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/max_ammo.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Fire Sale",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/fire_sale.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Random Perk",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/free_powerups/random_perk.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Max Ammo statue",
    "https://detonated.com/wp-content/uploads/2025/12/img_9905-1024x576.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ],
   [
    "Double Points statue",
    "https://detonated.com/wp-content/uploads/2025/12/img_9906-1024x575.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Song: “Magic”": [
   [
    "Headphones: Luminarium",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/song_ee/headphones_luminarium.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Headphones: Machina Astralis",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/song_ee/headphones_machina.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Headphones: Observatory Dome",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/song_ee/headphones_dome.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Mister Peeks headphones",
    "https://detonated.com/wp-content/uploads/2025/12/img_9841-1024x574.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Secret Pareidolia remaster": [
   [
    "Giant statue head on Mars",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/pareidolia_song/large_head_statue.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Statue head on Mars",
    "https://detonated.com/wp-content/uploads/2025/12/img_9846-1024x580.jpg",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "side:Skull jumpscare": [
   [
    "Skull in the binoculars",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/pictures/skull_jumpscare/skull_in_telescope.webp",
    "https://mmmrkennedy.com/games/BO7/astra_malorum/astra_malorum_guide"
   ],
   [
    "Tiny skull in the sky",
    "https://detonated.com/wp-content/uploads/2025/12/img_9851-1024x473.png",
    "https://detonated.com/all-astra-malorum-side-easter-eggs-and-rewards-in-black-ops-7-zombies-season-1/"
   ]
  ],
  "relic:Seed": [
   [
    "Grey pistol on the floor",
    "https://codcentral.net/assets/bo7-seed-relic-grey-pistol-luminarium.Cw88lGbh_Zzow8R.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-seed-relic/"
   ],
   [
    "Seed trial portal",
    "https://codcentral.net/assets/bo7-seed-relic-trial-portal-observatory-dome.DWTnCsX7_QFCYl.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-seed-relic/"
   ]
  ],
  "relic:Gong": [
   [
    "Lightning-rod zombie",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-gong-lightning-rod-zombie-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gong/"
   ],
   [
    "Lightbulb 1",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-gong-dome-light-bulb-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gong/"
   ],
   [
    "Lightbulb 2",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-gong-luminarium-light-bulb-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gong/"
   ],
   [
    "Lightbulb 3",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-gong-archive-light-bulb-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gong/"
   ],
   [
    "Gong trial portal",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-gong-relic-trial-portal-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gong/"
   ]
  ],
  "relic:Spider Fang": [
   [
    "O.S.C.A.R.",
    "https://codcentral.net/assets/bo7-spider-fang-relic-oscar-elite.D1cKhTmo_1rhIBK.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-spider-fang-relic/"
   ],
   [
    "Spider Fang trial portal",
    "https://codcentral.net/assets/bo7-spider-fang-relic-portal-archive-of-orbis.jCDFIfU1_2cKPox.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-spider-fang-relic/"
   ]
  ],
  "relic:Matryoshka Dolls": [
   [
    "Mars altar at round 40",
    "https://codcentral.net/assets/bo7-matryoshka-relic-mars-altar-horde.aYFI0FV8_Z1lxAXA.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-matryoshka-doll-relic/"
   ],
   [
    "C4 on the Mars altar",
    "https://codcentral.net/assets/bo7-matryoshka-relic-c4-meat-pile-mars.CGW4Mepg_ZpcBY2.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-matryoshka-doll-relic/"
   ],
   [
    "Trial portal at Machina Astralis",
    "https://codcentral.net/assets/bo7-matryoshka-relic-portal-machina-astralis.CkLlbWeV_ZUzn3H.webp",
    "https://codcentral.net/blog/bo7-astra-malorum-matryoshka-doll-relic/"
   ]
  ],
  "relic:Civil Protector Head": [
   [
    "Ol' Tessie in the Crash Site",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-civil-protector-head-tessie-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/civil-protector-head/"
   ],
   [
    "Headlight-to-chandelier diagram",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-civil-protector-head-diagram.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/civil-protector-head/"
   ],
   [
    "Relic trial portal",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-civil-protector-head-relic-trial-portal-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/civil-protector-head/"
   ]
  ],
  "relic:Golden Spork": [
   [
    "Ritual circle by the teleporter",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-golden-spork-ritual-circle-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/golden-spork/"
   ],
   [
    "Trial portal in the Crash Site",
    "https://www.codzombiesguides.com/content/astra-malorum/astra-malorum-golden-spork-relic-trial-portal-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/golden-spork/"
   ]
  ]
 },
 "pj": {
  "step:p1": [
   [
    "Truck keys",
    "https://www.moyens.net/wp-content/uploads/2026/03/Comment-obtenir-lamelioration-Pack-A-Punch-dans-Black-Ops-7-Zombies-Paradox.jpg",
    "https://www.moyens.net/?p=431445"
   ],
   [
    "Acid vial",
    "https://www.destructoid.com/wp-content/uploads/2026/03/Screenshot-2026-03-12-010450.png",
    "https://www.destructoid.com/?p=1190859"
   ],
   [
    "Goo walls",
    "https://www.destructoid.com/wp-content/uploads/2026/03/Screenshot-2026-03-12-005954.png",
    "https://www.destructoid.com/?p=1190859"
   ]
  ],
  "step:p2": [
   [
    "Pack-a-Punch",
    "https://s3-images.playhub.com/common_media/images/opnGFrz2dBHrYo9DDhKNL0wMyOireTGxkVqBpDmz.jpg",
    "https://playhub.com/blog/call-of-duty/paradox-junction-main-quest-guide-black-ops-7-zombies-069444"
   ],
   [
    "Time knots",
    "https://www.moyens.net/wp-content/uploads/2026/03/1773277218_780_Comment-obtenir-lamelioration-Pack-A-Punch-dans-Black-Ops-7-Zombies-Paradox.jpg",
    "https://www.moyens.net/?p=431445"
   ],
   [
    "Pack-a-Punch",
    "https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2026/03/12/sacre-punch-paradox-junction-bo7-zombies-1024x576.jpg",
    "https://www.dexerto.fr/wikis/black-ops-7/easter-egg-quete-principale-paradox-junction/"
   ]
  ],
  "side:Purple Cyst": [
   [
    "Cyst",
    "https://i.rutab.net/upload/2026/03/callofdutyblackops7/bb91ec14e5cf6650ff853996ac2fa6e5.webp",
    "https://rutab.net/b/games/2026/03/15/kak-otkryt-fioletovyy-cist-v-paradox-junction-v-call-of-duty.html"
   ],
   [
    "Head",
    "https://i.rutab.net/upload/2026/03/callofdutyblackops7/400e84625f1ff9c6177720bdfaf3201e.webp",
    "https://rutab.net/b/games/2026/03/15/kak-otkryt-fioletovyy-cist-v-paradox-junction-v-call-of-duty.html"
   ],
   [
    "Bone",
    "https://i.rutab.net/upload/2026/03/callofdutyblackops7/db872fae736a6699c6dbb73bcef3c7ab.webp",
    "https://rutab.net/b/games/2026/03/15/kak-otkryt-fioletovyy-cist-v-paradox-junction-v-call-of-duty.html"
   ]
  ],
  "side:Mini golf": [
   [
    "Mini golf",
    "https://xboxplay.games/uploadStream/72811.webp",
    "https://xboxplay.games/black-ops-7-zombies/minigolf-easter-egg-in-black-ops-7-zombies-72811"
   ]
  ],
  "side:Song: “Come Back Down”": [
   [
    "Yellow house",
    "https://www.destructoid.com/wp-content/uploads/2026/03/1938090_1128.jpg",
    "https://www.destructoid.com/?p=1190915"
   ],
   [
    "Trinity Ave perk",
    "https://www.destructoid.com/wp-content/uploads/2026/03/1938090_1129.jpg",
    "https://www.destructoid.com/?p=1190915"
   ],
   [
    "Under truck",
    "https://www.destructoid.com/wp-content/uploads/2026/03/1938090_1130.jpg",
    "https://www.destructoid.com/?p=1190915"
   ]
  ],
  "relic:Rocket": [
   [
    "Trial location",
    "https://media.gamesfuze.com/wp-content/uploads/2026/03/18195906/Black-Ops-7-Zombies-Rocket-Relic-Guide-Paradox-Junction-Relic-1-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-rocket-relic-guide-paradox-junction-relic/"
   ]
  ],
  "relic:Summoning Key": [
   [
    "Trial location",
    "https://media.gamesfuze.com/wp-content/uploads/2026/03/18195932/Black-Ops-7-Zombies-Summoning-Key-Relic-Guide-Paradox-Junction-Relic-4-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-summoning-key-relic-guide-paradox-junction-relic/"
   ]
  ],
  "step:p3": [
   [
    "Black growth (goo) wall, Yellow House garage",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-black-growth.webp",
    "https://www.codzombiesguides.com/main-quests/black-ops-7/paradox-junction"
   ],
   [
    "Stock part",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-stock-part.webp",
    "https://www.codzombiesguides.com/main-quests/black-ops-7/paradox-junction"
   ],
   [
    "Acid poured on the mannequin",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-acid-mannequin.webp",
    "https://www.codzombiesguides.com/main-quests/black-ops-7/paradox-junction"
   ],
   [
    "Hammer part",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hammer-part.webp",
    "https://www.codzombiesguides.com/main-quests/black-ops-7/paradox-junction"
   ],
   [
    "Sealant part",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-sealant-part.webp",
    "https://www.codzombiesguides.com/main-quests/black-ops-7/paradox-junction"
   ],
   [
    "Sealant location",
    "https://media.gamesfuze.com/wp-content/uploads/2026/03/12174733/BO7-Zombies-BlundergatSundergat-Guide-Sealant-1024x577.jpg",
    "https://gamesfuze.com/guides/bo7-zombies-blundergat-sundergat-guide-paradox-junction/"
   ]
  ],
  "side:Masked Mannequin Head": [
   [
    "Masked mannequin head",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-masked-mannequin-head.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/masked-mannequin"
   ],
   [
    "Headless mannequin soul box",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-masked-mannequin-soul-box.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/masked-mannequin"
   ],
   [
    "Loot explosion rewards",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-masked-mannequin-rewards.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/masked-mannequin"
   ]
  ],
  "side:115 Clock": [
   [
    "Clock tower set to 1:15",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-115-clock-tower.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/115-clock-tower"
   ],
   [
    "Quest rewards",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-115-clock-tower-rewards.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/115-clock-tower"
   ]
  ],
  "side:Dissolving Mannequins": [
   [
    "SO3 vial, Yellow House upstairs",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-so3-vial.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ],
   [
    "Green House kitchen sink (refill)",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-green-house-sink.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ],
   [
    "Mannequin: Green House kitchen",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mannequin-free-perk-first-mannequin.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ],
   [
    "Mannequin: Yellow House backyard, behind swing set",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mannequin-free-perk-ninth-mannequin.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ],
   [
    "Mannequin: Trinity Ave, right of Pack-a-Punch",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mannequin-free-perk-twelfth-mannequin.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ],
   [
    "Random perk reward",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mannequin-free-perk-reward.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/mannequin-free-perk"
   ]
  ],
  "side:Bunker": [
   [
    "Mannequin at the Yellow House stove",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-bunker-free-perk-mannequin.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/bunker-free-perk"
   ],
   [
    "Steak in the pan",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-bunker-free-perk-pan-steak.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/bunker-free-perk"
   ],
   [
    "Bonus Points on the table",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-bunker-free-perk-bonus-points.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/bunker-free-perk"
   ],
   [
    "Bunker door broken down",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-bunker-free-perk-open-door.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/bunker-free-perk"
   ],
   [
    "Bunker rewards",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-bunker-free-perk-rewards.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/bunker-free-perk"
   ]
  ],
  "side:Lost Key": [
   [
    "Plant pot with key outline",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-lost-key-plant-pot.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/lost-key"
   ],
   [
    "Lost Key",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-lost-key.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/lost-key"
   ],
   [
    "Lost Key briefcase",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-lost-key-rewards.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/lost-key"
   ]
  ],
  "side:Stalking Mannequin": [
   [
    "Twisted mannequin (Nuked Trinity Ave)",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Spot: Trinity Ave Green House chimney",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-spot-1.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Spot: behind fence left of Pack-a-Punch",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-spot-2.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Spot: Trinity Ave Blue House chimney",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-spot-3.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Spot: truck driver's seat",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-spot-4.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Spot: behind Mystery Box, Green House backyard",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-spot-5.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ],
   [
    "Reward",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-haunted-mannequin-reward.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/haunted-mannequin"
   ]
  ],
  "side:Power-up statues": [
   [
    "Max Ammo: generator by Yellow House (Normal)",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-max-ammo.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Insta-Kill: grill outside Green House backyard",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-insta-kill.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Nuke: top of clock tower",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-nuke.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Full Power: Green House upstairs bedroom",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-full-power.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Max Armor: yellow bus (Destroyed)",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-max-armor.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Bonus Points: house left of Pack-a-Punch",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-bonus-points.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Double Points: hole in wall, Destroyed Cul-de-Sac",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-double-points.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Fire Sale: Yellow House roof debris",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-fire-sale.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ],
   [
    "Random Perk: shelf behind beds, Yellow House upstairs",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-hidden-power-ups-random-perk.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/hidden-power-ups-paradox-junction"
   ]
  ],
  "side:TV jumpscare": [
   [
    "TV on the dresser",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-tv-jumpscare-tv.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/tv-jumpscare"
   ],
   [
    "Red orb in the sky",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-tv-jumpscare-red-orb.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/tv-jumpscare"
   ],
   [
    "Green House antenna",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-tv-jumpscare-green-house-antenna.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/tv-jumpscare"
   ],
   [
    "Jumpscare channel",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-tv-jumpscare-channel.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/paradox-junction/tv-jumpscare"
   ]
  ],
  "relic:Mangler Helmet": [
   [
    "Mangler Helmet relic",
    "https://www.codzombiesguides.com/relics/mangler-helmet-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mangler-helmet"
   ],
   [
    "Mister Peeks out of the box",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mangler-helmet-mister-peeks.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mangler-helmet"
   ],
   [
    "Mister Peeks on the mailbox",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mangler-helmet-mailbox.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mangler-helmet"
   ],
   [
    "Knife inside the mailbox",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mangler-helmet-knife.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mangler-helmet"
   ],
   [
    "Relic trial portal",
    "https://www.codzombiesguides.com/content/paradox-junction/paradox-junction-mangler-helmet-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mangler-helmet"
   ]
  ]
 },
 "toten": {
  "step:t4": [
   [
    "Burial Grounds",
    "https://www.destructoid.com/wp-content/uploads/2026/04/Burian-grounds.png",
    "https://www.destructoid.com/how-to-get-the-jotunn-star-wonder-weapon-in-black-ops-7-zombies-totenreich/"
   ],
   [
    "Chain Links",
    "https://grindout.com/storage/guide-images/227/chain-links.webp",
    "https://grindout.com/cod-bo7/guides/totenreich-easter-egg"
   ]
  ],
  "step:t6": [
   [
    "Puzzle",
    "https://s3-images.playhub.com/common_media/images/qSkmqY1KKDRV41NaJCoZd9yE2oigspJBGFrjBNIc.png",
    "https://playhub.com/blog/call-of-duty/totenreich-main-quest-guide-687178"
   ],
   [
    "Lantern",
    "https://www.destructoid.com/wp-content/uploads/2026/04/Lantern.png",
    "https://www.destructoid.com/how-to-get-the-jotunn-star-wonder-weapon-in-black-ops-7-zombies-totenreich/"
   ]
  ],
  "step:t9": [
   [
    "Glowing fish",
    "https://s3-images.playhub.com/common_media/images/5dIoKaqP2nMqeUIMBlIPQjINy9YywD6MgZiPoJTV.png",
    "https://playhub.com/blog/call-of-duty/totenreich-main-quest-guide-687178"
   ],
   [
    "Irradiated Ravager",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/04/29/Wolf-like-boss.jpg?width=1200&quality=50&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/totenreich-easter-egg-walkthrough/"
   ]
  ],
  "step:t13": [
   [
    "Core",
    "https://grindout.com/storage/guide-images/227/atomcraft.webp",
    "https://grindout.com/cod-bo7/guides/totenreich-easter-egg"
   ],
   [
    "Storm Bridge",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/04/29/Tank.jpg?width=1200&quality=50&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/totenreich-easter-egg-walkthrough/"
   ]
  ],
  "side:Fishing": [
   [
    "Cod Cranker",
    "https://www.destructoid.com/wp-content/uploads/2026/04/1938090_1204.jpg",
    "https://www.destructoid.com/how-to-find-olafs-cod-cranker-and-fish-in-black-ops-7-zombies-totenreich-fish-easter-egg/"
   ],
   [
    "Fishing spot",
    "https://www.destructoid.com/wp-content/uploads/2026/04/Screenshot-2026-05-01-004901.png",
    "https://www.destructoid.com/how-to-find-olafs-cod-cranker-and-fish-in-black-ops-7-zombies-totenreich-fish-easter-egg/"
   ],
   [
    "Rod",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/04/29/Fishing.jpg?width=1200&quality=50&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/totenreich-easter-egg-walkthrough/"
   ]
  ],
  "side:Fishy Fish Bot trap": [
   [
    "Fish Bot",
    "https://i.rutab.net/upload/2026/05/callofdutyblackops7/f345027b5ebea966e2f2de5da371a913.webp",
    "https://rutab.net/b/games/2026/05/02/kak-poluchit-mehanicheskuyu-rybolovnuyu-lovushku-v-totenreich.html"
   ]
  ],
  "side:Echoes of the Damned (Richtofen)": [
   [
    "Barrel",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/b136c3ddde81c6673dad18f143ebc3ff.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ],
   [
    "Iron Cross",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/59f6ff65d780d8aa5fb691917a42631d.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ]
  ],
  "side:Silent Heir crossbow": [
   [
    "Crossbow",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-BW2BmiLP-h4-29-upgrading-crossbow.webp",
    "https://allthings.how/how-to-get-the-guardian-toy-in-totenreich-black-ops-7-zombies/"
   ]
  ],
  "side:Free early tools": [
   [
    "Disciple Injection",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/04/29/Disciple-Injection.jpg?width=1200&quality=50&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/totenreich-easter-egg-walkthrough/"
   ]
  ],
  "side:Song: “No One There”": [
   [
    "Headset 1",
    "https://www.destructoid.com/wp-content/uploads/2026/04/MixCollage-01-May-2026-03-00-AM-6407.jpg",
    "https://www.destructoid.com/black-ops-7-zombies-totenreich-musical-easter-egg-solution-all-mr-peeks-headphone-locations/"
   ],
   [
    "Headset 2",
    "https://www.destructoid.com/wp-content/uploads/2026/04/MixCollage-01-May-2026-03-00-AM-5963.jpg",
    "https://www.destructoid.com/black-ops-7-zombies-totenreich-musical-easter-egg-solution-all-mr-peeks-headphone-locations/"
   ],
   [
    "Headset 3",
    "https://www.destructoid.com/wp-content/uploads/2026/04/MixCollage-01-May-2026-03-00-AM-6758.jpg",
    "https://www.destructoid.com/black-ops-7-zombies-totenreich-musical-easter-egg-solution-all-mr-peeks-headphone-locations/"
   ]
  ],
  "relic:Dancing Arnie": [
   [
    "Cooking pot",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/635b4da9530981a05d3a5e4648123c0c.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ],
   [
    "Lobster",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/70346ff1cd0849cd61ea4c10068a6093.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ],
   [
    "Soul box",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/041c8cc6fac41be379c8c9ee53191093.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ]
  ],
  "relic:Agarthan Device": [
   [
    "Teleport room",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/760d7bc8663a5c993c2058a82429448f.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ],
   [
    "Throne",
    "https://i.rutab.net/upload/tmp/2026/05/callofdutyblackops7/cd2c91eb65aed80ee79e25b3f8781640.webp",
    "https://rutab.net/b/games/2026/05/03/vse-relikvii-totenreich-v-black-ops-7-kak-nayti-i-poluchit-mrachnye-i-zloveschie-artefakty.html"
   ]
  ],
  "toy:0": [
   [
    "Iceberg",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-SkClHc8gfwk-54-thawing-and-reeling-the-box.webp",
    "https://allthings.how/how-to-get-the-guardian-toy-in-totenreich-black-ops-7-zombies/"
   ]
  ],
  "toy:3": [
   [
    "Crown",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-SkClHc8gfwk-164-defeating-king-dragvald-for-the-crown.webp",
    "https://allthings.how/how-to-get-the-guardian-toy-in-totenreich-black-ops-7-zombies/"
   ],
   [
    "Guardian toy",
    "https://static.allthings.how/wp-content/uploads/2026/09/black-ops-7-zombies-super-easter-egg-walkthrough-all-six-toys-and-rewards-70e0c6-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-super-easter-egg-walkthrough-all-six-toys-and-rewards/"
   ]
  ],
  "relic:Power Switch": [
   [
    "Scope in to read pyre skull counts",
    "https://games.gg/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,metadata=none,onerror=redirect/https://assets.games.gg/possible_relic_lead_rcodzombies_f6b2541f11.webp",
    "https://games.gg/call-of-duty-black-ops-7/guides/black-ops-7-how-to-get-power-switch-relic/"
   ]
  ],
  "relic:Music Box": [
   [
    "Music Box relic: headshots from Tyr's Head",
    "https://games.gg/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,metadata=none,onerror=redirect/https://assets.games.gg/image_1778435581649_c536e9b9f8.png",
    "https://games.gg/fr/call-of-duty-black-ops-7/guides/guide-bo7-zombies-d%C3%A9bloquer-la-relique-bo%C3%AEte-%C3%A0-musique/"
   ]
  ],
  "side:Golden Tide Helm": [
   [
    "Overview",
    "https://xboxplay.games/uploadStream/72799.webp",
    "https://xboxplay.games/black-ops-7-zombies/how-to-get-the-golden-tide-helmet-in-totenreich-black-ops-7-zombies-72799"
   ]
  ],
  "side:Icebane Helm": [
   [
    "Overview",
    "https://xboxplay.games/uploadStream/72842.webp",
    "https://xboxplay.games/black-ops-7-zombies/how-to-get-the-icebane-helm-in-totenreich-black-ops-7-zombies-72842"
   ]
  ],
  "side:Cointoss Helm": [
   [
    "Overview",
    "https://xboxplay.games/uploadStream/72843.webp",
    "https://xboxplay.games/black-ops-7-zombies/how-to-get-the-cointoss-helm-in-totenreich-black-ops-7-zombies-72843"
   ]
  ],
  "side:Tyr's Power-Ups": [
   [
    "Overview",
    "https://xboxplay.games/uploadStream/72791.webp",
    "https://xboxplay.games/black-ops-7-zombies/how-to-get-free-power-ups-in-totenreich-black-ops-7-zombies-72791"
   ]
  ],
  "side:Power-up statues": [
   [
    "Overview",
    "https://xboxplay.games/uploadStream/72941.webp",
    "https://xboxplay.games/black-ops-7-zombies/where-to-find-all-totenreich-free-power-up-in-black-ops-7-zombies-72941"
   ]
  ],
  "step:t11": [
   [
    "Glocke Drop: zombies float into the air",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI2X-Jwx6hdfiTrL4X2wBIR9vIeOVNA5_R0d0bf99pHeW06zE0VigheJGIVZ8apndOkg9CrJpB6_QCLbxIAqkkHAYcd2sjW21sXLtb2fynj7c7Hr0fY1CXlmYwz0OrtXDCZTKFUkiJCCITPemW-xUfFopsRwOSzQ3Mc8EIBPTuKGx9p87h2gIKFm0TXes/s320/24.PNG",
    "https://codzombified.blogspot.com/2026/06/totenreich-easter-egg-guide-part-2-call.html"
   ],
   [
    "Glocke Drop: shoot the floating zombies",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheY4feg6j2dqiVHMJS0i9P7boCPFMKYqM_RY3r_K8XpVfIRjDb02zW3NXoZXYSvlG2KHjdTgNLRMcQh7DGLR7ad_Ho8rOxDEZ_o0SV_FRKSmwwpWNfke9nAQOepEL-9EwY8BL5tCGiCnTZIa9S07wH4B9dQlRsubU7h_Mnz_cF2GcmspgzQwfbuPRpajI/s320/25.PNG",
    "https://codzombified.blogspot.com/2026/06/totenreich-easter-egg-guide-part-2-call.html"
   ],
   [
    "Glocke Drop: floating zombies (cont.)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkH1XcROpSOLpWvcga99ozGZr9aXBpW3Y2qRp6EUG4GvKmjNKlqhpL4BVvz3h-s7Tc3yfoJEt5jCZsCeAWVkQSSZlKr23LJEQOhFL23e6jlv4Z0AwiAAsIWy7be5TQAilMZfOkZdq8vEyRRrzSTlide6vl3JA4Mjvu2C_AZr_t1cGeqsGyEnUFrJTxDFY/s320/26.PNG",
    "https://codzombified.blogspot.com/2026/06/totenreich-easter-egg-guide-part-2-call.html"
   ]
  ],
  "side:Kneehigh Helm": [
   [
    "Gnome 1: Machine Workshop scaffolding",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-gnome-first-gnome.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/totenreich/kneehigh-helm/"
   ],
   [
    "Gnome 2: building outside Tyr's Foot",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-gnome-second-gnome.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/totenreich/kneehigh-helm/"
   ],
   [
    "Gnome 3: Stave Church, under the painting",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-gnome-third-gnome.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/totenreich/kneehigh-helm/"
   ],
   [
    "Gnome 4: Lighthouse, near the top",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-gnome-final-gnome.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/totenreich/kneehigh-helm/"
   ],
   [
    "Kneehigh Helm on the counter",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-gnome-viking-helmet.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/totenreich/kneehigh-helm/"
   ]
  ],
  "relic:Wrestler's Belt": [
   [
    "Wrestler's Belt in the relic menu",
    "https://codcentral.net/assets/hero.PujEz7a8_Z1oSBFq.webp",
    "https://codcentral.net/blog/bo7-totenreich-wrestlers-belt-relic/"
   ],
   [
    "Wrestler's Belt relic icon",
    "https://codcentral.net/assets/belt-icon.DcbSoTQp_ZNuUO7.webp",
    "https://codcentral.net/blog/bo7-totenreich-wrestlers-belt-relic/"
   ],
   [
    "Mr. Peeks magazine in the lighthouse (only confirmed lead)",
    "https://codcentral.net/assets/totenreich-magazine-lighthouse.CAfL1t5m_1ULrDz.webp",
    "https://codcentral.net/blog/bo7-totenreich-wrestlers-belt-relic/"
   ]
  ],
  "relic:Stuffed Elephant": [
   [
    "Stuffed Elephant relic",
    "https://www.codzombiesguides.com/relics/stuffed-elephant-relic.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/stuffed-elephant"
   ],
   [
    "Stuffed Elephant trial portal",
    "https://www.codzombiesguides.com/content/totenreich/totenreich-stuffed-elephant-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/stuffed-elephant"
   ]
  ]
 },
 "kowa": {
  "step:k3": [
   [
    "Crafting table",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27102232/Black-Ops-7-Zombies-Nekomancer-Wonder-Weapon-Guide-Kowakujo-All-Correct-Steps-13-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-nekomancer-wonder-weapon-guide-kowakujo-all-correct-steps/"
   ],
   [
    "Furin bell",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27102202/Black-Ops-7-Zombies-Nekomancer-Wonder-Weapon-Guide-Kowakujo-All-Correct-Steps-1-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-nekomancer-wonder-weapon-guide-kowakujo-all-correct-steps/"
   ],
   [
    "Cat statue",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27102222/Black-Ops-7-Zombies-Nekomancer-Wonder-Weapon-Guide-Kowakujo-All-Correct-Steps-9-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-nekomancer-wonder-weapon-guide-kowakujo-all-correct-steps/"
   ]
  ],
  "step:k4": [
   [
    "Paw prints",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27102241/Black-Ops-7-Zombies-Nekomancer-Wonder-Weapon-Guide-Kowakujo-All-Correct-Steps-16-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-nekomancer-wonder-weapon-guide-kowakujo-all-correct-steps/"
   ],
   [
    "Follow prints",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27102247/Black-Ops-7-Zombies-Nekomancer-Wonder-Weapon-Guide-Kowakujo-All-Correct-Steps-17-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-nekomancer-wonder-weapon-guide-kowakujo-all-correct-steps/"
   ]
  ],
  "step:k8": [
   [
    "War Room",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfS0rpmEPztGbTLeIcs6bHIayyyEoXfZkbAFdeSQkbJko5CN_YFQ1VW8I2kh8ihI-w_3X6MlYRUDb3rb-V9Bj1qgitltRkBdajMBxwcoUeBsV388wkbv3d7INqdo8Cu7-ugjKj6XN5ZQsCE36QdoEFE2Q1nAmZBs_by6LMnc3ObGwn4lkpW13aLDQQPMg/s1019/1.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Cutscene spot",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhubqhYj33NFg8cDjE1rLjqzk-1kniPbQ1jXicKP9jUb7LO7Eo8oe5pMvSlfjh6TSjwhmFfHicYEC6ydmTaY76eUKzw-Lpj9dgGh9VFVKroLbC6z9tpzH__N03sTKp0PEoLKFABx48sNPah3V1zSRuEGqJZnIGju-tIyndghp4kHaPxjS_-Mlr3C74k5Qs/s993/3.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ]
  ],
  "step:k9": [
   [
    "Mask target",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX7aL-ZXQbXFflQU_st5nBu60lYwGDyssfJiK0lIf7mn93GvwTNKdyyEH4MoWezURxGRcMQJ-272514acndGqTB1jSZcLA0wYGjb0t4VONt3yUMFH1r1bT0eE3SakrfOJC1J5Q0qggLP4MDddrOydQ-8DEXxF2UuCSU8gz1XQqOOA17ffbOtwgf1c5mOg/s978/11.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Fox Mask",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbWHP2O__UcJUFQt8pZgnpVKFUim-vyT0N7KDuceH6aK4jbzC1ywmo2OLbVzQMvdq3hnn7ZTBCwhkCZN5b71hyUCVqYFUqGIjUZ52F_142HwUnDC_f3Jdz8ZviWF6RT7Mw2fEDhdgzTy6PeQ3eMj-Ci5kxSTWFtp4vAHCfowMeLp6GHu9kGDlkW8JgZig/s803/13.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Mask wall",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/06/23/Fox-Masks-COD-1024x576.jpg?width=1200&quality=75&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/kowakujo-easter-egg-walkthrough/"
   ]
  ],
  "step:k11": [
   [
    "Pipe (Workshop)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8zDvOhvPVEelfa2QVLVOxKLljJ7P9O6Iacpxw58fZMFtH_Q9_5MxxdTFI9BR5rC7RihTreSlmXr-5IwspSc0_lhbr5xA-uJHwBzpXvhGtDwmzVKSKWK3cm_tKxLtChKwkhYv0CpIHBngmAI8D_IgsHvRd-7_SVydD_S2w3iVBXr9wWIS7pz8N0EGj1KQ/s1006/33.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Takeo's Case",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCslj9mjPPYCmYHoyH7Lrs2LQKiQm2QLbp-lSdPao0fv7LFwxc4VHVLxXDrxd0s8yyJExMxsjvOyJgt2-_RSBOKC-d-BfD7Xvq0PsKVcQM0wk_jGy88EG2KwOOECteNYFWESLdJ86H6jlf3FBlkKYSBRpsnvdhmT4qmufk36kUflQcs35QqcO7tiZg-Z8/s965/41.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Onsen window",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCjZWpZ08QFTlxE6nwjwZA6DRfldVnAsD-LP7MsXLaP-8hJKtCdsYEviLDm94kZsDl0SU6P80WRrsnRWdlhjiAsHCZXP7nnM3TR874aaLA2_OrE4GQ97KRhgmP4Kn8CnNMrPELlcq0F_myUW2qCQ2qYcHBeAjHOREl7xM4xHbMkVwq_LkcUkq5c_akC3s/s973/46.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ]
  ],
  "step:k12": [
   [
    "Tagged box",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_4Bey149EDxcHpzzvrT6Nme8Iish0HS9mB8Z4VTnNPV6s3jmz7Dq7pzPtSZBCMdheVoQWRXueHhr5ckmUF5uzSstMrPUrj4I08TS1rDZ7cQ0L1VkBiVqPvd3nNDH1avM0zut8R_k7Og2VLQge88Kw1oIpzONHSuvcHZclH6riWsSQYkTQgs9QpWCvXpc/s975/54.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Cat grenade",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWVVha3ocqwRGR8qS_1SYtxxDgHaD_w-l0y_xbQPPFK4OSYfd6d_krog95N7YlVxo39C0hyhGpbbpKvqwa8kEOjdheUdv5V-wp8HGLFuby6CtZslpRDpLLlOVqGgkt0gSAuBUrQHeB1HzK2PjDLVILc0wyDZkiNC7H7u-CooBKtzBq2tmbQuFiAO1MIDI/s647/58.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Coin Purse",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/06/23/Coin-Purse-COD-1024x576.jpg?width=1200&quality=75&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/kowakujo-easter-egg-walkthrough/"
   ]
  ],
  "step:k14": [
   [
    "Abacus",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/06/23/Mercantile-Abacus-COD-1024x576.jpg?width=1200&quality=75&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/kowakujo-easter-egg-walkthrough/"
   ]
  ],
  "step:k15": [
   [
    "Windows",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPllqo7Puctu_YJzKvCHm4QJuVw9254sU7zDxRr66hvQc_GIlat91LoMtpxzZrCZR0j6zIEgBRnRYDwEHSqcidJttZonyzK-dbp1w_p01SIhMcXG9wBDLkkSfMKnLTbwvEt6j4Imzb1Jk7rHTd1jUkpw10KUfJAt8TJ8xL31aYZoRaknL1Mm6NbyeYuMw/s1018/4.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-3-black.html"
   ],
   [
    "Nobleman's Hat",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP70xS_2HCQOYZyYG9DrdF9OGHPcatRf_dhBvOMhPiaroRFdfPCCdU_IpEHeIYd5JDnszDdqI67eUuTbdmbPX6hazwjez2N289iNqrpa3A8W5qhyphenhyphenkYO3fekvSz3LhaXIe1UDQ78Gy40ydwJDu6xGFgGLY0fe68UpXAJL_5zenDLQDpHX-FCQZHT9yEXTk/s607/13.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-3-black.html"
   ],
   [
    "Training Area",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/06/23/Noble-Zombie-COD-1024x576.jpg?width=1200&quality=75&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/kowakujo-easter-egg-walkthrough/"
   ]
  ],
  "step:k17": [
   [
    "Cup repair",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/06/23/Sake-Cup-COD-1024x576.jpg?width=1200&quality=75&format=auto",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/kowakujo-easter-egg-walkthrough/"
   ]
  ],
  "step:k23": [
   [
    "Coal",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAyjuLGFeA_5YwcfNIYUWunn1sMqvIl5H24QkMYOGdAHYF7vQNk7PiVPLsnBfTEzoXuc0jkDA8JAB0cbgyDB7pDuPZkRQXK632CqSTwUp3e6In1kw78pazHwRaF3WPiTXpkzlPyHjWoMUstIG0wmIHoPN3xQlql9gT-Piw7TaiC2s6FsEno0fpr88dI3Q/s861/9.png",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ],
   [
    "Matches",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9pVWEE3zRjBeEKjYZCBkRwRhtjj6SCMnMSpMLVryTFUS7mW13Vl2LbQi7WxpqBUqqADpWkeWc5pYr-WxxDyBeZbZsHMqlQgUrIH_r-TTcXsYHa02rWGnU_49XOhA-MIuwCDFlK63F6AaZWgTTnDtJl0B9tVPxD3v5K7BLCCCXATb9Xg0UNgcdVLWNv4g/s937/11.PNG",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ],
   [
    "Crafting",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJtezuMBHbogJ2oI55c4wbMbR0qOh0pXQnXHNT0oW6mXQdqs-qPPRvykcBVQiIMJuSqeiy9kOJ0CGuFoI-FC71tuRFDpvpK8qM6oOQSFJxDOOK8O34xeLNvJNZ6mye-sutn3m8BGhb3CUqHIAYfgD7OOynVVpi-3CLyskSvNSqiAln5lgqSH5scb19o68/s767/13.PNG",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ]
  ],
  "side:Neko-Café": [
   [
    "Cat",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYvihWRYq43ieBok8LC6AW2x7J1QBxBEyxSZgQuDE9PdtetX17TP9tOeY6a-2-KnRMdL8HajThi7Ut67QZtS5_ArZnTke_SDhTkcUjG7TqkSwqLquk05Odmpiak4feD1SKg9Q7ZytQkXbTNbapkifJ7POurivrahnx6jwsOkmFZwX0dcUuCxd6d_jnWCs/s1031/39.PNG",
    "https://codzombified.blogspot.com/2026/07/cat-cafe-and-3-free-perks-in-kowakujo.html"
   ],
   [
    "Mouse",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUaXEwgewSkQ0S6AOjCe_-jiS3-6yYEOWiTJRYJPM2c1PgHnZgnXDFAFI4rrY-P5mQFOi_M7kUGRm-ixzwhP3L_56gGJgVU5yPeT65IvM-tIJQwgtU5pEh0Xan9qmg7QYF7V6cXtPKgaJRILq-U15FkQIqS5HhD6sONdfvtC3ra6yAPDCPUEDZ_PzPyy8/s1058/28.PNG",
    "https://codzombified.blogspot.com/2026/07/cat-cafe-and-3-free-perks-in-kowakujo.html"
   ],
   [
    "Mice shelf",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_lKxXGVwKiZ-mmoYp1Z-7D_hSmtaj_qdMmiWg1wVPXZlKD5TYuAOZLXeW0qWFOIE0dbLEyaB24zjSIPPTudbbET82hnzQRu3PLxnlF7wZXvUkJQ7fFZYbNNLEd6Hi68TnPSe62Uan1K-VArRVLdP9XTthkVf9xUJL93WEymtpH4dD63XtUEz0SjPXBEc/s1035/54.PNG",
    "https://codzombified.blogspot.com/2026/07/cat-cafe-and-3-free-perks-in-kowakujo.html"
   ]
  ],
  "side:Mecha-Klaus": [
   [
    "Lava rocks",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27085511/Black-Ops-7-Zombies-Mech-Samurai-Suit-Easter-Egg-Guide-Maneki-Mecha-Dark-Ops-1-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-mech-samurai-suit-easter-egg-guide-maneki-mecha-dark-ops/"
   ],
   [
    "Klaus body",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27085533/Black-Ops-7-Zombies-Mech-Samurai-Suit-Easter-Egg-Guide-Maneki-Mecha-Dark-Ops-4-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-mech-samurai-suit-easter-egg-guide-maneki-mecha-dark-ops/"
   ],
   [
    "Kaiju fight",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/27085545/Black-Ops-7-Zombies-Mech-Samurai-Suit-Easter-Egg-Guide-Maneki-Mecha-Dark-Ops-6-1024x576.jpg",
    "https://gamesfuze.com/guides/black-ops-7-zombies-mech-samurai-suit-easter-egg-guide-maneki-mecha-dark-ops/"
   ]
  ],
  "side:Horse race": [
   [
    "Carrot",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGdRA-FJyhqaHDUoTwEhNu38Cw8JNMiIbSnWf7Chxgy7AVfp2CpKmSdcSZPKlXpN_PZ784DtAbsly688sO8Ooid00B0iOCOFc0m618QMpkBTAnvBP-Vs4QhgvhREwhWdTMODy7Rwg4ekxoadT0bzD60Nyd4Ndzdldu9m10sx0e7EtqP1cqefGiOUYS3II/s1266/0.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-origami-horse-protector.html"
   ],
   [
    "Workshop carrot",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJI6LTHz5nTIcLytbNk4XCv6pHY_I6eBKK0CIhyphenhypheniGgIDf__NE5uehGDfAh7MB9cqbRcWQXa5SDb8hKr6MChjp_sgT8Slx2MUq-E1WNSo8dO-Lz4QViAmEFPCImI-3cZAsrdQdIY3_rrpmSOkpg9JmeYvDXTzduHTp52t0MwBgfdX6lETb8ViWpTv9a9ro/s1278/11.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-origami-horse-protector.html"
   ],
   [
    "Horse bucket",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCjjzwSMX3hx6C4oiy39zx4noySMz7lXq2RFhJhdNR4qwpclAHrOb1eKzUxbyZtRIzKoPpLhPD91Xbh4XpaVEsYiP0aXuaZlKR7mpmxvYNoqTFYxtWbS1Kgdfe5TP1Qw_GCJ49RBKnBoeYzRB5j6o5IUNLdLHg00bGzqFHa7Btw28Bg6QE25-mcLlvsG4/s1152/31.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-origami-horse-protector.html"
   ]
  ],
  "side:Gacha machine": [
   [
    "Cherry tree",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqFOdVkij7_gckYW97ALQO629aGVV-kEWx8GlsD2CAH5U4i9wHjX_OytkY3u6ioTfIm_2_K_FYsKAYDFO8ErGLhGDUE02NiOvEI-A9S-cIYgztJU-3_P6pgzzW6JzNdT8VcTx9OzuDFCMn1aBwUNmzuggckSPYvMYfF5CSbHV9CWx9exfYCokbsNKvq1c/s975/7.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-unlock-secret-gacha-machine.html"
   ],
   [
    "Gacha machine",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiisKDxeBN2drfleCNwvZu7wlCc_Tiqn6lL4tgZTqVW36EK1-ETHMEDfsT2Zst-LtlKsaXLZBAbmGtYO1bEXUaElhuzDrN6wg_VETIVD9tBNBjQQBhKFzzNxcCGWkzcVOjLMtxb0b4KI7xg4DrTIgntmUS4gzuCh6nRV8BdAhMlLagBbkgW3ETV-8WvpSo/s1045/10.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-unlock-secret-gacha-machine.html"
   ],
   [
    "Orb circle",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiWO21Nr6DjxzzNiDhakAfTlJ4AqbILLQ135O_fayv0vPM_P0BxAmd2QB6S21Vhgkw7oD4cCKS3yYxRjeQVcyPvECbwKDJXIirYcng7RxWwNl5jOt5GUtiVJo7cqLKgzecxxR_WFyHSQ9qO2aB3PfBz2eT__0GaPk5ranOxAZQ9m2OFRzNTVuZ1abZyhg/s887/14.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-unlock-secret-gacha-machine.html"
   ]
  ],
  "side:Takeo Flashback": [
   [
    "Katanas",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/28011758/01-War-Room-1024x576.png",
    "https://gamesfuze.com/guides/black-ops-7-zombies-secret-takeo-easter-egg-guide-reunion-dark-ops/"
   ],
   [
    "Ghost Takeo",
    "https://media.gamesfuze.com/wp-content/uploads/2026/06/28011817/02-Katana-1024x576.png",
    "https://gamesfuze.com/guides/black-ops-7-zombies-secret-takeo-easter-egg-guide-reunion-dark-ops/"
   ]
  ],
  "side:Upgraded trap (Tenshu Entrance)": [
   [
    "Blue targets",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNL3W44aPRy37YuKK0l0fYQabguj-jijzGLEt25WbDz76y4XylPS656JxziZ52t3ixzhSjCJBvZQ23ODW8I3Wct1Zgj2u1e1NnDeg9gc20iNmw8YWh2hCEVfd9qRl_kHFuCmOrBydr6bvKXHjueiZlgGMZ2wmd7o3kN0WXVZbyJCaV3cWlj_HH6HX5F4I/s869/5.PNG",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ]
  ],
  "side:Upgraded Maneki-Neko": [
   [
    "Coal",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAyjuLGFeA_5YwcfNIYUWunn1sMqvIl5H24QkMYOGdAHYF7vQNk7PiVPLsnBfTEzoXuc0jkDA8JAB0cbgyDB7pDuPZkRQXK632CqSTwUp3e6In1kw78pazHwRaF3WPiTXpkzlPyHjWoMUstIG0wmIHoPN3xQlql9gT-Piw7TaiC2s6FsEno0fpr88dI3Q/s861/9.png",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ],
   [
    "Matches",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9pVWEE3zRjBeEKjYZCBkRwRhtjj6SCMnMSpMLVryTFUS7mW13Vl2LbQi7WxpqBUqqADpWkeWc5pYr-WxxDyBeZbZsHMqlQgUrIH_r-TTcXsYHa02rWGnU_49XOhA-MIuwCDFlK63F6AaZWgTTnDtJl0B9tVPxD3v5K7BLCCCXATb9Xg0UNgcdVLWNv4g/s937/11.PNG",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ],
   [
    "Crafting",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJtezuMBHbogJ2oI55c4wbMbR0qOh0pXQnXHNT0oW6mXQdqs-qPPRvykcBVQiIMJuSqeiy9kOJ0CGuFoI-FC71tuRFDpvpK8qM6oOQSFJxDOOK8O34xeLNvJNZ6mye-sutn3m8BGhb3CUqHIAYfgD7OOynVVpi-3CLyskSvNSqiAln5lgqSH5scb19o68/s767/13.PNG",
    "https://codzombified.blogspot.com/2026/07/maneki-bomb-upgrade-in-kowakujo-black.html"
   ]
  ],
  "side:Ninja Kites": [
   [
    "Kite jump",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCumNB3C85tZO15819jqgTGg3C5p6tBYtImKsCn3dC8ueT3g5sZPTdqsZ0jzLGE6-nAHi6XhxBJGJ8Oq7no_ucvZF1BQWGuAYygwgcZ3BugzW378GlPcW0srXiwK80jJ7w_05kja59sEd2OKSdkJuxI_2HY1oS4U7PcsQjnyde_VsboTx67WZ7-wiEKWI/s1014/6.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ],
   [
    "Thermals",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjVj-eweOfWpIFOVM0M3Iw7ex4NWGswkaTlh6LlbJKS_t41WIJNRHlGhjoA_92xw7v3liKcaf9jzgb5FJNJHCd5XVqEhA5Ysymf9xLg8YRT_IxCegAshZ3sTJ1O-p67ssI9XYAmiR3UY_VoivT9PqANj9-FNyBpLuYOFfut6EyuOw3Sco5snh0H-U5-XM/s946/7.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-easter-egg-guide-part-2-black.html"
   ]
  ],
  "side:Song: “Evencry”": [
   [
    "Headset 1",
    "https://gameshorizon.com/wp-content/uploads/2026/06/Black-Ops-7-Zombies-Kowakujo-1-Headphone-Locations-2-1024x576.webp",
    "https://gameshorizon.com/guides/bo7-zombies-kowakujo-all-3-headphone-locations/"
   ],
   [
    "Headset 2",
    "https://gameshorizon.com/wp-content/uploads/2026/06/Black-Ops-7-Zombies-Kowakujo-2-Headphone-Locations-1024x576.webp",
    "https://gameshorizon.com/guides/bo7-zombies-kowakujo-all-3-headphone-locations/"
   ],
   [
    "Headset 3",
    "https://gameshorizon.com/wp-content/uploads/2026/06/Black-Ops-7-Zombies-Kowakujo-3-Headphone-Locations-1024x576.webp",
    "https://gameshorizon.com/guides/bo7-zombies-kowakujo-all-3-headphone-locations/"
   ]
  ],
  "side:Free power-up statues": [
   [
    "Double Points",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhd5xo71_FDwsjZFj9eRfTsUj9F5GPSikrPrMItCe1nuv5HDcSxJOtcE-2aIRNq8NlkxPo7v-t3KTruUGtm_c2qComeBl4SWsTueakDPTESwmS280qMdpsFVmqZRc2qtx0BE-5uLndoze6isRZTBdbb8l14dS3a6LIfBpS1kcubSI3wVaFvSpFvUQUvKyg/s907/5.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Max Armor (Workshop)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglDx8CG2bUSuOi8vCB9c9wKEdMY0HjuceJvBQEKWdeukL-AFEHi2K917PLK5O1PR95nZeGj70StI81_HYIxxNNEqMABVN61SyQe6Pj4t0Ep9Wz5S7ZpgMZ1jZjCW_t8nbACcx8dMcrMRMm4IcnDVuEbKdMYpz1xHCbZOc_vUVMPjh9SPFAhPARF06536M/s916/12.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Insta-Kill (Storage Rooms)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpnrBEczxEgvAGjsclpExUMVZDUCEwsnYmZHBrAnG7LZ90CcLkexeK1xHE_KnTsmV-zMFCjXl6lLAu-ip30Y03jmK3ev0xY-UW-rmSdFfXj6pBtoy4TUcISTJP9_sfI68ziToSTj-990b80IV0eJjWVb1QR07uPP8RDLoRmr6TB97nmxfDGXasSrqH8V0/s895/18.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Full Power (Flower Garden)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSZQQxj6oPmRToKAhwq4O6ZPJ1jkxp8aO3g_KRMUVJNLWJHw4a3avv3AAMrY313HIZjVrhrKEDNZYaSqt8779JRGDRMkCJ9bOxhoCOqULn0wYHQz-0-pWsERGk5ajslsymSt4nvh5eovhmtmI6yuJBphH4ceLwQnCvP7Tg_r5zVe6phTLJYjLm-VS7NYU/s899/22.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Nuke (Training Area)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitjZ_CGkjbbfZcHGgRZ5x5-vMS8R3l44EXoEKRCfmG1IyhU6R2hNQn8N17Z0_s1xLsnDOxz1YbxLkWZfJAPlnwdDOasVELHDyJ2C7D34VqrQUKp0J0LXCX5JS4OFk82ZQJfkEEgcDNqhpb4KBBVG9hf-mNdJDEE9wsRXi1nWyP4IxzDIBvABbU4R7oquM/s893/28.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Max Ammo (Training Area)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioi63YH3DzzqWWbsvzUJ1m4jmNT3X0ULrOtUHjmsP0xM-5j8CVHqNQ7KYyR6E6psBetsXPJkqNLeqQuVR2PnTFP13t2Q3T5-Q4wl5tQg7alILsNhAOn6zii1dGGTcIi4BPIFbfsH0Ju_aWCVhHtR0A1uj9on2wxg20azLaYhmNmZvbBTg82frcwsVGzYI/s894/33.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Bonus Points (Kitchens)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS0L2fqoAvhi5g2T9p2AOQfZMmvIzts8KbwMBg7ovBqkO09WQTQG57hqp5jIplyooDgHwyVh9kvYcHGcxDaMN6xTsnnorStzuNpCIWZgnqk3hfHlLv29X46NjsFEa5WcusKdcna8PMDswisQtUOwzkfnh-qDxUmaOTgsfo9zfu2ZqQToYTQVHvsaWABiE/s925/38.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Fire Sale (Onsen Baths)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbIDpumt1mff3se1YUFL2zLuhT5Rphyng0TYfEBJct3DBEpdj7jFjHGVUoUFqhl13MJDOjrbqIdHm_ROMpMpKxjaziuRFyWHi1L0tcit8RDDP0Ssrj-NU_c5YoKDj30kCQ_E8oIaQYKoXQxhMR7dECmX-fYmqcg0PZUGmgpuIrsTmN1xHsoQZf2TGoy_M/s883/41.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ],
   [
    "Free Random Perk (Kitchens)",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_rOsyBgS-ZPXQtnKxjYyQ_1tiWBRdAbWsWVg065FILpJ8RQbU5nsQ1Eu5RLyBoeOQHl0p1qOPtw4PgXJrcIGjLSFfkoGABLC-HfvdDchJLwYBw5uhNSphOzT6f1wobu9OiKwF_eNILdewHsI683ngIZuycwHrqd6iLhMQXzpHyjW2f43Pu8scPiMX6Cw/s914/46.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-all-free-powerups-locations.html"
   ]
  ],
  "side:Lava-rock parkour": [
   [
    "Floating rock in the lava",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyObgJYEO3LjMk2A7dyWzDZchBME5hvY4wTm0UqHAREvl985YPq0IDNGg9HamyqfA7kQZBxi7XI2Xefr9NgEPz-MIeFtcYmDQ0d1gdkuRX461N08QWABItnwDiET9WLveWDOQ03KTJeHHt9CahSAvDRylZI67ZiKdVYngwbt6weEF7CGqwyeKtmwxXn_w/s1260/5.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-free-ray-gun-easter-egg-black.html"
   ],
   [
    "First rock obstacles",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSqr_O-5N2FOqTtX8OGsCm0oDTFHpHq7aGFHzi-13CtjpHGx-YGEoRACUHCNP2jKKrQvY2gzRH4K91yVOaiRuNmSL5H67F0qJnmjwDrPdI6MGzc8yiSXbSokKqQnwuEStKMOfYtyqh8WBn9d9t70_s2HtCbbEUO17p9vr3czgXqZI7nRuF1zX3uztvQ0E/s1260/10.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-free-ray-gun-easter-egg-black.html"
   ],
   [
    "Wall-run section",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9nNvnnOy96_myanq6ykHbiiE0VwCYECA0Deik3JoLsXqD5Zzi6qRJslZbRCrYKnjQJVF5i7WodvGspA_hoB2JRH3QvA2eQH7AH2l3qjpW8sicOQoYfDuxee-uTVmg7XrctOXNpc6Q5ZC5_z3ybyt2okfB01iV8Xb2lObkKBFL5AMb4wUP6IftplpLbuQ/s1272/14.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-free-ray-gun-easter-egg-black.html"
   ],
   [
    "Floating doors",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjnTYhmkMyCoY174IAEkxbBImJ6l4duzwXolCcnnDY_yIx7Dw-sHkkzjeQc121u-TnxeR6Am_tfjUeROAnKJYXkV7h9gJFoClrQcuiVqz68F0KWrwQWiYVly92tVTVMqHrREWU1vK4pg905ZDOK61cCwopfnZqcB3GjUVZKqi1FtU2IOs_NuOBPovKpKk/s1268/18.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-free-ray-gun-easter-egg-black.html"
   ],
   [
    "Ray Gun reward",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8Lsfmcc14XZXQcQd3fyo6a3M3F-Xg0QTB2N2RgAfQJ2431F9YpWA_xxzexeOK1XfEE4BGf_5mAj0TWQ0YNIYPKHjKABU3v2zkgYaFnqwJq6RKqIUd6VbBQ8bGkEOQeQNkWHwMPyvwcxCDO7b6YjhV6ffEswPzpJxLxIBLXCkrMmockYiSYCd48BVS_ZA/s992/28.PNG",
    "https://codzombified.blogspot.com/2026/07/kowakujo-free-ray-gun-easter-egg-black.html"
   ]
  ],
  "relic:Gramophone": [
   [
    "Gramophone relic",
    "https://www.codzombiesguides.com/relics/gramophone-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gramophone"
   ],
   [
    "Drumstick 1: Gatehouse window",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-gramophone-relic-gatehouse-drum-stick.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gramophone"
   ],
   [
    "Drumstick 2: Workshop panel",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-gramophone-relic-workshop-drum-stick.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gramophone"
   ],
   [
    "Drums by the stairs",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-gramophone-relic-drums.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gramophone"
   ],
   [
    "Gramophone trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-gramophone-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/gramophone"
   ]
  ],
  "relic:Druid Stone": [
   [
    "Druid Stone relic",
    "https://www.codzombiesguides.com/relics/druid-stone-relic.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/druid-stone"
   ],
   [
    "Druid Stone trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-druid-stone-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/druid-stone"
   ]
  ],
  "relic:Valkyrie Helmet": [
   [
    "Valkyrie Helmet relic",
    "https://www.codzombiesguides.com/relics/valkyrie-helmet-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ],
   [
    "Plate fragment",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-valkyrie-helmet-relic-first-plate-part.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ],
   [
    "Forged plate",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-valkyrie-helmet-relic-forged-plate.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ],
   [
    "Catnip in the Neko-Cafe",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-valkyrie-helmet-relic-cat-nip.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ],
   [
    "Rock by the cherry tree",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-valkyrie-helmet-relic-rock.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ],
   [
    "Valkyrie Helmet trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-valkyrie-helmet-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/valkyrie-helmet"
   ]
  ],
  "relic:Film Reel": [
   [
    "Film Reel relic",
    "https://www.codzombiesguides.com/relics/film-reel-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/film-reel"
   ],
   [
    "Film Reel trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-film-reel-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/film-reel"
   ]
  ],
  "relic:Dragon Egg": [
   [
    "Dragon Egg relic",
    "https://www.codzombiesguides.com/relics/dragon-egg-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/dragon-egg"
   ],
   [
    "Symbol 1: Workshop",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-dragon-egg-relic-workshop-symbol.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/dragon-egg"
   ],
   [
    "Symbol 2: Stables",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-dragon-egg-relic-stables-symbol.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/dragon-egg"
   ],
   [
    "Symbol 3: Outer Ward",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-dragon-egg-relic-outer-ward-symbol.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/dragon-egg"
   ],
   [
    "Dragon Egg trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-dragon-egg-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/dragon-egg"
   ]
  ],
  "relic:Mannequin Turret": [
   [
    "Mannequin Turret relic",
    "https://www.codzombiesguides.com/relics/mannequin-turret-relic-v1.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mannequin-turret"
   ],
   [
    "Mannequin Turret trial portal",
    "https://www.codzombiesguides.com/content/kowakujo/kowakujo-mannequin-turret-relic-trial-portal.webp",
    "https://www.codzombiesguides.com/relics/black-ops-7/mannequin-turret"
   ]
  ],
  "toy:1": [
   [
    "Map: cherry tree locations",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-Zwh1p33MbNM-36-open-doors-map-route.webp",
    "https://allthings.how/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy/"
   ],
   [
    "Guiding the bird between trees",
    "https://static.allthings.how/wp-content/uploads/2026/09/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy-9f4448-1024x576.png",
    "https://allthings.how/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy/"
   ],
   [
    "Training Area tree",
    "https://static.allthings.how/wp-content/uploads/2026/09/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy-ceea3a-1024x574.png",
    "https://allthings.how/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy/"
   ]
  ],
  "toy:3": [
   [
    "Claiming the Z-Rex toy",
    "https://static.allthings.how/wp-content/uploads/2026/09/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy-35b637-1024x576.png",
    "https://allthings.how/kowakujo-super-easter-egg-how-to-get-the-z-rex-toy/"
   ]
  ]
 },
 "rex": {
  "step:r2": [
   [
    "Purple orbs",
    "https://media.itemlevel.net/wp-content/uploads/2026/08/21094814/chrome_zBAZmuxyWG.jpg",
    "https://itemlevel.net/black-ops-7-zombies-how-to-get-purple-fire-rex-infernus-easter-egg/"
   ],
   [
    "Astral Flame",
    "https://media.itemlevel.net/wp-content/uploads/2026/08/21094913/chrome_dk0LH7Yjrw.jpg",
    "https://itemlevel.net/black-ops-7-zombies-how-to-get-purple-fire-rex-infernus-easter-egg/"
   ],
   [
    "Activating flame",
    "https://keengamer.com/wp-content/uploads/2026/08/Activating-Astral-Flame.jpg",
    "https://keengamer.com/articles/guides/black-ops-7-rex-infernus-complete-easter-egg-guide/"
   ]
  ],
  "step:r4": [
   [
    "Caltheris plates",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/08/17/Caltheris-Light-Beam-1024x576.jpg",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/rex-infernus-easter-egg-walkthrough/"
   ]
  ],
  "step:r5": [
   [
    "Fracture",
    "https://media.itemlevel.net/wp-content/uploads/2026/08/21103804/chrome_lz5cZTa0D9.jpg",
    "https://itemlevel.net/black-ops-7-zombies-fracture-of-nyxara-quest-item-location-rex-infernus/"
   ],
   [
    "Central eye",
    "https://media.itemlevel.net/wp-content/uploads/2026/08/22100230/Central-Eye-in-Nyxaras-Temple-Black-Ops-7-Zombies-Rex-Infernus-1920x1055.jpeg",
    "https://itemlevel.net/black-ops-7-zombies-shoot-eye-with-purple-fire-rotate-mirrors-rex-infernus/"
   ],
   [
    "Crystals",
    "https://keengamer.com/wp-content/uploads/2026/08/Using-Grapple-on-Crystals.jpg",
    "https://keengamer.com/articles/guides/black-ops-7-rex-infernus-complete-easter-egg-guide/"
   ]
  ],
  "step:r6": [
   [
    "Body locations",
    "https://gameshorizon.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-21-at-4.55.30-PM-2-1024x576.jpeg",
    "https://gameshorizon.com/guides/bo7-zombies-rex-infernus-how-to-get-wardens-blight-wonder-weapon/"
   ],
   [
    "Sacred Seed",
    "https://gameshorizon.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-21-at-3.07.28-PM-1-1024x576.jpeg",
    "https://gameshorizon.com/guides/bo7-zombies-rex-infernus-how-to-get-wardens-blight-wonder-weapon/"
   ]
  ],
  "step:r8": [
   [
    "First symbol",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-9b1314-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ],
   [
    "Symbols",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-476156-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ],
   [
    "House symbols",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/08/17/Symbols-in-Her-House-COD.jpg",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/rex-infernus-easter-egg-walkthrough/"
   ]
  ],
  "step:r9": [
   [
    "Inside Her House",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-acd755-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ],
   [
    "Bathroom shot",
    "https://www.dexerto.com/cdn-image/wp-content/uploads/2026/08/17/SHooting-bathroom-cabinet-COD.jpg",
    "https://www.dexerto.com/wikis/black-ops-7-guides-walkthrough-tips/rex-infernus-easter-egg-walkthrough/"
   ],
   [
    "Eye of the Forge",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-7014cb-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ]
  ],
  "step:r12": [
   [
    "Hammer",
    "https://keengamer.com/wp-content/uploads/2026/08/Blacksmiths-Hammer.jpg",
    "https://keengamer.com/articles/guides/black-ops-7-rex-infernus-complete-easter-egg-guide/"
   ],
   [
    "Shield room",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide-9c4adb.png",
    "https://allthings.how/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide/"
   ],
   [
    "Woven Sash",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-a2c1cb-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ]
  ],
  "step:r14": [
   [
    "Titan Trap",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide-17ff94-1024x593.png",
    "https://allthings.how/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide/"
   ],
   [
    "Slab",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide-a1c18c.png",
    "https://allthings.how/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide/"
   ],
   [
    "Forehead",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide-80862a-1024x591.png",
    "https://allthings.how/black-ops-7-dravakar-temple-cleansing-and-laser-puzzle-guide/"
   ]
  ],
  "step:r15": [
   [
    "Brazier",
    "https://static.allthings.how/wp-content/uploads/2026/08/bo7-caltheris-temple-cleansing-laser-puzzle-guide-8e7027-1024x661.png",
    "https://allthings.how/bo7-caltheris-temple-cleansing-laser-puzzle-guide/"
   ],
   [
    "Slab",
    "https://static.allthings.how/wp-content/uploads/2026/08/bo7-caltheris-temple-cleansing-laser-puzzle-guide-3f220f.png",
    "https://allthings.how/bo7-caltheris-temple-cleansing-laser-puzzle-guide/"
   ],
   [
    "Forehead",
    "https://static.allthings.how/wp-content/uploads/2026/08/bo7-caltheris-temple-cleansing-laser-puzzle-guide-a77400.png",
    "https://allthings.how/bo7-caltheris-temple-cleansing-laser-puzzle-guide/"
   ]
  ],
  "step:r16": [
   [
    "Brazier",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide-d5f693-1024x543.png",
    "https://allthings.how/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide/"
   ],
   [
    "Disc",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide-131d2c-1024x652.png",
    "https://allthings.how/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide/"
   ],
   [
    "Forehead",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide-76d76f.png",
    "https://allthings.how/black-ops-7-veytharion-temple-cleansing-laser-puzzle-guide/"
   ]
  ],
  "side:Free power-up statues": [
   [
    "Power-up map",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-every-free-power-up-location-in-rex-infernus-a40e68.png",
    "https://allthings.how/black-ops-7-zombies-every-free-power-up-location-in-rex-infernus/"
   ],
   [
    "Fire Sale / perk",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-every-free-power-up-location-in-rex-infernus-2ca0b1.png",
    "https://allthings.how/black-ops-7-zombies-every-free-power-up-location-in-rex-infernus/"
   ]
  ],
  "side:Veytharion vault": [
   [
    "Block puzzle",
    "https://keengamer.com/wp-content/uploads/2026/08/Veytharion-Stone-Block-Puzzle.jpg",
    "https://keengamer.com/articles/guides/black-ops-7-rex-infernus-complete-easter-egg-guide/"
   ],
   [
    "Solved puzzle",
    "https://static.allthings.how/wp-content/uploads/2026/08/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough-0e5aa1-1024x576.png",
    "https://allthings.how/black-ops-7-zombies-rex-infernus-easter-egg-walkthrough/"
   ]
  ],
  "side:Mister Peeks Dance Party": [
   [
    "Dig site",
    "https://static.allthings.how/wp-content/uploads/2026/08/mr-peeks-dance-off-easter-egg-guide-no-timewasting-rex-infer-7831211591.webp",
    "https://allthings.how/rex-infernus-how-to-complete-the-mister-peeks-dance-off-easter-egg/"
   ],
   [
    "Tape player",
    "https://static.allthings.how/wp-content/uploads/2026/08/mr-peeks-dance-off-easter-egg-guide-no-timewasting-rex-infer-2318377103.webp",
    "https://allthings.how/rex-infernus-how-to-complete-the-mister-peeks-dance-off-easter-egg/"
   ]
  ],
  "side:Mister Peeks Parkour": [
   [
    "Aranea part",
    "https://static.allthings.how/wp-content/uploads/2026/08/straight-forward-guide-to-get-the-astronaut-mask-on-rex-infe-1853401762.webp",
    "https://allthings.how/rex-infernus-how-to-get-the-astronaut-mask-grapple-race/"
   ],
   [
    "Nexus part",
    "https://static.allthings.how/wp-content/uploads/2026/08/straight-forward-guide-to-get-the-astronaut-mask-on-rex-infe-586889355.webp",
    "https://allthings.how/rex-infernus-how-to-get-the-astronaut-mask-grapple-race/"
   ],
   [
    "Mister Peeks",
    "https://static.allthings.how/wp-content/uploads/2026/08/all-rex-infernus-masks-guide-black-ops-7-zombies-2034183876.webp",
    "https://allthings.how/black-ops-7-zombies-how-to-get-all-four-rex-infernus-masks/"
   ]
  ],
  "side:Warden Hat": [
   [
    "Web Mother",
    "https://static.allthings.how/wp-content/uploads/2026/08/all-rex-infernus-masks-guide-black-ops-7-zombies-6749220304.webp",
    "https://allthings.how/black-ops-7-zombies-how-to-get-all-four-rex-infernus-masks/"
   ]
  ],
  "side:Her House basement": [
   [
    "Painting hatch",
    "https://static.allthings.how/wp-content/uploads/2026/08/all-rex-infernus-masks-guide-black-ops-7-zombies-8993235750.webp",
    "https://allthings.how/black-ops-7-zombies-how-to-get-all-four-rex-infernus-masks/"
   ]
  ],
  "side:Forest toy box": [
   [
    "Forest entry",
    "https://static.allthings.how/wp-content/uploads/2026/08/all-rex-infernus-masks-guide-black-ops-7-zombies-1317050746.webp",
    "https://allthings.how/black-ops-7-zombies-how-to-get-all-four-rex-infernus-masks/"
   ]
  ],
  "side:Corrupted FAL / Corrupted Olympia": [
   [
    "Wall-buy flame",
    "https://static.allthings.how/wp-content/uploads/2026/08/rex-infernus-how-to-get-the-corrupted-olympia-bo7-zombies-be58c6-1024x612.png",
    "https://allthings.how/rex-infernus-how-to-get-the-corrupted-olympia-bo7-zombies/"
   ],
   [
    "Olympia",
    "https://static.allthings.how/wp-content/uploads/2026/08/rex-infernus-how-to-get-the-corrupted-olympia-bo7-zombies-557d00-1024x647.png",
    "https://allthings.how/rex-infernus-how-to-get-the-corrupted-olympia-bo7-zombies/"
   ],
   [
    "TR2 / Olympia",
    "https://skycoach.gg/storage/uploads/products/description/product_6a86cf35757799.88506269.png",
    "https://skycoach.gg/blog/call-of-duty/articles/rex-infernus-easter-egg-guide"
   ]
  ],
  "side:Song: “All We Are”": [
   [
    "Headset: ledge above the Mystery Box",
    "https://www.codzombiesguides.com/content/rex-infernus/rex-infernus-all-we-are-first-headphones.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/rex-infernus/all-we-are/"
   ],
   [
    "Headset: on a skeleton by the Void Claw pedestal",
    "https://www.codzombiesguides.com/content/rex-infernus/rex-infernus-all-we-are-second-headphones.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/rex-infernus/all-we-are/"
   ],
   [
    "Headset: high on the wall in Nyxara's chamber",
    "https://www.codzombiesguides.com/content/rex-infernus/rex-infernus-all-we-are-final-headphones.webp",
    "https://www.codzombiesguides.com/side-quests/black-ops-7/rex-infernus/all-we-are/"
   ]
  ],
  "toy:3": [
   [
    "Widow's Wine challenge toy",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-IFEAzrtfOj4-84-second-horse-widow-s-wine.webp",
    "https://allthings.how/rex-infernus-super-easter-egg-how-to-get-the-warden-toy/"
   ],
   [
    "PhD challenge toy dropped",
    "https://static.allthings.how/wp-content/uploads/2026/09/moment-IFEAzrtfOj4-90-third-horse-phd-1.webp",
    "https://allthings.how/rex-infernus-super-easter-egg-how-to-get-the-warden-toy/"
   ]
  ]
 }
};
const strip = t => String(t).replace(/<[^>]*>/g, "");
MAPS.forEach(m => {
  const x = EXTRA[m.id]; if (!x) return;
  const add = (obj, prop, key) => { if (x[key]) obj[prop] = (obj[prop] || []).concat(x[key]); };
  m.steps.forEach(s => add(s, "ph", "step:" + s.id));
  m.side.forEach(s => add(s, "ph", "side:" + strip(s.t)));
  m.relics.forEach(r => add(r, "ph", "relic:" + r.n));
  m.toy.steps.forEach((s, i) => { if (x["toy:" + i]) s[2] = (s[2] || []).concat(x["toy:" + i]); });
});
})();
