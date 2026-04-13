import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Clock, Zap, Shield, Users, Award, BookOpen, Cpu, Rocket, Calendar } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import StickyHeader from "@/components/StickyHeader";
import GoldSeal from "@/components/GoldSeal";
import Footer from "@/components/Footer";

const WEBINAR_DATE = "2026-04-27T15:00:00-05:00";

const Index = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

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

  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />

      {/* SECTION 1 — HERO */}
      <section className="relative bg-secondary circuit-pattern overflow-hidden">
        <div className="absolute inset-0 gear-dots opacity-50" />
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Your First AI Agent in 3 Days —{" "}
                <span className="text-primary">No Coding Required</span>
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed">
                Join Nuno Tavares for a FREE live 3-day challenge where non-technical professionals
                discover how to use Manus AI to automate their business — starting April 27th at 3 PM CST.
              </p>

              <div className="mt-8 md:mt-10">
                <CountdownTimer targetDate={WEBINAR_DATE} />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground font-heading font-bold text-lg md:text-xl px-8 md:px-10 py-4 rounded-lg hover:brightness-110 transition-all animate-pulse-gold shadow-lg"
                >
                  CLAIM MY FREE SEAT →
                </button>
              </div>

              <p className="mt-4 text-destructive font-heading font-semibold text-sm md:text-base">
                ⚠️ Limited free seats available — Register now before they're gone
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 md:w-80 md:h-[400px] lg:w-[400px] lg:h-[500px] rounded-xl border-2 border-primary/30 bg-brand-surface flex items-center justify-center">
                <div className="text-center text-brand-muted">
                  <Cpu className="w-12 h-12 mx-auto mb-3 text-primary/40" />
                  <p className="text-sm font-heading">[NUNO_PHOTO]</p>
                  <p className="text-xs mt-1">400 × 500px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DREAM OUTCOME */}
      <section className="bg-card">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            What You'll Walk Away With After <span className="text-primary">3 Days</span>
          </h2>
          <p className="text-brand-muted text-center mt-4 text-base md:text-lg font-body max-w-2xl mx-auto">
            Stop doing manually what AI can do automatically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
            {[
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Your Own AI Agent",
                desc: "Running 24/7, handling tasks while you focus on growth. Your digital workforce never sleeps, never takes breaks.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Zero-Code Confidence",
                desc: "Proven step-by-step system anyone can follow. No programming background needed — just follow along with Nuno.",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Real Business Results",
                desc: "Applied directly to your niche by Day 3. Not theory — a working, deployed agent tailored to your business.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-2 border-primary/20 hover:border-primary/50 rounded-xl p-6 md:p-8 bg-secondary transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-brand-muted font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROOF & CREDIBILITY */}
      <section className="bg-background">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            Your Host: <span className="text-primary">Nuno Tavares</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-10 md:mt-14">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-primary/30 bg-brand-surface flex items-center justify-center">
                <div className="text-center text-brand-muted">
                  <Users className="w-10 h-10 mx-auto mb-2 text-primary/40" />
                  <p className="text-xs font-heading">[NUNO_CREDIBILITY_PHOTO]</p>
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

          {/* Social proof bar */}
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-secondary rounded-xl p-6 md:p-8 border border-primary/20">
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
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS */}
      <section className="bg-secondary circuit-pattern relative">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            Your 3-Day Roadmap to Your First <span className="text-primary">AI Agent</span>
          </h2>

          <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                day: 1,
                date: "April 27",
                title: "Introduction to Manus AI",
                desc: "Set up your first agent from scratch. Nuno walks you through the platform, the interface, and your first automated workflow.",
                icon: <BookOpen className="w-7 h-7" />,
              },
              {
                day: 2,
                date: "April 28",
                title: "Automate a Real Task",
                desc: "Build a workflow that runs on its own. Pick a real business process and watch it transform into an automated system.",
                icon: <Zap className="w-7 h-7" />,
              },
              {
                day: 3,
                date: "April 29",
                title: "Deploy, Test & Scale",
                desc: "Your agent goes live. Test it, refine it, and learn how to scale your automation across your business.",
                icon: <Rocket className="w-7 h-7" />,
              },
            ].map((step) => (
              <div key={step.day} className="relative">
                <div className="bg-card border border-primary/20 rounded-xl p-6 md:p-8 h-full hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                      {step.day}
                    </span>
                    <span className="text-primary font-heading-alt font-semibold text-sm uppercase tracking-wider">
                      Day {step.day} — {step.date}
                    </span>
                  </div>
                  <div className="text-primary mb-3">{step.icon}</div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-brand-muted font-body leading-relaxed">{step.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-brand-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>3:00 – 4:00 PM CST</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT'S INCLUDED */}
      <section className="bg-card">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            Everything You Get — <span className="text-primary">Completely FREE</span>
          </h2>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { item: "3 Live Build-Along Sessions with Nuno", value: "$891" },
              { item: "Daily Live Q&A", value: "$197" },
              { item: "48-Hour Replay Access", value: "$97" },
              { item: "Manus AI Quick-Start Prompt Library", value: "$97", bonus: true },
              { item: "Automated Marketer AI Agent Checklist", value: "$47", bonus: true },
            ].map((entry) => (
              <div
                key={entry.item}
                className="flex items-start gap-3 bg-secondary border border-primary/10 rounded-lg p-4 md:p-5"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-foreground font-body font-medium">
                      {entry.bonus && <span className="text-primary font-heading text-xs uppercase mr-2">Bonus</span>}
                      {entry.item}
                    </span>
                    <span className="text-brand-muted font-heading-alt text-sm whitespace-nowrap">
                      Value: {entry.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded-xl px-8 py-4">
              <p className="font-heading text-lg md:text-2xl font-bold text-foreground">
                Total Value: <span className="text-primary">$1,329</span> — Yours{" "}
                <span className="text-primary text-2xl md:text-3xl">FREE</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — GUARANTEE */}
      <section className="bg-secondary">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            The Manus AI <span className="text-primary">Action Guarantee</span>
          </h2>

          <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* SECTION 7 — REGISTRATION FORM */}
      <section id="registration-form" className="bg-background">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center">
            Reserve Your Free Seat Now — <span className="text-primary">Before They're Gone</span>
          </h2>
          <p className="text-destructive text-center mt-4 font-heading font-semibold text-sm md:text-base">
            Registration closes April 26 at midnight CST. VIP seats limited to 50.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 md:mt-14 max-w-lg mx-auto space-y-5 bg-secondary border border-primary/20 rounded-xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-brand-muted font-body mb-1.5">First Name *</label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                  className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                  placeholder="First name"
                />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm text-brand-muted font-body mb-1.5">Last Name *</label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                  className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                  placeholder="Last name"
                />
                {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm text-brand-muted font-body mb-1.5">Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm text-brand-muted font-body mb-1.5">Phone Number (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <input type="hidden" name="source" value="landing_page" />

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground font-heading font-bold text-lg py-4 rounded-lg hover:brightness-110 transition-all animate-pulse-gold disabled:opacity-50 disabled:animate-none"
            >
              {submitting ? "Registering..." : "YES! SAVE MY FREE SEAT →"}
            </button>

            <p className="text-center text-brand-muted text-xs font-body flex items-center justify-center gap-1.5">
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
