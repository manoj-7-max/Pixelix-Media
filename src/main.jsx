import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, Camera, Clapperboard, Mail, MapPin, Megaphone, Palette, Phone, Send, Share2, Sparkles, Target, Users, Video, Link as LinkIcon, Newspaper, PenTool, Instagram } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

const WHATSAPP_TEXT =
  "Hello%20Pixelix%20Media,%20I%20am%20interested%20in%20your%20services.%20Here%20are%20my%20details:%0AName:%0AEmail:%0AService:%0AMessage:";
const WHATSAPP_URL = `https://wa.me/919042041801?text=${WHATSAPP_TEXT}`;
const INSTAGRAM_URL = "https://www.instagram.com/pixelix_media?igsh=OWIxMGtybzc4YWQ4";
const INTRO_STORAGE_KEY = "pixelixIntroSeenV2";

const services = [
  { 
    id: "branding", 
    title: "Branding", 
    text: "Visual identity and positioning that makes your brand unmistakable.", 
    icon: Palette,
    longDescription: "Your brand is your promise. We craft visual identities that command attention and build trust through deep research, typography, and color psychology.",
    features: ["Logo & Visual Identity", "Brand Strategy", "Design Systems", "Packaging Design"]
  },
  { 
    id: "digital-marketing", 
    title: "Digital Marketing", 
    text: "Data-driven strategies to amplify your brand's digital presence.", 
    icon: Megaphone,
    longDescription: "We craft comprehensive digital marketing roadmaps that turn browsers into buyers. Our approach combines SEO, performance analytics, and growth hacking.",
    features: ["SEO Optimization", "Analytics & Reporting", "Growth Hacking", "Email Marketing"]
  },
  { 
    id: "paid-marketing", 
    title: "Paid Marketing", 
    text: "High-ROI ad campaigns across search and social platforms.", 
    icon: Target,
    longDescription: "Maximize your reach with precision-targeted paid campaigns. We manage your ad spend across Google and Meta to deliver measurable ROI.",
    features: ["Google Ads (SEM)", "Meta Ads", "Retargeting", "Lead Gen Funnels"]
  },
  { 
    id: "social-media", 
    title: "Social Media", 
    text: "Content calendars and community management that drive momentum.", 
    icon: Share2,
    longDescription: "We turn social feeds into brand assets. By combining trend-aware content with strategic posting, we build loyal communities for your brand.",
    features: ["Content Creation", "Community Management", "Influencer Strategy", "Social Ads"]
  },
  { 
    id: "traditional-marketing", 
    title: "Traditional Marketing", 
    text: "Offline branding and marketing for real-world impact.", 
    icon: Newspaper,
    longDescription: "Bridge the gap between digital and physical. We help you create high-impact traditional strategies from print to outdoor advertising.",
    features: ["Print Media", "Outdoor Ads", "Event Sponsorships", "Direct Mail"]
  },
  { 
    id: "content-marketing", 
    title: "Content Marketing", 
    text: "Storytelling that builds authority and engages audiences.", 
    icon: PenTool,
    longDescription: "Value-driven content that attracts and retains your target audience. We build long-term brand authority through strategic storytelling.",
    features: ["Blog Creation", "E-books", "Newsletter Strategy", "SEO Copywriting"]
  },
  { 
    id: "affiliate-marketing", 
    title: "Affiliate Marketing", 
    text: "Leverage networks to scale your sales and reach.", 
    icon: LinkIcon,
    longDescription: "Build a powerful network of partners. We design programs that incentivize referrals and expand your brand's footprint through trusted voices.",
    features: ["Program Design", "Partner Management", "Performance Tracking", "Commission Strategy"]
  },
  { 
    id: "ad-shooting", 
    title: "Ad Shooting", 
    text: "Cinematic production for brand films and social commercials.", 
    icon: Video,
    longDescription: "Bring your brand to life with high-end video production. Our team handles everything from script to cinematic post-production.",
    features: ["Brand Story Films", "Social Reels", "Product Showcase", "Post-Production"]
  },
];

const ourWorks = [
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG-20260207-WA0044.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_5955.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_5984.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_6000.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_6010.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_9297.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_9301.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_9305.JPG.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_9640.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/IMG_9653.JPEG" },
  { type: "image", category: "Photoshoot", src: "/portfolio/Picsart_26-02-07_18-40-00-359.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/Picsart_26-02-07_18-40-17-134.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/Picsart_26-02-07_18-41-23-724.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/Picsart_26-02-07_18-41-36-385.jpg.jpeg" },
  { type: "image", category: "Photoshoot", src: "/portfolio/Picsart_26-02-07_18-43-16-157.jpg.jpeg" },
];

const faqs = [
  {
    question: "What services does Pixelix Media offer?",
    answer: "Pixelix Media offers digital marketing, branding, social media management, photography, videography, and event coverage.",
  },
  {
    question: "Do you provide event photography in Chennai?",
    answer: "Yes. Pixelix Media provides event photography and videography services across Chennai for business, brand, and personal events.",
  },
  {
    question: "How can I contact Pixelix Media?",
    answer: "You can email pixelixmedia19@gmail.com, call 9042041801, or send a WhatsApp enquiry using the contact form.",
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={sectionReveal}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, id) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + id);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" to="/" aria-label="Pixelix Media home">
          <img 
            className="h-12 sm:h-16 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-all" 
            src="/logo.png" 
            alt="Pixelix Media" 
            loading="eager"
            fetchpriority="high"
          />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a className="hover:text-white" href="/#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a>
          <a className="hover:text-white" href="/#our-works" onClick={(e) => handleNavClick(e, "#our-works")}>Our Works</a>
          <Link className="hover:text-white" to="/founder">Founder</Link>
          <a className="hover:text-white" href="/#about" onClick={(e) => handleNavClick(e, "#about")}>About</a>
          <a className="hover:text-white" href="/#faq" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
          <a className="hover:text-white" href="/#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
          <a className="hover:text-white flex items-center gap-2" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram size={18} />
          </a>
        </div>
        <Link className="neon-button hidden sm:inline-flex" to="/#contact" onClick={(e) => handleNavClick(e, "#contact")}>
          Get Started <ArrowRight size={17} />
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover opacity-10 grayscale brightness-50"
          src="/portfolio/IMG_6010.JPG.jpeg"
          alt=""
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/40 via-[#0D0D0D]/90 to-[#0D0D0D]" />
      </div>
      <div className="pixel-field opacity-10" />
      <div className="hero-gradient opacity-40" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/[0.04] px-4 py-2 text-[11px] sm:text-xs text-blue-100 shadow-glow backdrop-blur-md">
            <Sparkles size={14} className="text-blue-300 animate-pulse" />
            <span className="tracking-widest uppercase">Chennai's Premier Digital Agency</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Elevating Brands <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">In the Digital Era.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            We fuse strategy with high-end production to create digital experiences that don't just exist—they lead.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <a className="neon-button min-w-[180px] justify-center" href="#contact">
              Launch Project <ArrowRight size={18} />
            </a>
            <a className="ghost-button min-w-[180px] justify-center" href="#services">
              Our Expertise
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[560px] mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[80px] sm:blur-[120px] animate-pulse" />
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
            <motion.img 
              className="mx-auto w-full max-w-[480px] object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
              src="/logo.png" 
              alt="Pixelix Media logo"
              loading="eager"
              fetchpriority="high"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Strategy", "Creative", "Growth"].map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100/90 backdrop-blur-md"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Core Services</p>
          <h2 className="text-3xl font-black text-white sm:text-5xl lg:text-6xl leading-[1.2]">Digital systems, brand stories, and production built under one roof.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 0.04}>
                <Link to={`/services/${service.id}`} className="service-card group block">
                  <div className="icon-shell">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64">{service.text}</p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OurWorks() {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin: "400px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const row1 = [...ourWorks].sort(() => 0.5 - Math.random());
  const row2 = [...ourWorks].sort(() => 0.5 - Math.random());

  return (
    <section id="our-works" ref={containerRef} className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-16 text-center">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-title mx-auto">Our Works</h2>
          <p className="mt-6 text-lg text-white/60 mx-auto max-w-2xl">
            A glimpse into our recent productions, brand shoots, and creative campaigns across Chennai.
          </p>
        </Reveal>
      </div>

      {isVisible ? (
        <div className="flex flex-col gap-12">
          {/* Row 1 - Photoshoot */}
          <div className="relative">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400/80">Professional Photoshoots</h3>
            </div>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee gap-8 py-4">
                {[...row1, ...row1].map((item, idx) => (
                  <WorkCard key={`row1-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Videography */}
          <div className="relative">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-4 flex justify-end">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400/80 text-right">Cinematic Videography</h3>
            </div>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee-reverse gap-8 py-4">
                {[...row2, ...row2].map((item, idx) => (
                  <WorkCard key={`row2-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[600px] flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent"></div>
        </div>
      )}
    </section>
  );
}

const WorkCard = React.memo(({ item }) => {
  return (
    <div className="work-item group">
      {/* Blurred Background to fill the frame for mixed aspect ratios */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {item.type === "image" ? (
          <img 
            src={item.src} 
            className="h-full w-full object-cover blur-xl opacity-20 scale-125" 
            alt="" 
          />
        ) : (
          <video 
            src={item.src} 
            className="h-full w-full object-cover blur-xl opacity-20 scale-125" 
            muted 
          />
        )}
      </div>

      <div className="relative h-full w-full flex items-center justify-center p-3">
        {item.type === "image" ? (
          <img 
            src={item.src} 
            alt="Portfolio work" 
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <video 
            src={item.src} 
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="none"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white font-bold tracking-wider uppercase text-[10px]">{item.category || "Premium Media"}</p>
          <p className="text-white/60 text-[9px] mt-0.5">Pixelix Studio Production</p>
        </div>
      </div>
    </div>
  );
});

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div className="glass-panel about-panel h-full">
            <p className="eyebrow">About Pixelix</p>
            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">Built for brands that need sharp digital presence.</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Strategy", "Market clarity"],
                ["Creative", "Premium visuals"],
                ["Growth", "Lead momentum"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/24 p-4">
                  <p className="text-lg font-black text-white">{title}</p>
                  <p className="mt-1 text-sm text-white/58">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="space-y-6 text-base leading-8 text-white/70">
            <p>
              Pixelix Media is a Chennai-based digital agency shaped around one belief: strong brands need strategy, identity, and media that move together.
            </p>
            <p>
              The studio helps businesses turn raw ideas into sharp campaigns, memorable visuals, and high-converting digital experiences.
            </p>
            <p>
              Our mission is to give growing brands a premium creative partner for marketing, branding, photography, videography, social media, and event coverage.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Pixelix Media, I am interested in your services. Here are my details:",
      `Name: ${formData.get("name") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Service: ${formData.get("service") || ""}`,
      `Message: ${formData.get("message") || ""}`,
    ].join("\n");
    window.location.href = `https://wa.me/919042041801?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Start your next digital move with Pixelix Media.</h2>
          <div className="mt-8 space-y-4">
            <ContactLine icon={Mail} text="pixelixmedia19@gmail.com" href="mailto:pixelixmedia19@gmail.com" />
            <ContactLine icon={Phone} text="9042041801" href="tel:+919042041801" />
            <ContactLine icon={MapPin} text="Chennai" />
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <iframe
              title="Pixelix Media Chennai map"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Chennai&output=embed"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="glass-panel" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" placeholder="you@example.com" type="email" required />
            </div>
            <Field label="Service" name="service" placeholder="Branding, marketing, event coverage..." required />
            <label className="block">
              <span className="field-label">Message</span>
              <textarea className="field min-h-36 resize-none" name="message" placeholder="Tell us what you want to build." required />
            </label>
            <button className="neon-button mt-2 w-full justify-center" type="submit">
              Send on WhatsApp <Send size={18} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  const content = (
    <span className="flex items-center gap-3 text-white/72">
      <span className="icon-shell !h-11 !w-11"><Icon size={19} /></span>
      {text}
    </span>
  );
  return href ? <a className="block hover:text-white" href={href}>{content}</a> : content;
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input className="field" {...props} />
    </label>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Answers for fast-moving brands.</h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <details className="faq-card" open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col gap-6">
          <img 
            className="h-12 sm:h-16 w-fit max-w-[200px] sm:max-w-[240px] object-contain" 
            src="/logo.png" 
            alt="Pixelix Media" 
            loading="lazy"
          />
          <div className="flex gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-white/5 p-3 text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <Instagram size={22} />
            </a>
            <a href={`mailto:pixelixmedia19@gmail.com`} className="flex items-center gap-2 rounded-full bg-white/5 p-3 text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <Mail size={22} />
            </a>
          </div>
        </div>
        <p className="text-sm text-white/50 max-w-md leading-relaxed">Pixelix Media, Chennai. Digital marketing, branding, photography, videography, and event coverage. High-end creative solutions for the modern brand.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a className="whatsapp-float" href={WHATSAPP_URL} aria-label="Contact Pixelix Media on WhatsApp">
      <Phone size={23} />
    </a>
  );
}

function FounderSection() {
  const navigate = useNavigate();
  return (
    <section id="founder" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-panel overflow-hidden !p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <p className="eyebrow">Creative Leadership</p>
                <h2 className="mt-4 text-4xl font-black text-white sm:text-6xl">Ram Prasath</h2>
                <p className="mt-2 text-xl font-medium text-cyan-400 uppercase tracking-widest">Founder & Creative Head</p>
                <p className="mt-8 text-lg leading-relaxed text-white/60">
                  A passionate video editor and videographer specializing in high-end cinematic visuals. From raw concepts to polished brand stories, Ram leads the creative vision at Pixelix Media.
                </p>
                <div className="mt-10">
                  <button onClick={() => navigate("/founder")} className="neon-button">
                    View Founder Portfolio <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full">
                <img 
                  src="/founder/founder_hero.png" 
                  alt="Ram Prasath" 
                  className="absolute inset-0 h-full w-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-transparent to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent lg:hidden block" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FounderPortfolio() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/founder/founder_hero.png" className="w-full h-full object-cover opacity-40 grayscale" alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10 w-full pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] font-black leading-none tracking-tighter text-white/10 uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
              PORTFOLIO
            </h1>
            <img src="/founder/founder_hero.png" className="mx-auto h-[500px] w-auto object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.2)] rounded-3xl" alt="Ram Prasath" />
            <div className="mt-12">
              <h2 className="text-5xl font-black text-[#E3D9C6] sm:text-7xl uppercase tracking-tighter italic">Ram Prasath</h2>
              <p className="mt-4 text-white/40 text-xl font-bold uppercase tracking-[0.4em]">Editor & Cinematographer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 relative">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Reveal>
            <h2 className="text-6xl font-black text-[#E3D9C6] mb-12 uppercase italic tracking-tighter">Introduction</h2>
            <div className="glass-panel text-2xl leading-relaxed text-white/80 p-12 border-[#E3D9C6]/10">
              "Hi, I’m Ram Prasath, a passionate video editor and videographer. I specialize in creating high-quality visuals, including reels, cinematic videos, and photography. I focus on delivering creative and engaging content that connects with the audience."
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-6xl font-black text-[#E3D9C6] mb-20 text-center uppercase">Personal Skills</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div className="glass-panel group hover:border-cyan-500/50 transition-colors">
                <div className="aspect-video overflow-hidden rounded-xl mb-8">
                  <img src="/founder/founder_skills.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Photography" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Photography</h3>
                <p className="text-lg text-white/60">A professional photographer with a passion for capturing high-quality and impactful visuals. I specialize in creative and detail-oriented photography for individuals and brands.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-panel group hover:border-violet-500/50 transition-colors">
                <div className="aspect-video overflow-hidden rounded-xl mb-8">
                  <img src="/founder/founder_experience.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Videography" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Videography</h3>
                <p className="text-lg text-white/60">Videographer specializing in capturing high-quality and cinematic visuals. I create engaging video content for brands and individuals with a strong focus on storytelling and detail.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-6xl font-black text-[#E3D9C6] mb-20 uppercase">Work Experience</h2>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="glass-panel flex flex-col md:flex-row gap-12 items-center border-[#E3D9C6]/5">
                <div className="md:w-1/3">
                  <p className="text-4xl font-black text-[#E3D9C6]">2024 - Present</p>
                  <p className="text-xl font-bold text-white mt-2">Self-employed</p>
                </div>
                <div className="md:w-2/3 border-l border-white/10 pl-12 space-y-4 text-lg text-white/60">
                  <p>• Captured and edited videos and photos for personal and small business projects</p>
                  <p>• Created engaging Instagram reels and promotional content</p>
                  <p>• Handled camera setup, lighting, and post-production</p>
                  <p>• Delivered high-quality visual content meeting client expectations</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-panel flex flex-col md:flex-row gap-12 items-center border-[#E3D9C6]/20 bg-[#E3D9C6]/5">
                <div className="md:w-1/3">
                  <p className="text-4xl font-black text-[#E3D9C6]">Pixelix Media</p>
                  <p className="text-xl font-bold text-white mt-2">Founder & Creative Head</p>
                </div>
                <div className="md:w-2/3 border-l border-white/10 pl-12 space-y-4 text-lg text-white/60">
                  <p>• Led video editing, photography, and videography projects</p>
                  <p>• Created engaging reels and promotional content for clients</p>
                  <p>• Managed end-to-end production (shoot → edit → delivery)</p>
                  <p>• Built and maintained a creative media brand from scratch</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Creative Gallery Section */}
      <section className="py-32 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <p className="eyebrow !text-[#E3D9C6]">Creative Portfolio</p>
                <h2 className="text-6xl font-black text-white mt-4 uppercase tracking-tighter">Featured Projects</h2>
              </div>
              <p className="text-white/40 max-w-sm text-lg italic">A curated selection of high-end productions, cinematic edits, and professional photography captures.</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { src: "/founder/founder_hero.png", title: "Visual Direction", cat: "Art Direction" },
              { src: "/founder/founder_intro.png", title: "Brand Storytelling", cat: "Production" },
              { src: "/founder/founder_editor.png", title: "Cinematic Editing", cat: "Post-Production" },
              { src: "/founder/founder_skills.png", title: "Impact Photography", cat: "Photography" },
              { src: "/founder/founder_experience.png", title: "Industry Experience", cat: "Strategy" },
              { src: "/founder/founder_thanks.png", title: "Creative Vision", cat: "Conclusion" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-white/2 cursor-crosshair">
                  <img src={item.src} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#E3D9C6] font-black uppercase tracking-widest text-xs mb-2">{item.cat}</p>
                    <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="absolute top-8 right-8 h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-white mb-8 italic uppercase tracking-tighter">Ready to start a project?</h2>
          <Link to="/#contact" className="neon-button !bg-[#E3D9C6] !text-black !shadow-[#E3D9C6]/20 inline-flex">
            Get in Touch with Ram <ArrowRight size={18} />
          </Link>
        </Reveal>
      </section>

      {/* Thank You Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <img src="/founder/founder_hero.png" className="w-full h-full object-cover opacity-20" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        </div>
        
        <div className="relative z-10 w-full text-center px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative inline-block">
              <h2 className="text-[15vw] font-black leading-none tracking-tighter text-[#E3D9C6] uppercase select-none flex flex-col">
                THANK <span className="text-transparent" style={{ WebkitTextStroke: "1px #E3D9C6" }}>YOU</span>
              </h2>
              <img 
                src="/founder/founder_hero.png" 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-auto object-contain z-20 drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]" 
                alt="Ram Prasath" 
              />
            </div>
            
            <div className="mt-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto border-t border-white/10 pt-10 text-white/50 font-medium tracking-widest uppercase text-sm">
              <p>Ram Prasath</p>
              <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
                <p>Website</p>
                <p className="text-[#E3D9C6] mt-1">Pixelixmedia.in</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-white">Service Not Found</h1>
        <button onClick={() => navigate("/")} className="neon-button mt-8">Back to Home</button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.button 
          onClick={() => navigate("/")}
          className="mb-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-cyan-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ← Back to Overview
        </motion.button>

        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="icon-shell !h-16 !w-16 !rounded-2xl mb-8">
              <Icon size={32} />
            </div>
            <h1 className="text-5xl font-black text-white sm:text-7xl lg:text-8xl">{service.title}</h1>
            <p className="mt-10 text-xl leading-relaxed text-white/60">{service.longDescription}</p>
            
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {service.features.map((feature, i) => (
                <motion.div 
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <Sparkles size={20} className="text-cyan-400 mb-4" />
                  <h4 className="text-lg font-bold text-white">{feature}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-panel sticky top-32">
              <h3 className="text-2xl font-bold text-white">Start your {service.title} journey</h3>
              <p className="mt-4 text-white/60">Let's build something remarkable together. Contact our Chennai studio today.</p>
              <div className="mt-8 space-y-6">
                <ContactLine icon={Mail} text="pixelixmedia19@gmail.com" href="mailto:pixelixmedia19@gmail.com" />
                <ContactLine icon={Phone} text="9042041801" href="tel:+919042041801" />
              </div>
              <button onClick={() => navigate("/#contact")} className="neon-button mt-10 w-full justify-center">
                Enquire Now <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <main className="site-ready">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <OurWorks />
              <FounderSection />
              <About />
              <Contact />
              <FAQ />
            </>
          } />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/founder" element={<FounderPortfolio />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
