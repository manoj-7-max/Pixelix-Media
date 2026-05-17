import React from "react";
import ReactDOM from "react-dom/client";
import { 
  ArrowRight, Camera, Video, Palette, BarChart3, Target, Share2, Globe, FileText, 
  Mail, Phone, Instagram, Star, Sparkles, LayoutGrid, Zap, ShieldCheck, 
  ChevronRight, Play, Award, Heart, Megaphone, Users, Newspaper, PenTool, Link as LinkIcon
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";

const WHATSAPP_URL = "https://wa.me/919042041801";
const INSTAGRAM_URL = "https://www.instagram.com/pixelix_media";

const services = [
  { 
    id: "professional-photoshoot", 
    title: "Professional Photoshoot", 
    text: "Visual excellence that commands market authority through high-end imagery.", 
    icon: Camera,
    color: "from-blue-500 to-indigo-600",
    size: "large",
    longDescription: "Elevate your brand with world-class photography. We specialize in capturing the essence of your business, from executive portraits to industrial landscapes, ensuring every frame projects authority and professional distinction.",
    features: ["Executive Portraits", "Industrial Photography", "Product Catalogs", "Fashion Editorials"]
  },
  { 
    id: "cinematic-videography", 
    title: "Cinematic Videography", 
    text: "High-impact video storytelling for modern brands and corporate narratives.", 
    icon: Video,
    color: "from-purple-500 to-pink-600",
    size: "medium",
    longDescription: "Transforming raw concepts into polished cinematic experiences. We specialize in high-production value videography, from viral social media assets to comprehensive brand documentaries that drive deep engagement and conversion.",
    features: ["Brand Films", "Social Reels", "Corporate Documentaries", "Product Launch Videos"]
  },
  { 
    id: "branding", 
    title: "Branding", 
    text: "Forging unmistakable identities through deep research and design systems.", 
    icon: Palette,
    color: "from-emerald-500 to-teal-600",
    size: "medium",
    longDescription: "Your brand is your most valuable asset. We craft cohesive visual identities and strategic brand systems that build trust and distinction in competitive landscapes, ensuring long-term recognition and authority.",
    features: ["Visual Identity", "Design Systems", "Brand Strategy", "Market Positioning"]
  },
  { 
    id: "ad-shooting", 
    title: "Ad Shooting", 
    text: "Commercial video production optimized for maximum ad conversions.", 
    icon: Play,
    color: "from-red-500 to-rose-600",
    size: "small",
    longDescription: "Maximize your campaign reach with precision-targeted ad shoots. We produce visually compelling commercial content designed specifically for high conversion rates on digital and broadcast platforms.",
    features: ["Commercials", "Social Ads", "Product Spots", "Campaign Videos"]
  },
  { 
    id: "social-media-management", 
    title: "Social Media Management", 
    text: "Building loyal brand communities through strategic content and engagement.", 
    icon: Share2,
    color: "from-blue-600 to-indigo-400",
    size: "medium",
    longDescription: "We turn social channels into brand assets. By combining trend-aware creative with strategic distribution, we build loyal communities and expand your brand's voice across the digital landscape.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Engagement Growth"]
  },
  { 
    id: "seo-automation", 
    title: "SEO Automation", 
    text: "Data-driven search optimization strategies to dominate search engine results.", 
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    size: "medium",
    longDescription: "Establish market leadership through automated, data-backed SEO. We ensure your brand remains at the forefront of modern search and AI engines with continuous technical and content optimization.",
    features: ["Technical SEO", "Keyword Automation", "Backlink Strategy", "Performance Tracking"]
  },
  { 
    id: "lead-generating", 
    title: "Lead Generating", 
    text: "High-performance systems built to capture and convert targeted prospects.", 
    icon: Target,
    color: "from-orange-500 to-red-600",
    size: "small",
    longDescription: "We engineer growth by building robust lead generation pipelines. Using a mix of targeted outreach and optimized conversion funnels, we deliver high-quality prospects directly to your sales team.",
    features: ["Funnel Optimization", "B2B Outreach", "Conversion Tracking", "Lead Nurturing"]
  },
  { 
    id: "designing", 
    title: "Designing", 
    text: "Comprehensive design solutions tailored to your business needs.", 
    icon: LayoutGrid,
    color: "from-violet-500 to-purple-600",
    size: "small",
    longDescription: "End-to-end design services that communicate your brand's unique value. From marketing collateral to digital assets, we provide cohesive and stunning designs that engage your audience.",
    features: ["Digital Assets", "Print Media", "Presentation Design", "Marketing Collateral"]
  },
  { 
    id: "editing", 
    title: "Editing", 
    text: "Professional post-production for flawless visual and audio content.", 
    icon: Video,
    color: "from-fuchsia-500 to-pink-600",
    size: "small",
    longDescription: "Refining your raw content into masterpieces. Our post-production team specializes in precise video editing, color grading, and audio mastering to ensure a polished final product.",
    features: ["Video Editing", "Color Grading", "Audio Mixing", "VFX & Motion Graphics"]
  },
  { 
    id: "graphic-design", 
    title: "Graphic Design", 
    text: "Striking visual communication that captures attention and conveys your message.", 
    icon: PenTool,
    color: "from-emerald-400 to-green-600",
    size: "medium",
    longDescription: "Transform ideas into compelling visuals. Our graphic design services create powerful imagery that aligns with your brand identity and leaves a lasting impression on your target audience.",
    features: ["Typography", "Illustration", "Brand Assets", "Vector Graphics"]
  },
  { 
    id: "ui-ux-design", 
    title: "UI/UX Design", 
    text: "Intuitive digital experiences crafted for optimal user engagement.", 
    icon: Globe,
    color: "from-blue-400 to-indigo-500",
    size: "medium",
    longDescription: "We build user-centric digital interfaces that merge seamless functionality with stunning aesthetics. Our UX/UI processes are designed to maximize usability and drive conversion.",
    features: ["Wireframing", "Prototyping", "User Research", "Interface Design"]
  }
];

const reviews = [
  { name: "Anjali Sharma", role: "CEO, Bloom Fashion", text: "Pixelix transformed our brand's presence completely." },
  { name: "Rahul Kumar", role: "VP, TechNova", text: "The most professional team in the industry." }
];

const ourWorks = [
  { src: "/portfolio/IMG_6010.JPG.jpeg", category: "Brand Shoot" },
  { src: "/portfolio/IMG_5955.JPG.jpeg", category: "Cinematic Reel" },
  { src: "/portfolio/IMG_5984.JPG.jpeg", category: "Portrait" },
  { src: "/portfolio/IMG_6000.JPG.jpeg", category: "Commercial" }
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <nav className="bento-tile !rounded-full !px-8 !py-4 flex items-center justify-between backdrop-blur-xl border-white/10 bg-black/40">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" className="h-8 w-auto" alt="Pixelix" />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-white/50">
          <a href="#services" className="hover:text-white transition-colors">Expertise</a>
          <a href="#work" className="hover:text-white transition-colors">Showcase</a>
          <a href="#about" className="hover:text-white transition-colors">Studio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href={WHATSAPP_URL} className="btn-primary !py-2 !px-6 !text-[10px] uppercase tracking-widest">
          Consult
        </a>
      </nav>
    </header>
  );
}

function HeroBento() {
  return (
    <section className="pt-32 pb-12 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6">
        {/* Main Hero Tile */}
        <div className="bento-tile md:col-span-3 md:row-span-2 p-10 lg:p-16 flex flex-col justify-end min-h-[500px] overflow-hidden">
          {/* Dynamic Abstract Visuals */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Animated Gradient Mesh */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[50%] h-[200%] w-[200%] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"
              style={{ backgroundPosition: '20% 30%, 80% 70%' }}
            />
            
            {/* Floating Wireframe Visuals */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="grid grid-cols-8 gap-4 w-full h-full p-10">
                {[...Array(32)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: Math.random() * 5 + 2, repeat: Infinity, delay: Math.random() * 2 }}
                    className="h-px w-full bg-blue-500/30"
                  />
                ))}
              </div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 bg-purple-500/20 blur-[120px] rounded-full animate-pulse-slow" />
            
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="eyebrow mb-6"
            >
              Pixelix Media Studio
            </motion.div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              CRAFTING <br/> <span className="accent-gradient">DISTINCTION.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/40 max-w-xl mb-10 leading-relaxed">
              We engineer cinematic brand identities and high-performance digital ecosystems for leaders who demand visual authority.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="btn-primary">View Productions</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>

        {/* Award Tile */}
        <div className="bento-tile p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white/5 to-white/[0.02]">
          <Award size={48} className="text-accent mb-4 animate-float" />
          <h3 className="text-2xl font-black">TOP RATED</h3>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Creative Studio 2024</p>
        </div>

        {/* Stats Tile */}
        <div className="bento-tile p-8 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col gap-6 w-full">
            <div>
              <p className="text-4xl font-black">50+</p>
              <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Projects</p>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div>
              <p className="text-4xl font-black">30+</p>
              <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBento() {
  return (
    <section id="services" className="py-12 px-5 sm:px-10 max-w-7xl mx-auto">
      <Reveal className="mb-12">
        <h2 className="text-4xl font-black tracking-tight">Our <span className="text-white/40">Expertise.</span></h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.1} className={s.size === "large" ? "md:col-span-2" : "md:col-span-1"}>
            <Link to={`/services/${s.id}`} className="bento-tile group block p-10 min-h-[320px] relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="h-16 w-16 rounded-3xl bg-white/5 flex items-center justify-center text-white/80 border border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <s.icon size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4">{s.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{s.text}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PortfolioBento() {
  return (
    <section id="work" className="py-12 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="bento-tile p-0 h-[500px] relative">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-center bg-black/40 backdrop-blur-[2px]">
          <h2 className="text-6xl font-black tracking-tighter">THE <br/> SHOWCASE.</h2>
          <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-accent font-black">Industrial Grade Visuals</p>
        </div>
        <div className="bento-marquee h-full">
          {[...ourWorks, ...ourWorks].map((work, i) => (
            <div key={i} className="h-full w-[400px] flex-shrink-0 border-r border-white/5 relative overflow-hidden group">
              <img src={work.src} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white font-bold uppercase tracking-widest text-xs">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutBento() {
  return (
    <section id="about" className="py-12 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bento-tile p-12 flex flex-col justify-center">
          <p className="eyebrow mb-6">The Studio</p>
          <h2 className="text-5xl font-black leading-tight mb-8">Design should convert, <br/> Strategy should scale.</h2>
          <p className="text-lg text-white/40 leading-relaxed">
            Pixelix Media is a creative engineering studio. We operate at the intersection of high-end cinematic visuals and data-driven marketing architecture. 
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {[
            { icon: Zap, label: "Fast Build" },
            { icon: ShieldCheck, label: "Secure" },
            { icon: Heart, label: "Loyal" },
            { icon: LayoutGrid, label: "Modular" }
          ].map((item, i) => (
            <div key={i} className="bento-tile p-6 flex flex-col items-center justify-center text-center">
              <item.icon size={24} className="text-primary mb-3" />
              <p className="text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBento() {
  return (
    <section id="contact" className="py-24 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="bento-tile p-16 lg:p-24 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 text-center relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-64 w-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-purple-500/20 blur-[100px] rounded-full" />
        
        <Reveal>
          <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-10">READY TO <br/> <span className="text-white/40">EVOLVE?</span></h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed">
            We are currently accepting new strategic partnerships. Let's discuss how we can elevate your brand's digital presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={`mailto:pixelixmedia19@gmail.com`} className="btn-primary !text-lg !px-12">Send a Brief</a>
            <a href={WHATSAPP_URL} className="btn-secondary !text-lg !px-12">WhatsApp Now</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-5 sm:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <img src="/logo.png" className="h-10 w-auto opacity-40" alt="Pixelix" />
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
          © 2024 Pixelix Media Studio
        </p>
      </div>
    </footer>
  );
}

function ServicePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) return <div className="p-20 text-white">Not Found</div>;

  return (
    <div className="min-h-screen bg-[#050507] pt-40 pb-24 px-5">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate("/")} className="mb-12 flex items-center gap-2 text-white/40 hover:text-white uppercase tracking-widest text-[10px] font-bold">
          <ChevronRight className="rotate-180" size={14} /> Back to Studio
        </button>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bento-tile p-12 lg:p-20 flex flex-col justify-center">
            <div className={`h-20 w-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-10`}>
              <service.icon size={40} />
            </div>
            <h1 className="text-6xl font-black mb-8 leading-tight">{service.title}</h1>
            <p className="text-2xl text-white/40 leading-relaxed mb-12">{service.longDescription || service.text}</p>
            <div className="flex gap-4">
              <a href={WHATSAPP_URL} className="btn-primary">Start Strategy</a>
            </div>
          </div>
          <div className="space-y-6">
            {(service.features || [1, 2, 3]).map((feature, i) => (
              <div key={i} className="bento-tile p-8 flex items-start gap-6">
                <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{typeof feature === 'string' ? feature : `Phase ${feature}: Engineering`}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">High-precision execution tailored for your brand's growth and visual authority.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
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
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory bg-[#050507]">
      {pages.map((page, index) => (
        <section key={index} className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center">
          <img src={page.src} alt={page.alt} className="h-full w-full object-contain md:object-cover" />
          {page.showScroll && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">Scroll</span>
              <div className="h-12 w-px bg-white/20" />
            </div>
          )}
        </section>
      ))}
      <Link to="/" className="fixed top-8 left-8 z-[100] btn-secondary !py-2 !px-5 !text-[10px] backdrop-blur-xl">
        ← Exit Portfolio
      </Link>
    </div>
  );
}

function FounderSection() {
  return (
    <section id="founder" className="py-12 px-5 sm:px-10 max-w-7xl mx-auto">
      <div className="bento-tile grid md:grid-cols-2 gap-0 overflow-hidden min-h-[500px]">
        <div className="p-12 lg:p-20 flex flex-col justify-center relative z-10">
          <p className="eyebrow mb-6">Founder</p>
          <h2 className="text-5xl font-black mb-8 leading-tight">Ram Prasath</h2>
          <p className="text-lg text-white/40 leading-relaxed mb-10">
            A visionary creator specializing in cinematic visuals and strategic branding. Ram leads Pixelix with a focus on technical precision and visual distinction.
          </p>
          <div className="flex">
            <Link to="/founder" className="btn-primary">Enter Portfolio <ChevronRight size={18} /></Link>
          </div>
        </div>
        <div className="relative h-full min-h-[400px]">
          <img src="/founder/founder_hero.png" className="absolute inset-0 h-full w-full object-cover" alt="Ram Prasath" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden block" />
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] pt-40 pb-24 px-5">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="mb-12 inline-flex items-center gap-2 text-white/40 hover:text-white uppercase tracking-widest text-[10px] font-bold">
          <ChevronRight className="rotate-180" size={14} /> Back to Studio
        </Link>
        <div className="bento-tile p-10 sm:p-16">
          <h1 className="text-5xl font-black mb-10">Privacy Policy</h1>
          <div className="space-y-8 text-white/60 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Data Collection</h2>
              <p>At Pixelix Media, we collect minimal personal data necessary to provide our services. This includes contact information provided via our enquiry forms or WhatsApp interaction.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Usage of Information</h2>
              <p>The information collected is used solely for client communication, project management, and improving our creative services. We do not sell or share your data with third-party marketing entities.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Visual Assets</h2>
              <p>As a media agency, visual content produced during our partnerships may be used in our portfolio unless otherwise agreed upon in a signed non-disclosure agreement (NDA).</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Cookies</h2>
              <p>Our website uses basic cookies to enhance user experience and analyze traffic patterns via standard web analytics tools.</p>
            </section>
            <p className="pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest">Last Updated: May 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#050507] min-h-screen no-scrollbar">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroBento />
            <ServiceBento />
            <PortfolioBento />
            <FounderSection />
            <AboutBento />
            <ContactBento />
            <Footer />
          </>
        } />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/founder" element={<FounderPortfolio />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
