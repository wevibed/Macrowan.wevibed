
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const phone = "263777404044";
const wa = `https://wa.me/${phone}?text=${encodeURIComponent("Hello Macrowan Hardware, I would like to enquire about your products.")}`;

const img = {
  hero:"https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
  building:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  appliances:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
  stove:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  electrical:"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
  tools:"https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85",
  bicycle:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85",
  paint:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
  kitchen:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  gas:"https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?auto=format&fit=crop&w=900&q=85"
};

function FloatingWhatsApp(){
  return <a className="wa" href={wa} aria-label="Chat with Macrowan Hardware on WhatsApp">⌕</a>;
}

function Header(){
  return <>
    <header>
      <a className="brand" href="#">
        <span className="logo">⌂</span>
        <span>MACROWAN<small>HARDWARE</small></span>
      </a>
      <nav>
        <a href="#categories">Categories</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="icons"><button>⌕</button><button>☰</button></div>
    </header>
  </>;
}

function Category({image,title}){
  return <a className="category" href="#products">
    <img src={image} alt={title}/><span>{title}</span><b>→</b>
  </a>
}
function Product({image,title}){
  return <article className="product">
    <img src={image} alt={title}/>
    <div><h3>{title}</h3><a href="#contact">Enquire →</a></div>
  </article>
}

function App(){
  return <div>
    <Header/>
    <main>
      <section className="hero">
        <img src={img.hero} alt="Hardware tools and equipment"/>
        <div className="heroOverlay">
          <p className="eyebrow">HARDWARE • HOME • PROJECTS</p>
          <h1>Everything for<br/>Your <em>Home</em><br/>and <em>Projects</em></h1>
          <p>Building materials, electrical products, home appliances, gas equipment, tools, bicycles and more.</p>
          <a className="btn" href="#categories">SHOP CATEGORIES →</a>
        </div>
        <div className="trust">
          <span>▱<b>Wide Range</b><small>of Products</small></span>
          <span>✓<b>Quality & Reliable</b><small>Products</small></span>
          <span>⌁<b>Friendly</b><small>Support</small></span>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="heading"><div><p className="eyebrow orange">SHOP BY CATEGORY</p><h2>Find what you need.</h2></div><a href="#products">View All →</a></div>
        <div className="catgrid">
          <Category image={img.building} title="Building Materials"/>
          <Category image={img.appliances} title="Home Appliances"/>
          <Category image={img.stove} title="Gas Stoves & Equipment"/>
          <Category image={img.electrical} title="Electrical Supplies"/>
          <Category image={img.tools} title="Tools & Hardware"/>
          <Category image={img.bicycle} title="Bicycles & Accessories"/>
          <Category image={img.paint} title="Paints & Building Finishes"/>
          <Category image={img.kitchen} title="Home & Kitchen"/>
        </div>
      </section>

      <section id="products" className="section productsSection">
        <div className="heading"><div><p className="eyebrow orange">FEATURED PRODUCTS</p><h2>Popular essentials.</h2></div><a href="#contact">Ask about availability →</a></div>
        <div className="products">
          <Product image={img.stove} title="Stoves & Cooking Appliances"/>
          <Product image={img.appliances} title="Home Appliances"/>
          <Product image={img.building} title="Building Materials"/>
          <Product image={img.electrical} title="Electrical Products"/>
          <Product image={img.tools} title="Tools & Hardware"/>
          <Product image={img.bicycle} title="Bicycles"/>
        </div>
      </section>

      <section className="feature">
        <img src={img.appliances} alt="Home appliances"/>
        <div><p className="eyebrow">HOME APPLIANCES</p><h2>Practical products for modern living.</h2><p>Explore home and kitchen essentials alongside the hardware and building supplies you need for your next project.</p><a className="btn" href="#products">EXPLORE APPLIANCES →</a></div>
      </section>

      <section className="project">
        <img src={img.building} alt="Building project"/>
        <div><p className="eyebrow orange">FOR HOME & CONSTRUCTION</p><h2>Build, repair, improve.</h2><p>One place for everyday hardware needs, project supplies, electrical products, tools and home essentials.</p></div>
      </section>

      <section className="services">
        <div className="heading"><div><p className="eyebrow orange">WHAT WE OFFER</p><h2>Useful products. Practical help.</h2></div></div>
        <div className="serviceGrid">
          <div><b>▰</b><h3>Product Supply</h3><p>Hardware, building materials and home essentials.</p></div>
          <div><b>⚒</b><h3>Project Support</h3><p>Find products for repairs, upgrades and construction projects.</p></div>
          <div><b>⌂</b><h3>Home Essentials</h3><p>Appliances, electrical products and everyday home equipment.</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow orange">VISIT MACROWAN HARDWARE</p>
          <h2>Store location coming soon.</h2>
          <p>We’ll add the confirmed shop location and map pin here once it has been verified.</p>
          <a className="btn" href={wa}>MESSAGE ON WHATSAPP →</a>
          <p className="phone">077 740 4044</p>
        </div>
        <div className="mapPlaceholder">
          <div className="pin">●</div>
          <strong>Macrowan Hardware</strong>
          <span>Location to be confirmed</span>
          <button>VIEW ON MAP →</button>
        </div>
      </section>
    </main>

    <footer>
      <div className="brand"><span className="logo">⌂</span><span>MACROWAN<small>HARDWARE</small></span></div>
      <p>Home Appliances • Building Materials • Electrical • Tools • Bicycles</p>
      <p>© 2026 Macrowan Hardware</p>
    </footer>
    <FloatingWhatsApp/>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
