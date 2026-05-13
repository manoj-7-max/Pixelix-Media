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
    title: "Cinematic Photography", 
    text: "Capturing brand essence through high-precision commercial and portrait photography.", 
    icon: Camera,
    longDescription: "We deliver visual excellence that commands attention. Our professional photography services focus on technical precision and creative storytelling, ensuring every frame resonates with your target audience and elevates your brand's market position.",
    features: ["Executive Portraits", "Industrial Photography", "Product Catalogs", "Fashion Editorials"]
  },
  { 
    id: "cinematic-videography", 
    title: "Cinematic Production", 
    text: "High-impact video storytelling for modern brands and corporate narratives.", 
    icon: Video,
    longDescription: "Transforming raw concepts into polished cinematic experiences. We specialize in high-production value videography, from viral social media assets to comprehensive brand documentaries that drive deep engagement and conversion.",
    features: ["Brand Films", "Social Reels", "Corporate Documentaries", "Product Launch Videos"]
  },
  { 
    id: "branding-agency", 
    title: "Strategic Branding", 
    text: "Forging unmistakable identities through deep research and world-class design systems.", 
    icon: Palette,
    longDescription: "Your brand is your most valuable asset. We craft cohesive visual identities and strategic brand systems that build trust and distinction in competitive landscapes, ensuring long-term recognition and authority.",
    features: ["Visual Identity", "Design Systems", "Brand Strategy", "Market Positioning"]
  },
  { 
    id: "digital-marketing", 
    title: "Growth Engineering", 
    text: "Performance-driven digital roadmaps designed to scale your business footprint.", 
    icon: BarChart3,
    longDescription: "We don't just market; we engineer growth. Our comprehensive digital strategies combine search optimization, performance analytics, and precision targeting to turn market opportunities into measurable revenue.",
    features: ["SEO Strategy", "Market Analysis", "Growth Hacking", "ROI Optimization"]
  },
  { 
    id: "paid-marketing", 
    title: "Precision Ads", 
    text: "ROI-focused performance marketing across Google and Meta platforms.", 
    icon: Target,
    longDescription: "Maximize your reach with precision-targeted paid campaigns. We manage your ad spend with technical rigor, optimizing for lead generation and sales conversion to deliver industry-leading return on investment.",
    features: ["Google Ads", "Meta Campaigns", "Funnel Optimization", "Lead Generation"]
  },
  { 
    id: "social-media-marketing", 
    title: "Social Authority", 
    text: "Building loyal brand communities through strategic content and engagement.", 
    icon: Share2,
    longDescription: "We turn social channels into brand assets. By combining trend-aware creative with strategic distribution, we build loyal communities and expand your brand's voice across India's digital landscape.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Engagement Growth"]
  },
  { 
    id: "web-design", 
    title: "Web Engineering", 
    text: "High-performance digital architecture built for conversion and scale.", 
    icon: Globe,
    longDescription: "Your website is the heart of your digital ecosystem. We build high-performance, aesthetically stunning web architectures that merge seamless user experience with industrial-grade engineering for maximum conversion.",
    features: ["E-commerce", "Corporate Portals", "UX/UI Design", "Performance Optimization"]
  },
  { 
    id: "content-marketing", 
    title: "Authority Content", 
    text: "Strategic storytelling that builds trust and dominates search results.", 
    icon: FileText,
    longDescription: "Establish market leadership through high-value content. We produce strategic narratives that educate, inspire, and convert, while ensuring your brand remains at the forefront of modern search and AI engines.",
    features: ["Thought Leadership", "SEO Copywriting", "Strategic Blogging", "Newsletter Systems"]
  },
  { 
    id: "affiliate-marketing", 
    title: "Affiliate Marketing", 
    text: "Leverage networks to scale your sales and reach across India.", 
    icon: LinkIcon,
    longDescription: "Build a powerful network of partners with our affiliate marketing services. We design programs that incentivize referrals and expand your brand's footprint through trusted voices. Affiliate marketing is a highly cost-effective way to scale your sales, as you only pay for results. Our team in Chennai manages partner recruitment, performance tracking, and commission strategies. We help you connect with high-quality affiliates who align with your brand values. By leveraging the networks of others, we help your business reach new heights without the upfront costs of traditional advertising.",
    features: ["Program Design", "Partner Management", "Performance Tracking", "Commission Strategy"]
  },
  { 
    id: "event-photography", 
    title: "Event Coverage", 
    text: "Professional coverage for corporate events and brand launches.", 
    icon: Camera,
    longDescription: "Capture the essence of your events with high-end photography. We provide comprehensive coverage for corporate gatherings, brand launches, and special events across Chennai and Tamil Nadu. Our event photographers are experts at capturing candid moments and key highlights that tell the story of your occasion. We understand the fast-paced nature of events and provide live editing services for immediate social media updates. Whether it is a product unveiling or a large-scale corporate conference, we ensure every important detail is documented with professional quality.",
    features: ["Corporate Events", "Brand Launches", "Product Unveiling", "Live Editing"]
  },
];

const reviews = [
  {
    name: "Anjali Sharma",
    role: "Founder, Bloom Fashion",
    text: "Pixelix Media transformed our brand's presence. Their cinematic reels and photography are simply world-class. We saw a 3x increase in engagement!",
    stars: 5
  },
  {
    name: "Rahul Kumar",
    role: "Marketing Head, TechNova",
    text: "The most professional team we've worked with. Their SEO strategy helped us rank for high-competition keywords in just a few months.",
    stars: 5
  },
  {
    name: "Priya Menon",
    role: "Owner, Organic Eats",
    text: "Exceeded all expectations. Their branding identity work gave our business the premium look we needed to stand out.",
    stars: 5
  },
  {
    name: "Karthik Raja",
    role: "CEO, Spark Events",
    text: "Incredible attention to detail in their event coverage. Every shot captures the emotion perfectly. Pixelix is our go-to media partner.",
    stars: 5
  }
];

const stats = [
  { label: "Works Done", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years Experience", value: "2.5+" }
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
    question: "What is the best digital marketing agency in the region?",
    answer: "Pixelix Media is a leading digital marketing agency in Chennai offering SEO, web development, branding, and social media marketing services to help businesses grow online.",
  },
  {
    question: "How much does professional SEO cost?",
    answer: "SEO pricing varies based on competition and business goals, but Pixelix Media offers affordable and customized SEO solutions for startups and established brands.",
  },
  {
    question: "Why is digital marketing important for businesses?",
    answer: "Digital marketing helps businesses reach more customers online, increase visibility, generate leads, and improve brand awareness effectively in the modern marketplace.",
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
          <a className="hover:text-white" href="/#reviews" onClick={(e) => handleNavClick(e, "#reviews")}>Reviews</a>
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
    <section id="home" className="relative min-h-[95vh] overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505]" />
        <img
          className="h-full w-full object-cover opacity-[0.08] grayscale mix-blend-overlay"
          src="/portfolio/IMG_6010.JPG.jpeg"
          alt=""
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
      </div>
      
      {/* Animated Glows */}
      <div className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
      <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse-slow" />
      
      <div className="pixel-field opacity-[0.07]" />
      <div className="hero-gradient opacity-30" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300 shadow-glow backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Premier Digital Creative Studio
            </motion.div>
            
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
              <span className="block">Transforming</span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent pb-2">Digital Vision</span>
              <span className="block">into Reality.</span>
            </h1>
            
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 sm:text-xl lg:text-2xl">
              Elevating brands through cinematic storytelling, high-performance web engineering, and data-driven marketing strategies that command attention.
            </p>
            
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a className="neon-button group min-w-[200px] justify-center text-base" href="#contact">
                Start a Project 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </a>
              <a className="ghost-button min-w-[200px] justify-center text-base border-white/5 hover:border-blue-400/30" href="#services">
                Explore Expertise
              </a>
            </div>

            {/* Quick Stats/Trust badges */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-12 opacity-60">
              <div>
                <p className="text-2xl font-black text-white">50+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400/80">Productions</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">30+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400/80">Global Brands</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">2.5+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">Years Exp</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Elements behind logo */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[100px] opacity-50" />
            
            <div className="relative z-10 flex items-center justify-center py-12 lg:py-0">
              <div className="relative h-[320px] w-[320px] sm:h-[500px] sm:w-[500px]">
                {/* Floating Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-white/5"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                    }}
                    style={{ padding: `${i * 40}px` }}
                  />
                ))}
                
                {/* Main Logo Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative p-12 sm:p-16 rounded-[48px] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-3xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      className="relative h-auto w-full max-w-[280px] sm:max-w-[340px] drop-shadow-[0_0_50px_rgba(59,130,246,0.4)]" 
                      src="/logo.png" 
                      alt="Pixelix Media" 
                    />
                  </motion.div>
                </div>

                {/* Floating Tech Chips/Icons */}
                <FloatingIcon Icon={Camera} className="top-10 right-10 bg-blue-500/20" delay={0} />
                <FloatingIcon Icon={Clapperboard} className="bottom-20 -left-5 bg-purple-500/20" delay={0.5} />
                <FloatingIcon Icon={Sparkles} className="top-1/2 -right-10 bg-cyan-500/20" delay={1} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ Icon, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`absolute hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 backdrop-blur-xl ${className}`}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <Icon size={24} className="text-white/80" />
    </motion.div>
  );
}

function Stats() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-black text-white sm:text-5xl lg:text-6xl mb-2">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400/80">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Strategic Expertise</p>
          <h2 className="text-4xl font-black text-white sm:text-6xl lg:text-7xl leading-[1.1]">
            Engineering Excellence in <br/>
            <span className="text-blue-500">Design & Growth.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <Link to={`/services/${service.id}`} className="group relative block rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:border-blue-500/30 hover:bg-white/[0.04] hover:-translate-y-2">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Icon size={28} />
                    </div>
                    <h3 className="mt-8 text-2xl font-bold text-white">{service.title}</h3>
                    <p className="mt-4 text-white/50 leading-relaxed">{service.text}</p>
                    <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue-400">
                      Learn Strategy <ArrowRight size={16} />
                    </div>
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
            A glimpse into our recent productions, brand shoots, and creative campaigns.
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
    <section id="about" className="relative overflow-hidden py-32 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <p className="eyebrow">The Studio</p>
              <h2 className="mt-6 text-5xl font-black text-white sm:text-7xl leading-tight">Built for brands that <br/><span className="text-blue-500">demand excellence.</span></h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["Strategic", "Market Clarity"],
                  ["Creative", "Visual Power"],
                  ["Digital", "Performance"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-xl">
                    <p className="text-xl font-black text-white">{title}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-blue-400 font-bold">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8 text-lg leading-relaxed text-white/40">
              <p className="text-white/70">
                Pixelix Media is a high-performance <span className="text-white font-semibold">creative engineering studio</span>. We operate at the intersection of cinematic storytelling and industrial-grade digital marketing.
              </p>
              <p>
                Our philosophy is simple: <span className="text-blue-400">Design should convert, and strategy should scale.</span> We partner with ambitious leaders to build digital ecosystems that don't just exist—they dominate.
              </p>
              <p>
                From our roots in Tamil Nadu to a global creative vision, we've redefined what it means to be a "digital agency". We are your strategic partners in the pursuit of market authority and visual distinction.
              </p>
              <div className="pt-8 flex items-center gap-4 border-t border-white/5">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Pixelix Quality Assurance</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative py-32 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-20">
          <p className="eyebrow">Social Proof</p>
          <h2 className="section-title mx-auto">Market Authority.</h2>
          <p className="mt-6 text-xl text-white/40 mx-auto max-w-2xl leading-relaxed">
            Trusted by founders and marketing leaders who value technical rigor and creative distinction.
          </p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 h-full flex flex-col justify-between group transition-all hover:bg-white/[0.04]">
                <div>
                  <div className="flex gap-1 mb-8 text-blue-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed italic text-lg">"{review.text}"</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-px">
                    <div className="h-full w-full rounded-full bg-[#0D0D0D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{review.name}</p>
                    <p className="text-[10px] text-blue-400/80 uppercase tracking-widest font-black mt-0.5">{review.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
          <p className="eyebrow">Contact Us</p>
          <h2 className="section-title">Start your next project with Pixelix Media.</h2>
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

function SEOContent() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-black text-white mb-6">Strategic SEO Solutions</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>Our <Link to="/" className="text-cyan-400 hover:underline">SEO company</Link> focuses on driving organic traffic that actually converts. We understand that ranking on the first page of Google is just the beginning; our goal is to put your brand in front of the right audience. We use advanced white-hat SEO techniques to build your site's authority and ensure long-term visibility in search results.</p>
              <p>By conducting deep keyword research and technical audits, we ensure your website meets all search engine requirements. From on-page optimization to building high-quality backlinks, our SEO experts leave no stone unturned. We stay updated with the latest algorithm changes to keep your business ahead of the competition.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-black text-white mb-6">High-Performance Web Development</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>As a premier <Link to="/" className="text-cyan-400 hover:underline">web design company</Link>, we build websites that are both visually stunning and technically robust. We use modern frameworks like React and Vite to ensure your site is ultra-fast, responsive, and secure across all devices. Our focus is on high-performance engineering that provides a seamless user experience.</p>
              <p>Our development process involves meticulous planning and user-centric design. We focus on creating digital experiences that reflect your brand's unique identity while providing a seamless journey for your customers. Whether you need a corporate portfolio or a complex web application, our team delivers world-class <Link to="/" className="text-cyan-400 hover:underline">website development</Link>.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-black text-white mb-6">Social Media Strategy</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>Social media is more than just posting; it's about building a community. Our <Link to="/" className="text-cyan-400 hover:underline">social media marketing</Link> helps brands connect with their audience on a personal level through creative storytelling and data-driven engagement. We help you navigate the ever-changing social landscape with confidence and precision.</p>
              <p>We manage your profiles across Instagram, LinkedIn, and Facebook, creating content that resonates with your target market while maintaining a global appeal. Our strategies are designed to boost your brand's momentum and reach, turning followers into brand advocates. From viral reels to professional LinkedIn positioning, we handle it all.</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-3xl font-black text-white mb-6">Expert Branding & Identity</h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>Your brand is the soul of your business. Our <Link to="/" className="text-cyan-400 hover:underline">branding agency</Link> helps you define your promise and visual identity. We combine deep market research with creative vision to build brands that stand out in crowded markets. We believe that a strong brand is the foundation of all successful marketing efforts.</p>
              <p>From logo design to full-scale brand strategy, we work closely with startups and established businesses to ensure their message is clear, consistent, and highly impactful. Our goal is to create a visual and narrative language that connects with your audience and creates lasting brand loyalty through strategic positioning.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
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
    <section id="faq" className="py-32 bg-[#050505]">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-20">
          <p className="eyebrow">Knowledge Base</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">Strategic Insights.</h2>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <details className="group rounded-3xl border border-white/5 bg-white/[0.01] p-6 transition-all hover:bg-white/[0.03]" open={index === 0}>
                <summary className="flex cursor-pointer items-center justify-between list-none font-bold text-lg text-white">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-blue-400 transition-transform group-open:rotate-180">
                    <ArrowRight className="rotate-90" size={16} />
                  </span>
                </summary>
                <div className="mt-6 border-t border-white/5 pt-6 text-white/50 leading-relaxed">
                  {faq.answer}
                </div>
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
        <p className="text-sm text-white/50 max-w-md leading-relaxed">Pixelix Media. Digital marketing, branding, photography, videography, and event coverage. High-end creative solutions for modern brands in India.</p>
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
    <section id="founder" className="relative py-32 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-[40px] border border-white/5 bg-white/[0.01] overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image */}
            <img 
              src="/founder/founder_hero.png" 
              alt="Ram Prasath - Founder of Pixelix Media" 
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-[center_top]"
              onError={(e) => { e.target.src = "/logo.png"; e.target.className = "absolute inset-0 m-auto h-32 w-auto object-contain opacity-10"; }}
            />
            {/* Desktop Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent lg:w-2/3 hidden lg:block" />
            {/* Mobile Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/60 to-[#050505]/20 lg:hidden block" />
            
            <div className="relative z-10 p-8 sm:p-16 lg:p-24 max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                Founding Vision
              </div>
              <h2 className="text-5xl font-black text-white sm:text-7xl lg:text-8xl tracking-tight">Ram Prasath</h2>
              <p className="mt-4 text-xl font-bold text-white/40 uppercase tracking-widest flex items-center gap-4">
                Creative Director
                <span className="h-px w-12 bg-white/10" />
                Pixelix Founder
              </p>
              <p className="mt-10 text-lg leading-relaxed text-white/50 max-w-xl">
                A multidisciplinary creator specializing in the intersection of high-end cinematic visuals and strategic digital branding. Ram leads the studio with a commitment to technical precision and visual distinction.
              </p>
              <div className="mt-12">
                <Link to="/founder" className="neon-button px-10">
                  Enter Founder Portfolio <ArrowRight size={20} className="ml-2" />
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
              <p className="mt-4 text-white/60">Let's build something remarkable together. Contact our studio today.</p>
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
            <Stats />
            <Services />
            <OurWorks />
            <Reviews />
            <FounderSection />
            <About />
            <SEOContent />
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
