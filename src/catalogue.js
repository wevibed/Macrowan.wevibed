// MACROWAN HARDWARE — AUTHORITATIVE CATALOGUE
// Source of truth: client-supplied "Product list & prices" (33 products).
// Names, categories and prices are taken verbatim from that list.
//
// image:        local file under /public/products/<category>/ — or null.
// imageStatus:  "verified"  = a real Macrowan/client photo of this exact product.
//               "required"  = IMAGE REQUIRED — EXACT PRODUCT IMAGE NOT VERIFIED.
//                             The site shows a neutral "Photo coming soon" placeholder.
// Never put a similar-looking image of a different product in here.

export const CATEGORIES = ["Gas & Cooking", "Building Materials", "Solar", "Electrical", "Power Tools", "PA Systems", "Audio"];

const R = null; // image required

export const products = [
  // GAS & COOKING
  { id: 1,  name: "20 kg Gas Tanks", category: "Gas & Cooking", price: 19.5, image: R, aliases: "lpg cylinder 20kg gas bottle" },
  { id: 2,  name: "Metal 2 Plate Stove", category: "Gas & Cooking", price: 19.8, image: R, aliases: "two plate stove 2 burner" },
  { id: 3,  name: "4 Plate Gas Stove with Oven Bake n Grill Automatic", category: "Gas & Cooking", price: 125, image: "/products/gas/4-plate-gas-stove-oven-100-percent-gas.webp", aliases: "four plate cooker bake and grill", imageNote: "Crop of supplied stove graphic (100% gas, 4 burners + gas oven)" },
  { id: 4,  name: "4 Plate Gas Stove with Oven Combo (Gas and Electric)", category: "Gas & Cooking", price: 160, image: "/products/gas/4-plate-gas-electric-combo-stove-oven.webp", aliases: "four plate cooker gas electric combo", imageNote: "Crop of supplied stove graphic (gas + electric)" },
  { id: 5,  name: "2 Plate Gas Stove with Oven", category: "Gas & Cooking", price: 55, image: R, aliases: "two plate cooker 2 burner oven" },
  { id: 6,  name: "Gas Regulators", category: "Gas & Cooking", price: 4.5, image: "/products/gas/lpg-gas-regulator.webp", aliases: "regulator lpg" },
  { id: 7,  name: "Gas Plates", category: "Gas & Cooking", price: 3, image: R, aliases: "burner" },
  { id: 8,  name: "Gas Pipes", category: "Gas & Cooking", price: 1, unit: "per metre", qtyUnit: "m", image: R, aliases: "gas hose lpg pipe meter" },

  // BUILDING MATERIALS
  { id: 9,  name: "Skiming Plaster (Poly Set Plaster)", category: "Building Materials", price: 13, image: R, aliases: "skimming plaster polyset" },
  { id: 10, name: "Paint Contractors (Polyda)", category: "Building Materials", price: 18, image: R, brand: "Polyda", aliases: "polyda paint" },
  { id: 11, name: "Porcelain Tile Adhesive (Elephant)", category: "Building Materials", price: 2.9, image: R, brand: "Elephant", aliases: "tile glue" },

  // SOLAR
  { id: 12, name: "345 Watts Solar Panel", category: "Solar", price: 50, image: "/products/solar/345w-solar-panel.webp", aliases: "345w panel" },
  { id: 13, name: "30 Amps Solar Controllers", category: "Solar", price: 10, image: "/products/solar/30a-solar-controller.webp", aliases: "30a charge controller" },
  { id: 14, name: "60 Amps Solar Controller MPPT", category: "Solar", price: 55, image: "/products/solar/60a-mppt-controller.webp", aliases: "60a mppt charge controller" },
  { id: 15, name: "Solar Flood Lights", category: "Solar", priceMin: 8, priceMax: 15, unit: "depending on wattage (10W–60W)", image: R, aliases: "floodlight" },

  // ELECTRICAL
  { id: 16, name: "AC 30 Watts", category: "Electrical", price: 5.9, image: R, aliases: "ac 30w" },
  { id: 17, name: "AC 20 Watts", category: "Electrical", price: 5, image: R, aliases: "ac 20w" },
  { id: 18, name: "Adapters", category: "Electrical", price: 4, image: R, aliases: "adaptor" },

  // POWER TOOLS
  { id: 19, name: "Codeles Spray Gun AC", category: "Power Tools", price: 35, image: R, brand: "Codeles", aliases: "spray gun" },
  { id: 20, name: "Codeles Baby Grinder Jadever", category: "Power Tools", price: 84.5, image: R, brand: "Jadever", aliases: "codeles grinder" },
  { id: 21, name: "Angle Grinder Jadever", category: "Power Tools", price: 75, image: "/products/tools/jadever-710w-angle-grinder.webp", brand: "Jadever", aliases: "" },
  { id: 22, name: "Tile Cutter Jadever 800mm", category: "Power Tools", price: 70, image: R, brand: "Jadever", aliases: "" },
  { id: 23, name: "Electric Wood Planner", category: "Power Tools", price: 45, image: R, aliases: "planer" },
  { id: 24, name: "Codeles Grass Trimmer Jadever", category: "Power Tools", price: 70, image: "/products/tools/jadever-grass-trimmer.webp", brand: "Jadever", aliases: "codeles trimmer" },
  { id: 25, name: 'Chain Saw Jadever 18"', category: "Power Tools", price: 95, image: "/products/tools/jadever-18-inch-chainsaw.webp", brand: "Jadever", aliases: "chainsaw 18 inch" },

  // PA SYSTEMS
  { id: 26, name: "JBL Double Base Bin", category: "PA Systems", price: 600, image: R, brand: "JBL", aliases: "bass bin" },
  { id: 27, name: '15" Single JBL Speaker', category: "PA Systems", price: 220, unit: "each", image: R, brand: "JBL", aliases: "15 inch" },
  { id: 28, name: '15" Double JBL Speaker', category: "PA Systems", price: 350, image: R, brand: "JBL", aliases: "15 inch" },
  { id: 29, name: "CA 80 Amplifier Plus Cross Over", category: "PA Systems", price: 400, image: "/products/pa/ca80-amplifier-crossover.webp", aliases: "ca80 amp crossover" },
  { id: 30, name: "Non Powered Mixer Hybrid 6 Channel", category: "PA Systems", price: 200, image: "/products/pa/hybrid-6-channel-mixer.webp", brand: "Hybrid", aliases: "" },
  { id: 31, name: "Powered Mixer Vision 6 Channel", category: "PA Systems", price: 120, image: "/products/pa/vision-powered-6-channel-mixer.webp", brand: "Vision", aliases: "" },

  // AUDIO
  { id: 32, name: "Subwoofers", category: "Audio", priceMin: 40, priceMax: 150, unit: "depending on size", image: "/products/audio/vision-subwoofer.webp", aliases: "sub woofer", imageNote: "Real photo of a Vision subwoofer in the shop (one size/model of many)" },
  { id: 33, name: "Sound Bars", category: "Audio", priceMin: 60, priceMax: 85, unit: "depending on size", image: "/products/audio/vision-vs-665-sound-bar-system.webp", aliases: "soundbar", imageNote: "Vision VS-665 sound bar system box (one model of several sizes)" },
];

// ---------- helpers shared by the UI and the audit script ----------
export const money = (n) => `$${Number(n).toFixed(2).replace(/\.00$/, "")}`;
export const isRange = (p) => p.priceMin != null && p.priceMax != null;
export const priceLabel = (p) => isRange(p) ? `${money(p.priceMin)}–${money(p.priceMax)}` : money(p.price);
export const fullPriceLabel = (p) => isRange(p) ? priceLabel(p) : (p.unit === "per metre" ? `${money(p.price)} per metre` : priceLabel(p));
// Only fixed-price lines can be totalled; ranges are never turned into a fake fixed price.
export const lineTotal = (p, qty) => (isRange(p) ? null : p.price * qty);

const norm = (s) => s.toLowerCase().replace(/[“”"']/g, " ").replace(/(\d)([a-z])/g, "$1 $2").replace(/([a-z])(\d)/g, "$1 $2").replace(/[^a-z0-9.]+/g, " ").trim();
const words = (s) => norm(s).split(" ").filter(Boolean);

export function searchText(p) {
  return [p.name, p.category, p.brand || "", p.aliases || ""].join(" ");
}

// Every search word must match the START of a word in name/category/brand/alias (so "ac" does not hit "contractors").
export function matches(p, query) {
  const q = words(query);
  if (!q.length) return true;
  const hay = words(searchText(p));
  return q.every((t) => {
    const stem = t.length > 3 && t.endsWith("s") ? t.slice(0, -1) : t;
    return hay.some((w) => w.startsWith(t) || w.startsWith(stem));
  });
}
