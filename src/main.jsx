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
    text: "High-end brand portraits and commercial photography for businesses in Tamil Nadu.", 
    icon: Camera,
    longDescription: "As a premier digital marketing agency, we provide professional photoshoot services for brands, products, and individuals. Our high-end equipment and lighting setup ensure cinematic quality in every shot. We specialize in commercial photography that captures your brand's essence, helping you stand out in a competitive market. Whether you need corporate headshots, product catalogs, or fashion editorials, our Chennai studio delivers world-class results. Our team of experienced photographers understands market trends, ensuring your visuals resonate with your target audience. We use state-of-the-art retouching techniques to ensure every image is pixel-perfect and ready for high-end marketing campaigns.",
    features: ["Brand Portraits", "Product Photography", "Commercial Shoots", "Fashion Photography"]
  },
  { 
    id: "cinematic-videography", 
    title: "Cinematic Videography", 
    text: "Story-driven film production and brand commercials for ambitious startups.", 
    icon: Clapperboard,
    longDescription: "Transform your brand's narrative with cinematic videography. We specialize in high-end production, from raw concepts to polished film stories that resonate with your local and global audience. Our video production services are designed for maximum impact, combining technical expertise with creative storytelling. We produce everything from 15-second social media reels to full-scale brand documentaries for businesses in Tamil Nadu. As a premier videography company in Chennai, we focus on high-production value that drives engagement and conversions. Our process includes detailed pre-production planning, professional cinematography, and expert post-production to ensure your brand story is told effectively across all digital platforms.",
    features: ["Brand Films", "Commercial Ads", "Event Highlights", "Social Media Reels"]
  },
  { 
    id: "branding", 
    title: "Branding & Identity", 
    text: "Visual identity and positioning that makes your brand unmistakable.", 
    icon: Palette,
    longDescription: "Pixelix Media is a premier branding agency in Chennai. Your brand is your promise to your customers. We craft visual identities that command attention and build trust through deep research, typography, and color psychology tailored for your audience. Our comprehensive branding services include logo design, brand strategy, design systems, and packaging. We help startups and established companies redefine their market position. By understanding cultural nuances and broader market trends, we create brand experiences that are both authentic and globally relevant. Our goal is to make your business unmistakable and highly memorable through strategic creative direction.",
    features: ["Logo & Visual Identity", "Brand Strategy", "Design Systems", "Packaging Design"]
  },
  { 
    id: "digital-marketing", 
    title: "Digital Marketing Strategy", 
    text: "Data-driven strategies to amplify your brand's digital presence.", 
    icon: Megaphone,
    longDescription: "We are a leading digital marketing agency in Chennai, crafting comprehensive digital marketing roadmaps that turn browsers into buyers. Our approach combines SEO, performance analytics, and growth hacking to help businesses scale effectively. We focus on measurable results, ensuring your marketing budget is utilized to its full potential. From search engine optimization to email marketing, we cover all aspects of the digital landscape. Our team of experts stays ahead of the latest algorithm updates and market trends to keep your brand at the top of search results. We believe in transparency and data-driven decision-making, providing regular reports that show the real impact of our marketing efforts on your business growth.",
    features: ["SEO Optimization", "Analytics & Reporting", "Growth Hacking", "Email Marketing"]
  },
  { 
    id: "paid-marketing", 
    title: "Performance Marketing", 
    text: "High-ROI ad campaigns across search and social platforms for rapid growth.", 
    icon: Target,
    longDescription: "Maximize your reach with precision-targeted paid campaigns and Google Ads. We manage your ad spend across Google and Meta to deliver measurable ROI for businesses across Tamil Nadu. Our performance marketing strategies focus on lead generation and sales conversion. We perform deep keyword research and audience segmentation to ensure your ads reach the right people at the right time. As a specialized performance agency in Chennai, we optimize your campaigns daily to lower acquisition costs and increase lifetime value. Whether you are looking for local foot traffic or global e-commerce sales, our paid marketing experts design funnels that convert.",
    features: ["Google Ads (SEM)", "Meta Ads", "Retargeting", "Lead Gen Funnels"]
  },
  { 
    id: "social-media", 
    title: "Social Media Management", 
    text: "Content calendars and community management that drive momentum for your brand.", 
    icon: Share2,
    longDescription: "We turn social feeds into brand assets with expert social media marketing. By combining trend-aware content with strategic posting, we build loyal communities for your brand across India. Our social media experts manage your presence on Instagram, LinkedIn, and Facebook, ensuring consistent brand voice and high engagement. We create content that people want to share, from viral reels to informative carousels. As a top social media agency in Chennai, we understand the power of community. We don't just post; we engage with your audience, handling comments and messages to build real relationships. Our influencer marketing strategies connect your brand with the right voices to expand your reach and credibility.",
    features: ["Content Creation", "Community Management", "Influencer Strategy", "Social Ads"]
  },
  { 
    id: "traditional-marketing", 
    title: "Traditional Marketing", 
    text: "Offline branding and marketing for real-world impact.", 
    icon: Newspaper,
    longDescription: "Bridge the gap between digital and physical media with our traditional marketing services. We help businesses create high-impact strategies from print media to outdoor advertising. Our team understands the importance of a physical presence in the market. We design eye-catching billboards, newspaper ads, and direct mail campaigns that complement your digital efforts. Traditional marketing remains a powerful tool for brand building, and we ensure your offline message is perfectly aligned with your online identity. We also manage event sponsorships and BTL activities that put your brand directly in front of your target audience in the real world.",
    features: ["Print Media", "Outdoor Ads", "Event Sponsorships", "Direct Mail"]
  },
  { 
    id: "content-marketing", 
    title: "Content Marketing", 
    text: "Storytelling that builds authority and engages your audience.", 
    icon: PenTool,
    longDescription: "Value-driven content that attracts and retains your target audience. We build long-term brand authority through strategic storytelling and content marketing services. Our content strategy includes blog creation, e-book production, and newsletter management. We focus on SEO copywriting that ranks on Google while providing genuine value to your readers. As a leading content agency in Chennai, we help you become a thought leader in your industry. By producing high-quality, relevant content, we help you build a loyal audience that trusts your expertise. Our team ensures that every piece of content is optimized for modern search engines, making your brand the top choice for AI search results.",
    features: ["Blog Creation", "E-books", "Newsletter Strategy", "SEO Copywriting"]
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
  { label: "Years Experience", value: "5+" }
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
            <span className="tracking-widest uppercase">Premier Digital Agency</span>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Digital Marketing Agency <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">for Modern Brands.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Pixelix Media is a leading creative studio in Chennai helping businesses grow through high-end SEO, web development, branding, and social media marketing. We partner with ambitious startups to build a strong online presence and drive results.
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
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Our Expertise</p>
          <h2 className="text-3xl font-black text-white sm:text-5xl lg:text-6xl leading-[1.2]">Premium Website Development, Branding, and Media Production.</h2>
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
              Pixelix Media is a leading <Link to="/" className="text-cyan-400 hover:underline">digital marketing agency</Link> and a premier <Link to="/" className="text-cyan-400 hover:underline">SEO company</Link> based in Chennai, Tamil Nadu. Our studio is built on the core belief that modern brands need a seamless fusion of strategic thinking and high-end media production. We don't just provide services; we build digital ecosystems that thrive in the competitive marketplace.
            </p>
            <p>
              Our creative studio helps businesses turn raw ideas into sharp marketing campaigns, memorable visuals, and high-converting digital experiences. As a trusted <Link to="/" className="text-cyan-400 hover:underline">web design agency</Link>, we focus on architectural excellence and performance-first engineering. We understand that your website is your digital storefront, and it must be built to convert visitors into loyal customers.
            </p>
            <p>
              Serving startups and established businesses, our mission is to give growing brands a premium creative partner for <Link to="/" className="text-cyan-400 hover:underline">SEO services</Link>, <Link to="/" className="text-cyan-400 hover:underline">branding</Link> expertise, and <Link to="/" className="text-cyan-400 hover:underline">website development</Link>. We combine market insights with global design standards to ensure your brand stands out everywhere. Trusted by businesses across Tamil Nadu, we are dedicated to driving measurable growth for all our clients.
            </p>
            <p>
              Why is digital marketing important? In the digital era, your online presence defines your credibility. Pixelix Media helps you bridge the gap between your brand and your audience through data-driven performance marketing, expert social media management, and cinematic storytelling. Whether you need Google Ads or a complete brand overhaul, we have the technical skills and creative vision to deliver results.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="relative py-24 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mx-auto">Customer Reviews</h2>
          <p className="mt-6 text-lg text-white/60 mx-auto max-w-2xl">
            Don't just take our word for it. Here is what our clients have to say about their experience with Pixelix Media.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-panel h-full flex flex-col justify-between group hover:border-cyan-400/50 transition-colors">
                <div>
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    {[...Array(review.stars)].map((_, i) => (
                      <Sparkles key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed italic">"{review.text}"</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-white font-bold">{review.name}</p>
                  <p className="text-xs text-cyan-400/80 uppercase tracking-widest mt-1">{review.role}</p>
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
                <summary>
                  <h3 className="inline text-inherit font-bold">{faq.question}</h3>
                </summary>
                <p className="mt-4 text-white/60 leading-relaxed">{faq.answer}</p>
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
                A visionary creator specializing in high-end cinematic visuals and digital branding. From raw concepts to polished brand stories, Ram leads the creative vision at Pixelix Media.
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
