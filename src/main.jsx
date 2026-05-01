import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, Camera, Clapperboard, Mail, MapPin, Megaphone, Palette, Phone, Send, Share2, Sparkles, Target, Users, Link as LinkIcon, Newspaper, PenTool, Instagram } from "lucide-react";
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
    id: "professional-photoshoot", 
    title: "Professional Photoshoot", 
    text: "High-end brand portraits and commercial photography in Chennai.", 
    icon: Camera,
    longDescription: "As a leading digital marketing agency in Chennai, we provide professional photoshoot services for brands, products, and individuals. Our high-end equipment and lighting setup ensure cinematic quality in every shot, perfect for local businesses looking to stand out in the Tamil Nadu market.",
    features: ["Brand Portraits", "Product Photography", "Commercial Shoots", "Fashion Photography"]
  },
  { 
    id: "cinematic-videography", 
    title: "Cinematic Videography", 
    text: "Story-driven film production and brand commercials for Chennai startups.", 
    icon: Clapperboard,
    longDescription: "Transform your brand's narrative with cinematic videography. We specialize in high-end production in Chennai, from raw concepts to polished film stories that resonate with your local and global audience. Our video production services are designed for impact.",
    features: ["Brand Films", "Commercial Ads", "Event Highlights", "Social Media Reels"]
  },
  { 
    id: "branding", 
    title: "Branding Agency Chennai", 
    text: "Visual identity and positioning that makes your Chennai brand unmistakable.", 
    icon: Palette,
    longDescription: "Pixelix Media is the premier branding agency in Chennai. Your brand is your promise. We craft visual identities that command attention and build trust through deep research, typography, and color psychology tailored for the Tamil Nadu audience.",
    features: ["Logo & Visual Identity", "Brand Strategy", "Design Systems", "Packaging Design"]
  },
  { 
    id: "digital-marketing", 
    title: "Digital Marketing Agency", 
    text: "Data-driven strategies to amplify your brand's digital presence in Chennai.", 
    icon: Megaphone,
    longDescription: "We are the best digital marketing agency in Chennai, crafting comprehensive digital marketing roadmaps that turn browsers into buyers. Our approach combines SEO, performance analytics, and growth hacking to help Chennai businesses scale effectively.",
    features: ["SEO Optimization", "Analytics & Reporting", "Growth Hacking", "Email Marketing"]
  },
  { 
    id: "paid-marketing", 
    title: "Google Ads Chennai", 
    text: "High-ROI ad campaigns across search and social platforms for local growth.", 
    icon: Target,
    longDescription: "Maximize your reach with precision-targeted paid campaigns and Google Ads in Chennai. We manage your ad spend across Google and Meta to deliver measurable ROI for businesses across Tamil Nadu.",
    features: ["Google Ads (SEM)", "Meta Ads", "Retargeting", "Lead Gen Funnels"]
  },
  { 
    id: "social-media", 
    title: "Social Media Marketing Chennai", 
    text: "Content calendars and community management that drive momentum for Chennai brands.", 
    icon: Share2,
    longDescription: "We turn social feeds into brand assets with expert social media marketing in Chennai. By combining trend-aware content with strategic posting, we build loyal communities for your brand across India.",
    features: ["Content Creation", "Community Management", "Influencer Strategy", "Social Ads"]
  },
  { 
    id: "traditional-marketing", 
    title: "Traditional Marketing", 
    text: "Offline branding and marketing for real-world impact in Chennai.", 
    icon: Newspaper,
    longDescription: "Bridge the gap between digital and physical media. We help Chennai businesses create high-impact traditional strategies from print to outdoor advertising across Tamil Nadu.",
    features: ["Print Media", "Outdoor Ads", "Event Sponsorships", "Direct Mail"]
  },
  { 
    id: "content-marketing", 
    title: "Content Marketing", 
    text: "Storytelling that builds authority and engages audiences in Chennai.", 
    icon: PenTool,
    longDescription: "Value-driven content that attracts and retains your target audience. We build long-term brand authority through strategic storytelling and content marketing services in Chennai, Tamil Nadu.",
    features: ["Blog Creation", "E-books", "Newsletter Strategy", "SEO Copywriting"]
  },
  { 
    id: "affiliate-marketing", 
    title: "Affiliate Marketing", 
    text: "Leverage networks to scale your sales and reach across India.", 
    icon: LinkIcon,
    longDescription: "Build a powerful network of partners. We design programs that incentivize referrals and expand your brand's footprint through trusted voices, serving as a top digital agency in Chennai.",
    features: ["Program Design", "Partner Management", "Performance Tracking", "Commission Strategy"]
  },
  { 
    id: "event-photography", 
    title: "Event Photography Chennai", 
    text: "Professional coverage for corporate events and brand launches in Chennai.", 
    icon: Camera,
    longDescription: "Capture the essence of your events with high-end photography. We provide comprehensive coverage for corporate gatherings, brand launches, and special events across Chennai and Tamil Nadu.",
    features: ["Corporate Events", "Brand Launches", "Product Unveiling", "Live Editing"]
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
    question: "What is the best digital marketing agency in Chennai?",
    answer: "Pixelix Media is a Chennai-based digital marketing agency offering SEO, web development, branding, and social media marketing services to help businesses grow online.",
  },
  {
    question: "How much does SEO cost in Chennai?",
    answer: "SEO pricing in Chennai varies based on competition and goals, but Pixelix Media offers affordable and customized SEO solutions for startups and businesses.",
  },
  {
    question: "Why is digital marketing important for businesses?",
    answer: "Digital marketing helps businesses reach more customers online, increase visibility, generate leads, and improve brand awareness effectively.",
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
            Digital Marketing Agency <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">in Chennai.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Pixelix Media is a digital marketing agency based in Chennai, Tamil Nadu. We fuse strategy with high-end production to create digital experiences that lead.
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <a className="neon-button min-w-[180px] justify-center" href="#contact">
              Get Free Consultation <ArrowRight size={18} />
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
          <p className="eyebrow">SEO Services in Chennai</p>
          <h2 className="text-3xl font-black text-white sm:text-5xl lg:text-6xl leading-[1.2]">Website Development Services, Branding, and Production.</h2>
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
        <div className="flex flex-col gap-16">
          {/* Row 1 - Photoshoot */}
          <div className="relative">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400/80">Professional Photoshoots</h3>
            </div>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee gap-8 py-4">
                {[...row1, ...row1, ...row1].map((item, idx) => (
                  <WorkCard key={`row1-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Videography */}
          <div className="relative">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-6 flex justify-end">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-violet-400/80 text-right">Cinematic Videography</h3>
            </div>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee-reverse gap-8 py-4">
                {[...row2, ...row2, ...row2].map((item, idx) => (
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
      {item.type === "image" ? (
        <img 
          src={item.src} 
          alt={`${item.category || "SEO services"} in Chennai by Pixelix Media`} 
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <video 
          src={item.src} 
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
        />
      )}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
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
              Pixelix Media is a Chennai-based digital marketing agency and SEO company in Chennai, Tamil Nadu, shaped around one belief: strong brands need strategy and media that move together.
            </p>
            <p>
              Our studio helps businesses in Chennai turn raw ideas into sharp campaigns, memorable visuals, and high-converting digital experiences. We are a trusted web design company in Chennai for modern brands.
            </p>
            <p>
              Serving startups and businesses across Chennai, Tamil Nadu, our mission is to give growing brands a premium creative partner for SEO services, branding, and website development in Chennai.
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
          <p className="eyebrow">Branding Agency Chennai</p>
          <h2 className="section-title">Start your next project with Pixelix Media Chennai.</h2>
          <div className="mt-8 space-y-4">
            <ContactLine icon={Mail} text="pixelixmedia19@gmail.com" href="mailto:pixelixmedia19@gmail.com" />
            <ContactLine icon={Phone} text="9042041801" href="tel:+919042041801" />
            <ContactLine icon={MapPin} text="Chennai, Tamil Nadu, India" />
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
              Start Your Project <Send size={18} />
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
  return (
    <section id="founder" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-panel overflow-hidden !p-0 relative min-h-[600px] flex items-center">
            {/* Background Image - Full Scale & Original Color */}
            <img 
              src="/founder/founder_hero.png" 
              alt="Ram Prasath - Founder of Pixelix Media" 
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
              onError={(e) => { e.target.src = "/logo.png"; e.target.className = "absolute inset-0 m-auto h-32 w-auto object-contain opacity-20"; }}
            />
            {/* Sophisticated dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent lg:w-2/3 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/40 to-transparent lg:hidden block" />
            
            {/* Content Section */}
            <div className="relative z-10 p-6 sm:p-12 lg:p-20 max-w-2xl w-full">
              <p className="eyebrow">Creative Leadership</p>
              <h2 className="mt-4 text-4xl font-black text-white sm:text-6xl lg:text-7xl">Ram Prasath</h2>
              <p className="mt-2 text-xl font-medium text-cyan-400 uppercase tracking-widest">Founder & Creative Head</p>
              <p className="mt-8 text-lg leading-relaxed text-white/80">
                A visionary creator specializing in high-end cinematic visuals and digital branding in Chennai. From raw concepts to polished brand stories, Ram leads the creative vision at Pixelix Media.
              </p>
              <div className="mt-10">
                <Link to="/founder" className="neon-button inline-flex items-center gap-2">
                  View Founder Portfolio <ArrowRight size={18} />
                </Link>
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

  const pages = [
    { src: "/founder/founder_hero.png", alt: "Ram Prasath Portfolio", showScroll: true },
    { src: "/founder/founder_intro.png", alt: "Introduction" },
    { src: "/founder/founder_editor.png", alt: "Editor" },
    { src: "/founder/founder_skills.png", alt: "Personal Skills" },
    { src: "/founder/founder_experience.png", alt: "Work Experience" },
    { src: "/founder/founder_thanks.png", alt: "Thank You" }
  ];

  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-[#050505]">
      {pages.map((page, index) => (
        <section key={index} className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center">
          <img 
            src={page.src} 
            alt={page.alt} 
            className="h-full w-full object-contain md:object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {page.showScroll && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Scroll Down</span>
              <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
            </div>
          )}
          {/* Subtle branding overlay */}
          <div className="absolute bottom-10 right-10 z-10 hidden md:block">
            <p className="text-[#E3D9C6] text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Ram Prasath × Pixelix</p>
          </div>
        </section>
      ))}
      
      {/* Floating Home Button */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 z-[100] flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-xl transition-all hover:bg-white hover:text-black"
      >
        <ArrowRight className="rotate-180" size={14} /> Back to Studio
      </Link>
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

function MainContent() {
  const location = useLocation();
  const isFounderPage = location.pathname === "/founder";

  return (
    <>
      {!isFounderPage && <Navbar />}
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
      {!isFounderPage && <Footer />}
      {!isFounderPage && <FloatingWhatsApp />}
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="site-ready">
        <MainContent />
      </main>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
