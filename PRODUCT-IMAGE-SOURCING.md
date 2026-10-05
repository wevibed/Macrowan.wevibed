# Macrowan product images — status

The catalogue is exactly the client's 33 products (see `docs/client-product-list.txt`, data in `src/catalogue.js`).
No AI-generated images, no stock photos and no look-alike products are used on product cards.
Run `npm run audit` to re-check names, prices, categories, image files, search and cart maths (writes `AUDIT.md`).

## Verified photos in use (14) — `public/products/<category>/`
| Product | File |
|---|---|
| 4 Plate Gas Stove with Oven Bake n Grill Automatic | gas/4-plate-gas-stove-oven-100-percent-gas.webp (left half of supplied stove graphic) |
| 4 Plate Gas Stove with Oven Combo (Gas and Electric) | gas/4-plate-gas-electric-combo-stove-oven.webp (right half of same graphic) |
| Gas Regulators | gas/lpg-gas-regulator.webp |
| 345 Watts Solar Panel | solar/345w-solar-panel.webp |
| 30 Amps Solar Controllers | solar/30a-solar-controller.webp |
| 60 Amps Solar Controller MPPT | solar/60a-mppt-controller.webp |
| Angle Grinder Jadever | tools/jadever-710w-angle-grinder.webp |
| Codeles Grass Trimmer Jadever | tools/jadever-grass-trimmer.webp |
| Chain Saw Jadever 18" | tools/jadever-18-inch-chainsaw.webp |
| CA 80 Amplifier Plus Cross Over | pa/ca80-amplifier-crossover.webp |
| Non Powered Mixer Hybrid 6 Channel | pa/hybrid-6-channel-mixer.webp |
| Powered Mixer Vision 6 Channel | pa/vision-powered-6-channel-mixer.webp |
| Subwoofers | audio/vision-subwoofer.webp (crop of shop photo; one model of many) |
| Sound Bars | audio/vision-vs-665-sound-bar-system.webp (VS-665 sound bar system box; one model of several) |

## IMAGE REQUIRED — exact product image not verified (19) — shown as "Photo coming soon"
20 kg Gas Tanks · Metal 2 Plate Stove · 2 Plate Gas Stove with Oven · Gas Plates · Gas Pipes · Skiming Plaster · Paint Contractors (Polyda) · Porcelain Tile Adhesive (Elephant) · Solar Flood Lights · AC 30 Watts · AC 20 Watts · Adapters · Codeles Spray Gun AC · Codeles Baby Grinder Jadever · Tile Cutter Jadever 800mm · Electric Wood Planner · JBL Double Base Bin · 15" Single JBL Speaker · 15" Double JBL Speaker

To add one: drop a real photo of that exact item into `public/products/<category>/`, then set `image` for that product in `src/catalogue.js`.

## Corrections made to the previous build
- `solar-floodlights.jpg` was NOT flood lights (it is a shelf with a Vision subwoofer, sound bar, DVD players and bulbs). Removed from Solar Flood Lights; a crop of the subwoofer is now used for Subwoofers.
- Gas Tank used a generic gas photo → placeholder (the only cylinder photo is a 5 kg Hardy, not 20 kg).
- Both 2-plate stoves, Gas Plates, plaster, paint, adhesive, AC lights, Adapters used Unsplash stock → placeholders.
- JBL listings used a generic speaker stock photo; the supplied Vision cabinets are not JBL → placeholders.
- Spray gun reference image (unknown brand, price tag mismatch), Jadever cordless drill (not a grinder) → not used.
- Tile cutter, gas pipe and flood light pointed to remote third-party URLs (not licensed, not bundled) → placeholders.
- Five extra "enquiry" listings (UK adapter, travel adapter, power strip, AC/DC adapter, regulator with hose) removed: 38 → 33 products.
- Product names restored to the client's wording; "Adapters" etc. no longer carry invented search keywords.

Unused supplied photos are kept in `unused-reference-images/` (not deployed): 5 kg gas cylinder, Vision 15" cabinet, Vision dual cabinets, Vision home audio systems, inverters, DVD player, satellite dish, backpack sprayer, adapters, power strip, regulator with hose, cordless drill, spray-gun reference.
