import { useState, useEffect, FormEvent, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle, Clock, Zap, Shield, Users, Award, BookOpen, Rocket,
  Calendar, AlertTriangle, ChevronLeft, ChevronRight, Quote,
} from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import StickyHeader from "@/components/StickyHeader";
import GoldSeal from "@/components/GoldSeal";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import VideoCard from "@/components/VideoCard";
import { useInView } from "@/hooks/use-in-view";

const WEBINAR_DATE = "2026-04-27T15:00:00-05:00";

const TESTIMONIALS = [
  {
    quote: "I deployed my first AI agent in just 2 days. It now handles all my lead follow-ups automatically — absolutely life-changing for my coaching business.",
    name: "Sarah M.",
    role: "Business Coach",
    initials: "SM",
  },
  {
    quote: "Nuno breaks everything down so simply. I had zero tech background and built a working agent by Day 2 that saves me 15 hours a week.",
    name: "James T.",
    role: "Real Estate Agent",
    initials: "JT",
  },
  {
    quote: "The ROI was immediate. My AI agent now books discovery calls while I sleep. This is the most valuable free training I've ever attended.",
    name: "Maria L.",
    role: "Marketing Consultant",
    initials: "ML",
  },
  {
    quote: "I was skeptical, but by Day 3 I had a fully working agent running on my website. Nuno's system is genuinely unlike anything else out there.",
    name: "David K.",
    role: "E-commerce Owner",
    initials: "DK",
  },
];

function RevealOnScroll({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const Index = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [slide, setSlide] = useState(0);

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("https://webhook.placeholder.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "landing_page" }),
      }).catch(() => {});
      navigate("/vip-upsell");
    } catch {
      navigate("/vip-upsell");
    }
  };

  const prevSlide = () => setSlide((s) => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextSlide = () => setSlide((s) => (s + 1) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ONE unified background — absolute so it spans full document height */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden gradient-dots-page">
        <div className="absolute rounded-full bg-primary/10 blur-[130px] pointer-events-none w-[280px] h-[280px] md:w-[500px] md:h-[500px]"
          style={{ left: "-8%", top: "10%", willChange: "transform", animation: "orb-drift-a 20s ease-in-out infinite" }} />
        <div className="absolute rounded-full bg-accent/[0.07] blur-[110px] pointer-events-none w-[240px] h-[240px] md:w-[440px] md:h-[440px]"
          style={{ right: "-8%", top: "35%", willChange: "transform", animation: "orb-drift-b 26s ease-in-out infinite" }} />
        <div className="absolute rounded-full bg-primary/[0.09] blur-[120px] pointer-events-none w-[260px] h-[260px] md:w-[460px] md:h-[460px]"
          style={{ left: "5%", top: "62%", willChange: "transform", animation: "orb-drift-a 23s ease-in-out infinite" }} />
        <div className="absolute rounded-full bg-brand-spindle/[0.06] blur-[100px] pointer-events-none w-[220px] h-[220px] md:w-[400px] md:h-[400px]"
          style={{ right: "0%", top: "82%", willChange: "transform", animation: "orb-drift-b 29s ease-in-out infinite" }} />
      </div>

      <StickyHeader />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">

            {/* Manus AI wordmark */}
            <div className="inline-flex items-center gap-1 hover:scale-105 transition-transform duration-300 glow-blue rounded-lg px-3 py-1.5 glass-subtle">
              <span className="font-heading-alt font-bold text-lg md:text-xl tracking-widest text-foreground">MANUS</span>
              <span className="font-heading-alt font-bold text-lg md:text-xl tracking-widest text-primary">AI</span>
            </div>

            <h1 className="mt-8 md:mt-10 font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-4xl">
              Build Your First AI Agent in 3 Days —{" "}
              <span className="text-primary">No Coding Required</span>
            </h1>

            {/* Hosted-by line */}
            <p className="mt-8 md:mt-10 text-muted-foreground font-body text-sm md:text-base uppercase tracking-widest">
              Hosted by
            </p>
            <p className="font-script text-[2.5rem] md:text-[3.5rem] leading-tight text-brand-spindle glow-script">
              Nuno Tavares
            </p>

            <p className="mt-8 md:mt-10 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl font-body leading-relaxed">
              A FREE live 3-day challenge where non-technical professionals discover how to use Manus AI
              to automate their business — starting April 27th at 3 PM CST.
            </p>

            {/* Video */}
            <div className="mt-8 md:mt-10 w-full">
              <VideoCard
                videoUrl="https://www.youtube.com/embed/iuk3oi-_3Wo?si=ZsWPGRo1lj32eb6L"
                className="w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="mt-8 md:mt-10">
              <CountdownTimer targetDate={WEBINAR_DATE} />
            </div>

            <div className="mt-8 md:mt-10">
              <button
                onClick={scrollToForm}
                className="bg-accent text-accent-foreground font-heading font-bold text-lg md:text-xl px-8 md:px-10 py-4 rounded-xl hover:scale-[1.03] hover:brightness-110 transition-all duration-300 animate-pulse-cta shadow-lg glow-red"
              >
                CLAIM MY FREE SEAT →
              </button>
            </div>

            <p className="mt-4 text-accent font-heading font-semibold text-sm md:text-base flex items-center gap-1.5 justify-center">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              Limited free seats available — Register now before they're gone
            </p>
          </div>
        </div>
      </section>

      {/* DREAM OUTCOME */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              What You'll Walk Away With After <span className="text-primary">3 Days</span>
            </h2>
            <p className="text-muted-foreground text-center mt-4 text-base md:text-lg font-body max-w-2xl mx-auto">
              Stop doing manually what AI can do automatically.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Your Own AI Agent",
                desc: "Running 24/7, handling tasks while you focus on growth. Your digital workforce never sleeps, never takes breaks.",
                delay: 0,
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Zero-Code Confidence",
                desc: "Proven step-by-step system anyone can follow. No programming background needed — just follow along with Nuno.",
                delay: 150,
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Real Business Results",
                desc: "Applied directly to your niche by Day 3. Not theory — a working, deployed agent tailored to your business.",
                delay: 300,
              },
            ].map((item) => (
              <RevealOnScroll key={item.title} delay={item.delay}>
                <TiltCard className="glass rounded-2xl p-6 md:p-8 group h-full">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF & CREDIBILITY */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              Your Host: <span className="text-primary">Nuno Tavares</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-12 md:mt-16">
              <div className="flex-shrink-0">
                <div className="w-64 shrink-0 overflow-hidden rounded-2xl border-2 border-primary/20 sm:w-72 md:w-80 glass">
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src="/nunito-suit.png"
                      alt="Nuno Tavares"
                      className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4">
                  {[
                    "25+ years of corporate leadership (Brinks, Bank of America, Capital One, Aramark)",
                    "HighLevel Certified Expert & 3x GHL SaaS Award Winner",
                    "Founder: Automated Marketer, Rapid Active Marketing, Vibe Coding Incubator",
                    "Taught hundreds of non-technical entrepreneurs to build AI-powered systems",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-body text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>

          {/* Social proof bar */}
          <RevealOnScroll delay={200}>
            <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 glass rounded-2xl p-6 md:p-8">
              {[
                { icon: <Users className="w-6 h-6" />, text: "500+ Students Trained" },
                { icon: <Award className="w-6 h-6" />, text: "3x Award Winner" },
                { icon: <Clock className="w-6 h-6" />, text: "25 Years Experience" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-foreground font-heading font-semibold text-base md:text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              What Past Attendees <span className="text-primary">Are Saying</span>
            </h2>
            <p className="text-muted-foreground text-center mt-4 text-base md:text-lg font-body max-w-2xl mx-auto">
              Real results from real people — no tech background required.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
              {/* Card */}
              <div className="glass-strong rounded-2xl p-8 md:p-10 relative min-h-[220px] flex flex-col justify-between">
                <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
                <p className="text-foreground font-body text-base md:text-xl leading-relaxed italic flex-1">
                  "{TESTIMONIALS[slide].quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm flex-shrink-0">
                    {TESTIMONIALS[slide].initials}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{TESTIMONIALS[slide].name}</p>
                    <p className="text-muted-foreground text-sm font-body">{TESTIMONIALS[slide].role}</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === slide ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              Your 3-Day Roadmap to Your First <span className="text-primary">AI Agent</span>
            </h2>
          </RevealOnScroll>

          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                day: 1, date: "April 27", title: "Introduction to Manus AI",
                desc: "Set up your first agent from scratch. Nuno walks you through the platform, the interface, and your first automated workflow.",
                icon: <BookOpen className="w-7 h-7" />,
                delay: 0,
              },
              {
                day: 2, date: "April 28", title: "Automate a Real Task",
                desc: "Build a workflow that runs on its own. Pick a real business process and watch it transform into an automated system.",
                icon: <Zap className="w-7 h-7" />,
                delay: 150,
              },
              {
                day: 3, date: "April 29", title: "Deploy, Test & Scale",
                desc: "Your agent goes live. Test it, refine it, and learn how to scale your automation across your business.",
                icon: <Rocket className="w-7 h-7" />,
                delay: 300,
              },
            ].map((step) => (
              <RevealOnScroll key={step.day} delay={step.delay}>
                <TiltCard className="glass rounded-2xl p-6 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {step.day}
                    </span>
                    <span className="text-brand-spindle font-heading-alt font-semibold text-sm uppercase tracking-wider">
                      Day {step.day} — {step.date}
                    </span>
                  </div>
                  <div className="text-primary mb-3">{step.icon}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>3:00 – 4:00 PM CST</span>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              Everything You Get — <span className="text-primary">Completely FREE</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
              {[
                { item: "3 Live Build-Along Sessions with Nuno", value: "$891" },
                { item: "Daily Live Q&A", value: "$197" },
                { item: "48-Hour Replay Access", value: "$97" },
                { item: "Manus AI Quick-Start Prompt Library", value: "$97", bonus: true },
                { item: "Automated Marketer AI Agent Checklist", value: "$47", bonus: true },
              ].map((entry) => (
                <div
                  key={entry.item}
                  className="flex items-start gap-3 glass rounded-xl p-4 md:p-5 hover:scale-[1.01] transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-foreground font-body font-medium">
                        {entry.bonus && <span className="text-primary font-heading text-xs uppercase mr-2">Bonus</span>}
                        {entry.item}
                      </span>
                      <span className="text-muted-foreground font-heading-alt text-sm whitespace-nowrap">
                        Value: {entry.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <div className="inline-block glass rounded-2xl px-8 py-5 border-primary/20">
                <p className="font-heading text-lg md:text-2xl font-bold text-foreground">
                  Total Value: <span className="text-primary">$1,329</span> — Yours{" "}
                  <span className="text-accent text-2xl md:text-3xl font-bold">FREE</span>
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              The Manus AI <span className="text-primary">Action Guarantee</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto glass rounded-2xl p-8 md:p-10">
              <div className="flex-shrink-0">
                <GoldSeal text="100% Guaranteed" size="lg" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
                  Attend all 3 days, follow along with Nuno, and if you don't have your first AI Agent running
                  by Day 3 — email us within 24 hours and we will personally schedule a private follow-up
                  coaching session at no charge.
                </p>
                <p className="mt-4 text-primary font-heading font-bold text-lg md:text-xl">
                  Zero risk. All results.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="registration-form" className="relative">
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-28">
          <RevealOnScroll>
            <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
              Reserve Your Free Seat Now — <span className="text-primary">Before They're Gone</span>
            </h2>
            <p className="text-accent text-center mt-4 font-heading font-semibold text-sm md:text-base">
              Registration closes April 26 at midnight CST. VIP seats limited to 50.
            </p>
          </RevealOnScroll>

          <form
            onSubmit={handleSubmit}
            className="mt-12 md:mt-16 max-w-lg mx-auto space-y-5 glass-strong rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground font-body mb-1.5">First Name *</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                  className="w-full bg-input/50 border border-brand-silver/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-foreground font-body outline-none transition-all duration-300"
                  placeholder="First name"
                />
                {errors.firstName && <p className="text-accent text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm text-muted-foreground font-body mb-1.5">Last Name *</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                  className="w-full bg-input/50 border border-brand-silver/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-foreground font-body outline-none transition-all duration-300"
                  placeholder="Last name"
                />
                {errors.lastName && <p className="text-accent text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm text-muted-foreground font-body mb-1.5">Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full bg-input/50 border border-brand-silver/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-foreground font-body outline-none transition-all duration-300"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-accent text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm text-muted-foreground font-body mb-1.5">Phone Number (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full bg-input/50 border border-brand-silver/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-foreground font-body outline-none transition-all duration-300"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <input type="hidden" name="source" value="landing_page" />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-accent-foreground font-heading font-bold text-lg py-4 rounded-xl hover:scale-[1.02] hover:brightness-110 transition-all duration-300 animate-pulse-cta disabled:opacity-50 disabled:animate-none glow-red"
            >
              {submitting ? "Registering..." : "YES! SAVE MY FREE SEAT →"}
            </button>

            <p className="text-center text-muted-foreground text-xs font-body flex items-center justify-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Your information is 100% secure. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
