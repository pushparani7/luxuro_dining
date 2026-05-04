import { motion } from "motion/react";
import { Star, Clock, MapPin, Phone, Instagram, Facebook, Twitter, Menu as MenuIcon, X, ShoppingBag, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import copilotImg from "./assets/copilot-image.svg";

// --- Types ---
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "Starters" | "Main Course" | "Desserts" | "Beverages";
  image: string;
}

// --- Data ---
const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Glazed Scallops",
    description: "Pan-seared Atlantic scallops with black truffle butter, gold leaf, and microscopic herbs.",
    price: "$28",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Wagyu A5 Fillet",
    description: "Japanese Wagyu beef served with red wine reduction, smoked bone marrow, and micro greens.",
    price: "$85",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Gold Leaf Chocolate Dome",
    description: "Dark chocolate shell filled with salted caramel mousse and edible 24k gold leaf.",
    price: "$22",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    name: "Oscietra Caviar Blinis",
    description: "Premium Oscietra caviar served on buckwheat blinis with crème fraîche and chives.",
    price: "$45",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
  },
];

const testimonials = [
  {
    name: "Alexander Rossi",
    role: "Food Critic",
    content: "LUXORA isn't just a restaurant; it's a sensory masterpiece. The attention to detail in every dish is unparalleled.",
    rating: 5,
  },
  {
    name: "Elena Vance",
    role: "Lifestyle Blogger",
    content: "The home delivery service brought the Michelin-star experience right to my dining table. Truly impressive.",
    rating: 5,
  },
];

// --- Components ---

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl text-cream italic"
    >
      {title}
    </motion.h2>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-luxury-black/90 backdrop-blur-xl py-4 shadow-2xl" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif italic tracking-tighter flex items-center gap-2">
          <span className="gold-gradient font-bold text-3xl not-italic">L</span>
          <span className="tracking-[0.2em] uppercase text-sm">UXORA</span>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          {["Home", "About", "Menu", "Delivery", "Reservation"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest hover:text-gold transition-colors font-medium text-cream/70"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 glass rounded-full text-xs uppercase tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-300">
            Order Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 h-screen bg-luxury-black z-50 flex flex-col items-center justify-center gap-10"
        >
          <button className="absolute top-8 right-6" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {["Home", "About", "Menu", "Delivery", "Reservation"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-serif italic"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 px-10 py-4 border border-gold text-gold rounded-full uppercase tracking-widest text-sm">
            Order Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-24">
    {/* Background Image with Parallax */}
    <div className="absolute inset-0 z-0">
        <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="w-full h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury Dining"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gold uppercase tracking-[0.5em] text-sm md:text-md mb-6 block font-bold"
      >
        Fine Dining Excellence
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-none"
      >
        Luxury Dining, <br />
        <span className="italic font-light">Delivered.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-cream/60 md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
      >
        Experience culinary mastery curated by Michelin-star chefs, delivered with the prestige of our signature white-glove service.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col md:flex-row gap-6 justify-center items-center"
      >
        <button className="px-10 py-5 bg-gold text-luxury-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-gold-light transition-all transform hover:scale-105">
          Order Experience
        </button>
        <button className="px-10 py-5 glass text-cream font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/10 transition-all flex items-center gap-2 group">
          Explore Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  </section>
);

const About = () => {
  const stats = [
    { label: "Michelin Stars", value: "3" },
    { label: "Gourmet Dishes", value: "50+" },
    { label: "Happy Guests", value: "12K" },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
                  alt="Chef at work"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 glass rounded-2xl p-8 hidden md:block">
            <Quote className="text-gold mb-4" />
            <p className="italic text-lg text-cream/80 mb-4">"Cooking is a form of art. My goal is to make every bite unforgettable."</p>
            <p className="uppercase tracking-widest text-[10px] font-bold text-gold">Chef Julian Rossi</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Philosophy</span>
          <h2 className="text-5xl md:text-6xl mb-8">Artistry in every <br /><span className="italic text-gold">culinary detail.</span></h2>
          <p className="text-cream/60 text-lg mb-12 font-light leading-relaxed">
            At LUXORA, we believe that dining is more than just a meal—it's a performance. We source only the rarest ingredients from local artisans and global purveyors to craft dishes that challenge the boundaries of taste and texture.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl text-gold font-serif italic mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream/40 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuCard = ({ item }: { item: MenuItem }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group h-full flex flex-col"
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 border border-white/5 shadow-2xl">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="px-8 py-3 bg-gold text-luxury-black font-bold rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform">
          Add to Cart
        </button>
      </div>
      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-gold border border-gold/20">
        {item.category}
      </div>
    </div>
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-2xl italic">{item.name}</h3>
      <span className="text-gold font-bold">{item.price}</span>
    </div>
    <p className="text-cream/40 text-sm font-light leading-relaxed line-clamp-2">
      {item.description}
    </p>
  </motion.div>
);

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const filteredItems = filter === "All" ? menuItems : menuItems.filter(i => i.category === filter);

  return (
    <section id="menu" className="py-32 px-6 bg-gradient-to-b from-luxury-black to-luxury-charcoal">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience the Luxury" subtitle="Our Menu" />

        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          {["All", "Starters", "Main Course", "Desserts"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${filter === cat ? "bg-gold text-luxury-black font-bold" : "border border-white/10 text-cream/40"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Delivery = () => (
  <section id="delivery" className="py-32 px-6">
    <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <SectionHeading title="Gourmet, At Home" subtitle="Delivery" />
          <p className="text-cream/60 mb-10 text-lg font-light leading-relaxed">
            Our specialized delivery fleet ensures that every dish arrives at the perfect temperature, maintained in hygienic, climate-controlled chambers for the ultimate dining experience.
          </p>

          <div className="space-y-6">
            {[ 
              { icon: <Clock className="text-gold" />, title: "30-Min Priority", desc: "Fastest premium delivery in the city." },
              { icon: <ShoppingBag className="text-gold" />, title: "White Glove Service", desc: "Our delivery agents are professional servers." },
              { icon: <Star className="text-gold" />, title: "Temperature Controlled", desc: "Preserving the chef's intent until your plate." }
            ].map((item, id) => (
              <div key={id} className="flex gap-4 items-start">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-gold">{item.title}</h4>
                  <p className="text-[12px] text-cream/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 px-12 py-5 bg-gold text-luxury-black font-bold rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-all">
            Order Experience
          </button>
        </div>

        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ rotate: 10, scale: 0.9 }}
            whileInView={{ rotate: -5, scale: 1 }}
            className="aspect-square glass rounded-3xl overflow-hidden p-6"
          >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000"
                alt="Delivery Experience"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 bg-luxury-charcoal">
    <div className="max-w-4xl mx-auto text-center">
      <SectionHeading title="Culinary Praise" subtitle="Critics & Guests" />
      
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 rounded-3xl text-left border border-gold/10"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
            </div>
            <p className="italic text-lg mb-8 text-cream/80">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center font-bold text-gold">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] text-gold">{t.name}</p>
                <p className="text-[10px] text-cream/40">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Reservation = () => (
  <section id="reservation" className="py-32 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
      <div className="lg:w-1/2">
        <SectionHeading title="Secure Your Table" subtitle="Book a Seat" />
        <p className="text-cream/60 mb-10 text-lg font-light leading-relaxed">
          Embark on an unforgettable culinary journey. Reservations are recommended at least 48 hours in advance for the full LUXORA experience.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-cream/60">
            <Clock size={20} className="text-gold" />
            <p>Mon - Sun: 18:00 - 00:00</p>
          </div>
          <div className="flex items-center gap-4 text-cream/60">
            <MapPin size={20} className="text-gold" />
            <p>42nd Avenue, Diamond District, NY</p>
          </div>
          <div className="flex items-center gap-4 text-cream/60">
            <Phone size={20} className="text-gold" />
            <p>+1 (800) LUX-ORA</p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="lg:w-1/2 glass p-10 rounded-[2rem] border border-gold/10"
      >
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Guests</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-colors appearance-none text-cream/40 px-6">
                <option>2 Person</option>
                <option>4 Person</option>
                <option>6+ Person</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Date</label>
              <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-colors text-cream/40" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Time</label>
              <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-colors text-cream/40" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gold font-bold">Special Requests</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-colors h-32" placeholder="Any dietary preferences..."></textarea>
          </div>
          <button className="w-full py-5 bg-gold text-luxury-black font-bold uppercase tracking-widest text-sm rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all">
            Confirm Booking
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <div className="text-2xl font-serif italic tracking-tighter mb-4">
          <span className="gold-gradient font-bold text-3xl not-italic">L</span>
          <span className="tracking-[0.2em] uppercase text-sm">UXORA</span>
        </div>
        <p className="text-cream/30 text-xs tracking-widest uppercase">Elegance in every bite.</p>
      </div>

      <div className="flex gap-8">
        <Instagram className="text-gold/60 hover:text-gold cursor-pointer transition-colors" size={20} />
        <Facebook className="text-gold/60 hover:text-gold cursor-pointer transition-colors" size={20} />
        <Twitter className="text-gold/60 hover:text-gold cursor-pointer transition-colors" size={20} />
      </div>

      <p className="text-cream/20 text-[10px] uppercase tracking-widest">© 2026 LUXORA Fine Dining. All Rights Reserved.</p>
    </div>
  </footer>
);

const Specials = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionHeading title="Exclusive Privileges" subtitle="Membership & Offers" />
      <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group overflow-hidden rounded-[2.5rem] h-[400px] border border-gold/20"
          >
           <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black p-12 flex flex-col justify-end">
            <h3 className="text-3xl italic mb-4">Golden Membership</h3>
            <p className="text-cream/60 mb-6 font-light max-w-sm">Join our elite circle for priority reservations, secret menu access, and personal sommelier consultations.</p>
            <button className="w-fit px-8 py-3 bg-gold text-luxury-black font-bold rounded-full uppercase tracking-widest text-xs">Join Now</button>
          </div>
        </motion.div>
        
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group overflow-hidden rounded-[2.5rem] h-[400px] border border-gold/20"
          >
           <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black p-12 flex flex-col justify-end">
            <h3 className="text-3xl italic mb-4">Seasonal Curations</h3>
            <p className="text-cream/60 mb-6 font-light max-w-sm">A seasonal 7-course tasting menu paired with vintage selections from our private cellar.</p>
            <button className="w-fit px-8 py-3 border border-gold text-gold font-bold rounded-full uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all">View Details</button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-left">Visual Journey</span>
          <h2 className="text-5xl italic text-left">The Gallery</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
            className="aspect-[3/4] rounded-xl overflow-hidden glass border-white/5"
          >
            <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-luxury-black min-h-screen text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Delivery />
      <Specials />
      <Testimonials />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}
