# Firetruck Rescue

An original, kid-safe tap-to-escape puzzle game by **P-Prece Studio (พีพีช Studio)**.

A fire breaks out in Maple Town and the emergency vehicles are stuck in traffic. Tap each vehicle to drive it the way it faces and clear the road. Every vehicle that gets out heads to the fire: engines, tankers and ladder trucks put out the flames, and ambulances and ladder trucks rescue people. Tap a blocked vehicle and it bumps: you lose a heart and the fire grows.

- Skippable story intro, 5 chapters, 30 levels (bosses on 6/12/18/24/30), every level verified solvable
- Cones, barriers, parked cars, hydrants, turn arrows, a tow truck and switch gates
- Procedural canvas art and WebAudio sound (siren, horn, fire crackle, water, music)
- 21 languages, offline PWA

Play: https://pawineenueangnin-oss.github.io/firetruck-rescue/

## v2
Cinematic story (intro, 5 chapter cinematics, boss cutscenes, ending + credits), realistic pre-rendered 3/4-view vehicles (sprites/), painted chapter scenes (img/), interactive tutorial L1–3, tip cards, "?" how-to-play, pause menu, graphics quality (auto/high/low). Debug: `?debug=ending|intro|c1..c5|b1..b4`, `?notut`.

## v3 — Progression, garage & serialized story
- Cinematic level-complete screen: the extinguished building with steam and dawn rays, a camera push-in, 3 animated gold stars, a medal, fireworks, a rescued-family photo, the fleet lined up with flashing lights, XP bar, coin count-up, NEW! unlock badges and tap to speed up. Matching game-over screen.
- Player level and XP, ranks Rookie → Firefighter → Engineer → Captain → Chief, and coins.
- Garage: 3 upgrade tiers for each vehicle (visual and perk), paint skins and siren sounds. Rewarded ads give ×2 rewards, a hint, undo or +1 heart.
- True overhead board with hi-res top-down sprites rotated in real time, and richer streets: lanes, crosswalks, manholes, puddles and lamps.
- A story beat after every level (30 beats plus an epilogue, 21 languages) about a faulty-wiring mystery, with a Story Log on the map.
- Saves migrate automatically from v2. Service worker cache is firetruck-v4.
