import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const phone = "263777404044";
const mapUrl = "https://maps.app.goo.gl/acNSmGoAJXtvzZmXA";

const img = {
  hero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
  building: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  appliances: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
  stove: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  tools: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
  solar: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85",
  gas: "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=900&q=85",
  gasCylinder: "https://bina-sh.en.made-in-china.com/product/FOuACkbvkcYr/China-Large-Capacity-Gas-Tank-20kg-LPG-Cylinder-for-Industry-Use.html",
  gasRegulator: "https://cgas-chen.en.made-in-china.com/product/avUEILxAWrVJ/China-LPG-Compact-Low-Pressure-Gas-Regulator-C10G59U37-.html",
  gasHose: "https://tiimg.tistatic.com/fp/1/007/515/-long-lasting-and-flexible-orange-colour-rubber-lpg-gas-pipe-for-gas-cylinder-263.jpg",
  floodLight: "https://www.silkled.com/uploads/202309/60w-solar-flood-light.jpg",
  tileCutter: "https://esemall.com/cdn/shop/files/Tile_Cutter_800mm_JADEVER_JDTR1508.jpg?v=1786967249&width=1780",
  audio: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85",
  paint: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
  stovePhoto: "/products/four-plate-stove-configurations.jpg",
  solarPanelPhoto: "/products/345w-solar-panel.jpg",
  solarController30Photo: "/products/30a-solar-charge-controller.jpg",
  solarController60Photo: "/products/60a-mppt-solar-charge-controller.jpg",
  floodlightsPhoto: "/products/solar-floodlights.jpg",
  ca80Photo: "/products/ca80-amplifier-crossover.jpg",
  hybridMixerPhoto: "/products/hybrid-6-channel-mixer.jpg",
  visionMixerPhoto: "/products/vision-powered-6-channel-mixer.jpg",
  subwooferPhoto: "/products/vision-vs-665-subwoofer-soundbar-system.png",
  soundbarPhoto: "/products/vision-vs-665-subwoofer-soundbar-system.png",
  visionMultimediaPhoto: "/products/vision-vs-8226sp-multimedia-speaker-system.png",
  chainsawPhoto: "/products/jadever-18-inch-46cc-chainsaw.png",
  grassTrimmerPhoto: "/products/jadever-cordless-grass-trimmer.png",
  angleGrinderPhoto: "/products/jadever-710w-angle-grinder.png",
  sprayGunPhoto: "/products/cordless-paint-spray-gun-reference.png",
  ukAdapterPhoto: "/products/uk-plug-adapter.png",
  travelAdapterPhoto: "/products/universal-travel-adapter.png",
  extensionStripPhoto: "/products/extension-power-strip.png",
  acAdapterPhoto: "/products/ac-dc-power-adapter.png",
  gasRegulatorPhoto: "/products/lpg-gas-regulator.png",
  gasRegulatorHosePhoto: "/products/lpg-regulator-with-hose.png"
};

const products = [
  { id: 1, name: "20 kg Gas Tank", category: "Gas & Cooking", price: 19.5, image: img.gas, keywords: "gas tank gas cylinder lpg 20kg 20 kg" },
  { id: 2, name: "Metal 2-Plate Stove", category: "Gas & Cooking", price: 19.8, image: img.stove, keywords: "metal 2 plate stove two burner cooker gas" },
  { id: 3, name: "4-Plate Gas Stove with Oven Bake n Grill Automatic", category: "Gas & Cooking", price: 125, image: img.stovePhoto, keywords: "4 plate gas stove oven bake grill automatic cooker" },
  { id: 4, name: "4-Plate Gas/Electric Combo Stove with Oven", category: "Gas & Cooking", price: 160, image: img.stovePhoto, keywords: "4 plate gas electric combo stove oven cooker" },
  { id: 5, name: "2-Plate Gas Stove with Oven", category: "Gas & Cooking", price: 55, image: img.stove, keywords: "2 plate gas stove oven cooker two burner" },
  { id: 6, name: "Gas Regulator", category: "Gas & Cooking", price: 4.5, image: img.gasRegulatorPhoto, keywords: "gas regulator regulator lpg cylinder" },
  { id: 7, name: "Gas Plate", category: "Gas & Cooking", price: 3, image: img.stove, keywords: "gas plate burner cooker" },
  { id: 8, name: "Gas Pipe", category: "Gas & Cooking", price: 1, unit: "per metre", image: img.gasHose, keywords: "gas pipe hose lpg pipe metre meter" },
  { id: 9, name: "Skimming Plaster (Polyset Plaster)", category: "Building Materials", price: 13, image: img.building, keywords: "skimming plaster polyset plaster wall finish" },
  { id: 10, name: "Paint Contractors (Polyda)", category: "Building Materials", price: 18, image: img.paint, keywords: "paint contractors polyda paint" },
  { id: 11, name: "Porcelain Tile Adhesive (Elephant)", category: "Building Materials", price: 2.9, image: img.building, keywords: "porcelain tile adhesive elephant tiles glue" },
  { id: 12, name: "345W Solar Panel", category: "Solar", price: 50, image: img.solarPanelPhoto, keywords: "solar panel 345w 345 watt photovoltaic" },
  { id: 13, name: "30A Solar Controller", category: "Solar", price: 10, image: img.solarController30Photo, keywords: "solar controller 30a 30 amps charge controller" },
  { id: 14, name: "60A MPPT Solar Controller", category: "Solar", price: 55, image: img.solarController60Photo, keywords: "solar controller 60a 60 amps mppt charge controller" },
  { id: 15, name: "Solar Flood Light", category: "Solar", price: 8, priceLabel: "$8–$15", unit: "10W–60W", image: img.floodlightsPhoto, keywords: "solar flood light 10w 20w 30w 40w 50w 60w" },
  { id: 16, name: "AC 30W", category: "Electrical", price: 5.9, image: img.electrical, keywords: "ac 30w light electrical" },
  { id: 17, name: "AC 20W", category: "Electrical", price: 5, image: img.electrical, keywords: "ac 20w light electrical" },
  { id: 18, name: "Adapters", category: "Electrical", price: 4, image: img.electrical, keywords: "adapter adapters plug electrical" },
  { id: 19, name: "Cordless Spray Gun AC", category: "Power Tools", price: 35, image: img.sprayGunPhoto, keywords: "cordless spray gun ac paint sprayer" },
  { id: 20, name: "Cordless Baby Grinder Jadever", category: "Power Tools", price: 84.5, image: img.tools, keywords: "cordless baby grinder jadever mini grinder" },
  { id: 21, name: "Jadever Angle Grinder 710W", category: "Power Tools", price: 75, image: img.angleGrinderPhoto, keywords: "angle grinder jadever 710w 100mm grinder" },
  { id: 22, name: "Tile Cutter Jadever 800mm", category: "Power Tools", price: 70, image: img.tileCutter, keywords: "tile cutter jadever 800mm 800 mm tiles" },
  { id: 23, name: "Electric Wood Planer", category: "Power Tools", price: 45, image: img.tools, keywords: "electric wood planer woodworking planer" },
  { id: 24, name: "Jadever Grass Trimmer", category: "Power Tools", price: 70, image: img.grassTrimmerPhoto, keywords: "grass trimmer jadever weed eater garden trimmer" },
  { id: 25, name: "Jadever 18-inch Chainsaw 46cc", category: "Power Tools", price: 95, image: img.chainsawPhoto, keywords: "chainsaw jadever 18 inch 46cc 1.8kw saw" },
  { id: 26, name: "JBL Double Bass Bin", category: "PA Systems", price: 600, image: img.audio, keywords: "jbl double bass bin speaker pa system" },
  { id: 27, name: "15\" Single JBL Speaker", category: "PA Systems", price: 220, unit: "each", image: img.audio, keywords: "15 inch single jbl speaker pa" },
  { id: 28, name: "15\" Double JBL Speaker", category: "PA Systems", price: 350, image: img.audio, keywords: "15 inch double jbl speaker pa" },
  { id: 29, name: "CA 80 Amplifier + Crossover", category: "PA Systems", price: 400, image: img.ca80Photo, keywords: "ca 80 amplifier crossover amp pa" },
  { id: 30, name: "Non-Powered Hybrid 6-Channel Mixer", category: "PA Systems", price: 200, image: img.hybridMixerPhoto, keywords: "non powered hybrid 6 channel mixer mixer" },
  { id: 31, name: "Powered Vision 6-Channel Mixer", category: "PA Systems", price: 120, image: img.visionMixerPhoto, keywords: "powered vision 6 channel mixer mixer" },
  { id: 32, name: "Subwoofer", category: "Audio", price: 40, priceLabel: "$40–$150", unit: "depending on size", image: img.subwooferPhoto, keywords: "subwoofer bass speaker woofer sound" },
  { id: 33, name: "Sound Bar", category: "Audio", price: 60, priceLabel: "$60–$85", unit: "depending on size", image: img.soundbarPhoto, keywords: "soundbar sound bar speaker audio" },
  { id: 34, name: "UK 3-Pin Plug Adapter", category: "Electrical", price: null, priceLabel: "Enquire for price", image: img.ukAdapterPhoto, keywords: "uk 3 pin plug adapter socket electrical travel" },
  { id: 35, name: "Universal Travel Adapter", category: "Electrical", price: null, priceLabel: "Enquire for price", image: img.travelAdapterPhoto, keywords: "universal travel adapter international plug socket" },
  { id: 36, name: "Extension Power Strip", category: "Electrical", price: null, priceLabel: "Enquire for price", image: img.extensionStripPhoto, keywords: "extension power strip multiplug multi plug socket" },
  { id: 37, name: "AC/DC Power Adapter", category: "Electrical", price: null, priceLabel: "Enquire for price", image: img.acAdapterPhoto, keywords: "ac dc power adapter charger power supply" },
  { id: 38, name: "LPG Regulator with Hose", category: "Gas & Cooking", price: null, priceLabel: "Enquire for price", image: img.gasRegulatorHosePhoto, keywords: "lpg gas regulator hose cylinder gas pipe kit" }
];

const categories = ["All", "Gas & Cooking", "Building Materials", "Solar", "Electrical", "Power Tools", "PA Systems", "Audio"];

const money = (n) => `$${Number(n).toFixed(2).replace(/\.00$/, "")}`;

function whatsappUrl(items) {
  const lines = items.map(({product, qty}, i) => `${i + 1}. ${product.name} — ${qty} × ${product.price == null ? "price to confirm" : money(product.price)}${product.price == null ? "" : ` = ${money(product.price * qty)}`}${product.unit ? ` (${product.unit})` : ""}`);
  const pricedTotal = items.reduce((sum, item) => sum + (item.product.price == null ? 0 : item.product.price * item.qty), 0);
  const hasUnpriced = items.some(item => item.product.price == null);
  const message = `Hello Macrowan Hardware, I would like to enquire about the following products:\n\n${lines.join("\n")}\n\nEstimated total for priced items: ${money(pricedTotal)}${hasUnpriced ? " (some items need price confirmation)" : ""}\n\nPlease confirm availability and final prices. Thank you.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function FloatingWhatsApp(){
  return <a
    className="wa"
    href={`https://wa.me/${phone}?text=${encodeURIComponent("Hello Macrowan Hardware, I would like to enquire about your products.")}`}
    aria-label="Chat with Macrowan Hardware on WhatsApp"
    title="Chat with Macrowan Hardware on WhatsApp"
    target="_blank"
    rel="noreferrer"
  >
    <svg className="waIcon" viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3.2c-7.08 0-12.84 5.75-12.84 12.83 0 2.26.59 4.46 1.72 6.4L3.1 28.8l6.55-1.72a12.8 12.8 0 0 0 6.39 1.72h.01c7.08 0 12.84-5.76 12.84-12.84 0-3.43-1.34-6.65-3.77-9.08A12.76 12.76 0 0 0 16.04 3.2zm0 23.42h-.01c-1.99 0-3.94-.54-5.63-1.56l-.4-.24-3.89 1.02 1.04-3.79-.26-.41a10.58 10.58 0 0 1-1.63-5.61c0-5.85 4.76-10.61 10.62-10.61 2.83 0 5.49 1.1 7.49 3.11a10.55 10.55 0 0 1 3.11 7.5c0 5.85-4.76 10.61-10.62 10.61zm5.83-7.94c-.32-.16-1.89-.93-2.18-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.57-1.88-1.75-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37z"/>
    </svg>
  </a>;
}

function Header({ cartCount, onCart }){
  return <header>
    <a className="brand" href="#"><span className="logo">⌂</span><span>MACROWAN<small>HARDWARE</small></span></a>
    <nav><a href="#categories">Categories</a><a href="#products">Products</a><a href="#contact">Contact</a></nav>
    <div className="icons"><a className="searchLink" href="#products" aria-label="Search products">⌕</a><button className="cartButton" onClick={onCart} aria-label="Open cart">🛒 <span>{cartCount}</span></button><button className="menuButton">☰</button></div>
  </header>;
}

function Category({image,title,onClick}){
  return <button className="category" onClick={onClick}><img src={image} alt={title}/><span>{title}</span><b>→</b></button>;
}

function ProductCard({product,onAdd}){
  return <article className="product">
    <img src={product.image} alt={product.name}/>
    <div className="productBody">
      <p className="productCategory">{product.category}</p>
      <h3>{product.name}</h3>
      {product.unit && <span className="unit">{product.unit}</span>}
      <div className="productBottom"><strong>{product.priceLabel || money(product.price)}</strong><button onClick={() => onAdd(product)}>Add to Cart</button></div>
    </div>
  </article>;
}

function Cart({items,onClose,onChange}){
  const total = items.reduce((sum, item) => sum + (item.product.price == null ? 0 : item.product.price * item.qty), 0);
  return <div className="cartOverlay" onClick={onClose}>
    <aside className="cart" onClick={(e) => e.stopPropagation()}>
      <div className="cartHead"><div><p className="eyebrow orange">YOUR CART</p><h2>Review your items.</h2></div><button onClick={onClose}>×</button></div>
      {items.length === 0 ? <div className="emptyCart"><div>🛒</div><h3>Your cart is empty.</h3><p>Add products from the catalogue and they will appear here.</p><button className="btn" onClick={onClose}>CONTINUE SHOPPING →</button></div> : <>
        <div className="cartItems">{items.map(({product,qty}) => <div className="cartItem" key={product.id}><img src={product.image} alt=""/><div className="cartInfo"><h3>{product.name}</h3><small>{product.price == null ? "Price to confirm" : money(product.price)}{product.unit ? ` • ${product.unit}` : ""}</small><div className="qty"><button onClick={() => onChange(product.id, qty - 1)}>−</button><span>{qty}</span><button onClick={() => onChange(product.id, qty + 1)}>+</button><button className="remove" onClick={() => onChange(product.id, 0)}>Remove</button></div></div><strong>{product.price == null ? "Price TBC" : money(product.price * qty)}</strong></div>)}</div>
        <div className="cartSummary"><div><span>{items.some(item => item.product.price == null) ? "Estimated total (priced items only)" : "Estimated total"}</span><strong>{money(total)}</strong></div><p>Prices are subject to availability and final confirmation by Macrowan Hardware.</p><a className="btn whatsappCheckout" href={whatsappUrl(items)}>MESSAGE MACROWAN ON WHATSAPP →</a></div>
      </>}
    </aside>
  </div>;
}

function App(){
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("All");
  const [cart,setCart] = useState([]);
  const [cartOpen,setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => (category === "All" || p.category === category) && (!q || `${p.name} ${p.category} ${p.keywords}`.toLowerCase().includes(q)));
  }, [query, category]);

  const addToCart = (product) => {
    setCart(current => {
      const found = current.find(x => x.product.id === product.id);
      return found ? current.map(x => x.product.id === product.id ? {...x, qty: x.qty + 1} : x) : [...current, {product, qty: 1}];
    });
    setCartOpen(true);
  };
  const changeQty = (id, qty) => setCart(current => qty <= 0 ? current.filter(x => x.product.id !== id) : current.map(x => x.product.id === id ? {...x, qty} : x));
  const cartCount = cart.reduce((sum, x) => sum + x.qty, 0);

  return <div>
    <Header cartCount={cartCount} onCart={() => setCartOpen(true)}/>
    <main>
      <section className="hero"><img src={img.hero} alt="Hardware tools and equipment"/><div className="heroOverlay"><p className="eyebrow">HARDWARE • HOME • PROJECTS</p><h1>Everything for<br/>Your <em>Home</em><br/>and <em>Projects</em></h1><p>Building materials, electrical products, gas equipment, tools, solar products and more.</p><a className="btn" href="#products">SHOP PRODUCTS →</a></div><div className="trust"><span>▱<b>38 Products</b><small>in our catalogue</small></span><span>✓<b>Clear Pricing</b><small>browse before enquiring</small></span><span>⌁<b>WhatsApp Orders</b><small>easy product enquiries</small></span></div></section>

      <section id="categories" className="section"><div className="heading"><div><p className="eyebrow orange">SHOP BY CATEGORY</p><h2>Find what you need.</h2></div><a href="#products">View All →</a></div><div className="catgrid">
        <Category image={img.gas} title="Gas & Cooking" onClick={() => {setCategory("Gas & Cooking"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.building} title="Building Materials" onClick={() => {setCategory("Building Materials"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.solar} title="Solar" onClick={() => {setCategory("Solar"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.electrical} title="Electrical" onClick={() => {setCategory("Electrical"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.tools} title="Power Tools" onClick={() => {setCategory("Power Tools"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.audio} title="PA Systems" onClick={() => {setCategory("PA Systems"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={img.audio} title="Audio" onClick={() => {setCategory("Audio"); document.getElementById("products")?.scrollIntoView()}}/>
      </div></section>

      <section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow orange">MACROWAN CATALOGUE</p><h2>Products & prices.</h2></div><button className="cartTop" onClick={() => setCartOpen(true)}>🛒 Cart ({cartCount})</button></div>
        <div className="shopTools"><label className="searchBox">⌕<input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, tools, solar, gas..." aria-label="Search products"/><button onClick={() => setQuery("")} className={query ? "clearSearch" : "hiddenClear"}>×</button></label><div className="filters">{categories.map(c => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
        <div className="resultsMeta"><span>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>{query && <span>for “{query}”</span>}</div>
        <div className="products">{filtered.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart}/>)}</div>
        {filtered.length === 0 && <div className="noResults"><h3>No products found.</h3><p>Try a different search or category.</p><button onClick={() => {setQuery("");setCategory("All")}}>SHOW ALL PRODUCTS</button></div>}
      </section>

      <section className="feature"><img src={img.stovePhoto} alt="Gas stoves and cooking equipment"/><div><p className="eyebrow">GAS & COOKING</p><h2>Everyday cooking essentials.</h2><p>Browse gas tanks, stoves, regulators, plates and pipes, then add what you need to your cart.</p><a className="btn" href="#products" onClick={() => setCategory("Gas & Cooking")}>EXPLORE GAS PRODUCTS →</a></div></section>
      <section className="project"><img src={img.tools} alt="Power tools"/><div><p className="eyebrow orange">TOOLS & PROJECTS</p><h2>Build, repair, improve.</h2><p>Find power tools and building supplies, see the listed price, and send your selected items to Macrowan on WhatsApp.</p></div></section>

      <section className="services"><div className="heading"><div><p className="eyebrow orange">HOW IT WORKS</p><h2>Browse. Add. Message.</h2></div></div><div className="serviceGrid"><div><b>01</b><h3>Find products</h3><p>Search the catalogue or filter by category.</p></div><div><b>02</b><h3>Add to cart</h3><p>Select quantities and review your estimated total.</p></div><div><b>03</b><h3>Message Macrowan</h3><p>Your product names, quantities and total are prepared in WhatsApp.</p></div></div></section>

      <section id="contact" className="contact"><div><p className="eyebrow orange">VISIT MACROWAN HARDWARE</p><h2>Find the store.</h2><p>Use the map below for the store location, or message the shop before you come.</p><a className="btn" href={`https://wa.me/${phone}?text=${encodeURIComponent("Hello Macrowan Hardware, I would like to visit your store. Please confirm the location.")}`}>MESSAGE ON WHATSAPP →</a><p className="phone">077 740 4044</p></div><a className="mapPlaceholder" href={mapUrl} target="_blank" rel="noreferrer"><div className="pin">●</div><strong>Macrowan Hardware</strong><span>Store location • Open in Google Maps</span><span className="mapButton">VIEW ON MAP →</span></a></section>
    </main>
    <footer><div className="brand"><span className="logo">⌂</span><span>MACROWAN<small>HARDWARE</small></span></div><p>Gas • Building • Solar • Electrical • Power Tools • PA Systems</p><p>© 2026 Macrowan Hardware</p></footer>
    <FloatingWhatsApp/>
    {cartOpen && <Cart items={cart} onClose={() => setCartOpen(false)} onChange={changeQty}/>} 
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
