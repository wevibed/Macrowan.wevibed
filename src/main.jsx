import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { products, CATEGORIES, money, isRange, priceLabel, fullPriceLabel, lineTotal, matches } from "./catalogue.js";
import "./styles.css";

const phone = "263777404044";
const mapUrl = "https://maps.app.goo.gl/acNSmGoAJXtvzZmXA";

// Banner / category-tile imagery only. Product cards NEVER use these.
const banner = {
  hero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
  building: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  tools: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
  gas: "/products/gas/4-plate-gas-stove-oven-100-percent-gas.webp",
  solar: "/products/solar/345w-solar-panel.webp",
  pa: "/products/pa/ca80-amplifier-crossover.webp",
  audio: "/products/audio/vision-vs-665-sound-bar-system.webp"
};

const categories = ["All", ...CATEGORIES];

function qtyText(p, qty){ return p.qtyUnit ? `${qty} ${p.qtyUnit}` : `${qty}`; }

function cartTotals(items){
  const fixed = items.filter(({product}) => !isRange(product));
  return {
    total: fixed.reduce((sum, {product, qty}) => sum + lineTotal(product, qty), 0),
    hasVariable: items.some(({product}) => isRange(product))
  };
}

function whatsappUrl(items) {
  const lines = items.map(({product, qty}, i) => {
    if (isRange(product)) return `${i + 1}. ${product.name} — qty ${qty} — ${priceLabel(product)} ${product.unit} (final price to be confirmed)`;
    const price = product.unit === "per metre" ? `${money(product.price)} per metre` : money(product.price);
    return `${i + 1}. ${product.name} — ${qtyText(product, qty)} × ${price} = ${money(lineTotal(product, qty))}`;
  });
  const { total, hasVariable } = cartTotals(items);
  const message = `Hello Macrowan Hardware, I would like to enquire about the following products:\n\n${lines.join("\n")}\n\nEstimated total for fixed-price items: ${money(total)}${hasVariable ? " (price-range items excluded, to be confirmed)" : ""}\n\nPlease confirm availability and final prices. Thank you.`;
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

function ProductImage({product, className=""}){
  if (product.image) return <img className={`pimg ${className}`} src={product.image} alt={product.name} loading="lazy" data-image-status="verified"/>;
  return <div className={`pimg placeholder ${className}`} role="img" aria-label={`${product.name} — photo coming soon`} data-image-status="required">
    <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="10" width="36" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/><circle cx="17" cy="21" r="3.5" fill="none" stroke="currentColor" strokeWidth="2.5"/><path d="M8 35l10-9 7 6 6-5 9 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/></svg>
    <span>Photo coming soon</span>
  </div>;
}

function ProductCard({product,onAdd}){
  return <article className="product" data-product-id={product.id}>
    <ProductImage product={product}/>
    <div className="productBody">
      <p className="productCategory">{product.category}</p>
      <h3>{product.name}</h3>
      {product.unit && !(product.unit === "per metre") && <span className="unit">{product.unit}</span>}
      <div className="productBottom"><strong>{product.unit === "per metre" ? <>{money(product.price)}<small> per metre</small></> : priceLabel(product)}</strong><button onClick={() => onAdd(product)}>Add to Cart</button></div>
    </div>
  </article>;
}

function Cart({items,onClose,onChange}){
  const { total, hasVariable } = cartTotals(items);
  return <div className="cartOverlay" onClick={onClose}>
    <aside className="cart" onClick={(e) => e.stopPropagation()}>
      <div className="cartHead"><div><p className="eyebrow orange">YOUR CART</p><h2>Review your items.</h2></div><button onClick={onClose}>×</button></div>
      {items.length === 0 ? <div className="emptyCart"><div>🛒</div><h3>Your cart is empty.</h3><p>Add products from the catalogue and they will appear here.</p><button className="btn" onClick={onClose}>CONTINUE SHOPPING →</button></div> : <>
        <div className="cartItems">{items.map(({product,qty}) => <div className="cartItem" key={product.id}><ProductImage product={product} className="cartThumb"/><div className="cartInfo"><h3>{product.name}</h3><small>{fullPriceLabel(product)}{product.unit && product.unit !== "per metre" ? ` • ${product.unit}` : ""}</small><div className="qty"><button onClick={() => onChange(product.id, qty - 1)}>−</button><span>{qty}</span>{product.qtyUnit && <em className="qtyUnit">{product.qtyUnit}</em>}<button onClick={() => onChange(product.id, qty + 1)}>+</button><button className="remove" onClick={() => onChange(product.id, 0)}>Remove</button></div></div><strong>{isRange(product) ? "TBC" : money(lineTotal(product, qty))}</strong></div>)}</div>
        <div className="cartSummary"><div><span>{hasVariable ? "Estimated total (fixed-price items)" : "Estimated total"}</span><strong>{money(total)}</strong></div>{hasVariable && <p>Items sold in a price range ($ from–to) are not included in the total — Macrowan will confirm their price by size/wattage.</p>}<p>Prices are subject to availability and final confirmation by Macrowan Hardware.</p><a className="btn whatsappCheckout" href={whatsappUrl(items)} target="_blank" rel="noreferrer">MESSAGE MACROWAN ON WHATSAPP →</a></div>
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
    return products.filter((p) => (category === "All" || p.category === category) && matches(p, query));
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
      <section className="hero"><img src={banner.hero} alt="Hardware tools and equipment"/><div className="heroOverlay"><p className="eyebrow">HARDWARE • HOME • PROJECTS</p><h1>Everything for<br/>Your <em>Home</em><br/>and <em>Projects</em></h1><p>Building materials, electrical products, gas equipment, tools, solar products and more.</p><a className="btn" href="#products">SHOP PRODUCTS →</a></div><div className="trust"><span>▱<b>{products.length} Products</b><small>in our catalogue</small></span><span>✓<b>Clear Pricing</b><small>browse before enquiring</small></span><span>⌁<b>WhatsApp Orders</b><small>easy product enquiries</small></span></div></section>

      <section id="categories" className="section"><div className="heading"><div><p className="eyebrow orange">SHOP BY CATEGORY</p><h2>Find what you need.</h2></div><a href="#products">View All →</a></div><div className="catgrid">
        <Category image={banner.gas} title="Gas & Cooking" onClick={() => {setCategory("Gas & Cooking"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.building} title="Building Materials" onClick={() => {setCategory("Building Materials"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.solar} title="Solar" onClick={() => {setCategory("Solar"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.electrical} title="Electrical" onClick={() => {setCategory("Electrical"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.tools} title="Power Tools" onClick={() => {setCategory("Power Tools"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.pa} title="PA Systems" onClick={() => {setCategory("PA Systems"); document.getElementById("products")?.scrollIntoView()}}/>
        <Category image={banner.audio} title="Audio" onClick={() => {setCategory("Audio"); document.getElementById("products")?.scrollIntoView()}}/>
      </div></section>

      <section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow orange">MACROWAN CATALOGUE</p><h2>Products & prices.</h2></div><button className="cartTop" onClick={() => setCartOpen(true)}>🛒 Cart ({cartCount})</button></div>
        <div className="shopTools"><label className="searchBox">⌕<input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, tools, solar, gas..." aria-label="Search products"/><button onClick={() => setQuery("")} className={query ? "clearSearch" : "hiddenClear"}>×</button></label><div className="filters">{categories.map(c => <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>{c}</button>)}</div></div>
        <div className="resultsMeta"><span>{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>{query && <span>for “{query}”</span>}</div>
        <div className="products">{filtered.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart}/>)}</div>
        {filtered.length === 0 && <div className="noResults"><h3>No products found.</h3><p>Try a different search or category.</p><button onClick={() => {setQuery("");setCategory("All")}}>SHOW ALL PRODUCTS</button></div>}
      </section>

      <section className="feature"><img src={banner.gas} alt="Gas stoves and cooking equipment"/><div><p className="eyebrow">GAS & COOKING</p><h2>Everyday cooking essentials.</h2><p>Browse gas tanks, stoves, regulators, plates and pipes, then add what you need to your cart.</p><a className="btn" href="#products" onClick={() => setCategory("Gas & Cooking")}>EXPLORE GAS PRODUCTS →</a></div></section>
      <section className="project"><img src={banner.tools} alt="Power tools"/><div><p className="eyebrow orange">TOOLS & PROJECTS</p><h2>Build, repair, improve.</h2><p>Find power tools and building supplies, see the listed price, and send your selected items to Macrowan on WhatsApp.</p></div></section>

      <section className="services"><div className="heading"><div><p className="eyebrow orange">HOW IT WORKS</p><h2>Browse. Add. Message.</h2></div></div><div className="serviceGrid"><div><b>01</b><h3>Find products</h3><p>Search the catalogue or filter by category.</p></div><div><b>02</b><h3>Add to cart</h3><p>Select quantities and review your estimated total.</p></div><div><b>03</b><h3>Message Macrowan</h3><p>Your product names, quantities and total are prepared in WhatsApp.</p></div></div></section>

      <section id="contact" className="contact"><div><p className="eyebrow orange">VISIT MACROWAN HARDWARE</p><h2>Find the store.</h2><p>Use the map below for the store location, or message the shop before you come.</p><a className="btn" href={`https://wa.me/${phone}?text=${encodeURIComponent("Hello Macrowan Hardware, I would like to visit your store. Please confirm the location.")}`}>MESSAGE ON WHATSAPP →</a><p className="phone">077 740 4044</p></div><a className="mapPlaceholder" href={mapUrl} target="_blank" rel="noreferrer"><div className="pin">●</div><strong>Macrowan Hardware</strong><span>Store location • Open in Google Maps</span><span className="mapButton">VIEW ON MAP →</span></a></section>
    </main>
    <footer><div className="brand"><span className="logo">⌂</span><span>MACROWAN<small>HARDWARE</small></span></div><p>Gas • Building • Solar • Electrical • Power Tools • PA Systems</p><p>© 2026 Macrowan Hardware</p></footer>
    <FloatingWhatsApp/>
    {cartOpen && <Cart items={cart} onClose={() => setCartOpen(false)} onChange={changeQty}/>} 
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
