import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, Camera, Clapperboard, Mail, MapPin, Megaphone, Palette, Phone, Send, Share2, Sparkles, Users, Video } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "./styles.css";

const WHATSAPP_TEXT =
  "Hello%20Pixelix%20Media,%20I%20am%20interested%20in%20your%20services.%20Here%20are%20my%20details:%0AName:%0AEmail:%0AService:%0AMessage:";
const WHATSAPP_URL = `https://wa.me/919042041801?text=${WHATSAPP_TEXT}`;
const INTRO_STORAGE_KEY = "pixelixIntroSeenV2";

const services = [
  { title: "Digital Marketing", text: "Performance campaigns, lead funnels, and analytics-led growth systems.", icon: Megaphone },
  { title: "Branding", text: "Visual identity, positioning, and brand systems built to feel unmistakable.", icon: Palette },
  { title: "Social Media", text: "Content calendars, reels, campaign strategy, and community momentum.", icon: Share2 },
  { title: "Photography", text: "Product, corporate, event, and campaign photography across Chennai.", icon: Camera },
  { title: "Videography", text: "Brand films, reels, ad creatives, and cinematic production workflows.", icon: Video },
  { title: "Event Coverage", text: "Full-service photo and video coverage for launches, gatherings, and milestones.", icon: Clapperboard },
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

function IntroSplash({ onDone }) {
  const [visible, setVisible] = React.useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem(INTRO_STORAGE_KEY) !== "true";
  });
  const [exiting, setExiting] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (!visible) {
      onDone();
      return undefined;
    }

    const timer = window.setTimeout(() => finish(), 4600);
    videoRef.current?.play?.().catch(() => {});
    return () => window.clearTimeout(timer);
  }, [visible]);

  const finish = React.useCallback(() => {
    if (exiting) return;
    localStorage.setItem(INTRO_STORAGE_KEY, "true");
    setExiting(true);
    window.setTimeout(() => {
      setVisible(false);
      onDone();
    }, 650);
  }, [exiting, onDone]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#050506]"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
    >
      <motion.video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/logo-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        initial={{ scale: 1.06, filter: "brightness(0.85) saturate(1.1)" }}
        animate={{ scale: 1, filter: "brightness(1) saturate(1.18)" }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.08),transparent_34%),linear-gradient(120deg,rgba(5,5,8,0.78),rgba(5,5,8,0.28)_42%,rgba(10,2,22,0.82))]" />
      <div className="pixel-field opacity-25" />
      <button
        className="group absolute right-5 top-5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur transition hover:border-cyan-300/60 hover:text-white"
        onClick={finish}
        type="button"
      >
        Skip Intro
      </button>
      <motion.div
        className="absolute bottom-8 left-5 right-5 z-10 mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
      >
        <img className="h-16 w-auto max-w-[240px] object-contain sm:h-20 sm:max-w-[320px]" src="/logo.png" alt="Pixelix Media" />
        <div className="mt-5 h-px overflow-hidden rounded-full bg-white/12">
          <motion.span
            className="block h-full bg-gradient-to-r from-cyan-300 to-violet-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

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
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0D0D0D]/72 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#home" aria-label="Pixelix Media home">
          <img className="h-12 w-auto max-w-[190px] object-contain" src="/logo.png" alt="Pixelix Media" />
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          <a className="hover:text-white" href="#services">Services</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#faq">FAQ</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
        <a className="neon-button hidden sm:inline-flex" href="#contact">
          Get Started <ArrowRight size={17} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-20 grayscale brightness-50"
          src="/logo-intro.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/20 via-[#0D0D0D]/80 to-[#0D0D0D]" />
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.04] px-4 py-2 text-sm text-cyan-100 shadow-glow backdrop-blur-md">
            <Sparkles size={16} className="text-cyan-300 animate-pulse" />
            <span className="tracking-wide">Chennai's Premier Digital Agency</span>
          </div>
          <h1 className="max-w-4xl text-6xl font-black leading-[1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Elevating Brands <br />
            <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">In the Digital Era.</span>
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
          className="relative mx-auto w-full max-w-[560px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse" />
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl">
            <motion.img 
              className="mx-auto w-full max-w-[480px] object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]" 
              src="/logo.png" 
              alt="Pixelix Media logo"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="mt-10 grid grid-cols-3 gap-4">
              {["Strategy", "Creative", "Growth"].map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-5 text-center text-xs font-bold uppercase tracking-widest text-cyan-100/80 backdrop-blur-md"
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
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Core Services</p>
          <h2 className="section-title">Digital systems, brand stories, and production built under one roof.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <article className="service-card group">
                  <div className="icon-shell">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/64">{service.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
              className="h-72 w-full border-0 grayscale invert-[0.92] contrast-125"
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
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <img className="h-14 w-fit max-w-[220px] object-contain" src="/logo.png" alt="Pixelix Media" />
        <p className="text-sm text-white/50">Pixelix Media, Chennai. Digital marketing, branding, photography, videography, and event coverage.</p>
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

function App() {
  const [ready, setReady] = React.useState(() => typeof window !== "undefined" && localStorage.getItem(INTRO_STORAGE_KEY) === "true");

  return (
    <>
      <AnimatePresence>
        <IntroSplash onDone={() => setReady(true)} />
      </AnimatePresence>
      <main className={ready ? "site-ready" : "site-waiting"}>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <FAQ />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
