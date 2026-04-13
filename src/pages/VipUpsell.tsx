import { useState, FormEvent } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Shield, AlertTriangle, CreditCard, Lock } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

const VipUpsell = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const seatsParam = searchParams.get("seats");
  const seatsRemaining = seatsParam ? parseInt(seatsParam, 10) : 47;

  const [form, setForm] = useState({ name: "", email: "", card: "", expiry: "", cvv: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://webhook.placeholder.com/vip-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "vip_upsell" }),
      }).catch(() => {});
      navigate("/thank-you?vip=true");
    } catch {
      navigate("/thank-you?vip=true");
    }
  };

  const vipBenefits = [
    { text: "VIP-Only Live Session: Advanced Agent Workflows + Real Case Studies", value: "$497" },
    { text: "30-Day Access to Vibe Coding Incubator Community on Skool", value: "$97" },
    { text: "Nuno's Personal GoHighLevel + Manus AI Integration Blueprint", value: "$197" },
    { text: "Priority Q&A — Your questions answered FIRST each session", value: "$197" },
    { text: "Full Permanent Replay Library — All 3 Days", value: "$197" },
    { text: "3 Done-For-You Agent Templates — Ready to Deploy", value: "$297" },
    { text: "Post-Webinar Group Strategy Call Access", value: "$497" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Congratulations banner */}
      <section className="bg-primary">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 text-center">
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
            🎉 You're Registered! One More Thing Before You Go...
          </h1>
          <p className="mt-2 text-primary-foreground/80 font-body text-sm md:text-base">
            This offer only appears <strong>ONCE</strong> and disappears when you leave this page.
          </p>
        </div>
      </section>

      {/* Main offer */}
      <section className="bg-secondary">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center leading-tight">
            Upgrade to <span className="text-primary">VIP Access</span> — And Get Everything You Need to Implement Fast
          </h2>
          <p className="mt-4 text-brand-muted text-center text-base md:text-lg font-body max-w-3xl mx-auto">
            For just $97, unlock exclusive resources, priority access, and the full system Nuno uses
            with his private coaching clients.
          </p>

          {/* Scarcity + Timer */}
          <div className="mt-8 md:mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-2.5">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-heading font-semibold text-sm md:text-base">
                Only {seatsRemaining} of 50 VIP seats remaining
              </span>
            </div>

            <div className="text-center">
              <p className="text-brand-muted text-sm mb-3 font-heading uppercase tracking-wider">This offer expires in:</p>
              <CountdownTimer minutes={15} />
            </div>
          </div>

          {/* VIP Benefits */}
          <div className="mt-10 md:mt-14 max-w-3xl mx-auto space-y-3">
            {vipBenefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-3 bg-card border border-primary/10 rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 flex items-start justify-between gap-3">
                  <span className="text-foreground font-body">{benefit.text}</span>
                  <span className="text-brand-muted font-heading-alt text-sm whitespace-nowrap">({benefit.value} value)</span>
                </div>
              </div>
            ))}
          </div>

          {/* Value callout */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded-xl px-8 py-4">
              <p className="font-heading text-lg md:text-2xl font-bold text-foreground">
                Total VIP Value: <span className="text-primary">$1,979</span> — Get It All for Just{" "}
                <span className="text-primary text-2xl md:text-3xl">$97</span> Today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section className="bg-background">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-lg mx-auto">
            {/* Order summary */}
            <div className="bg-secondary border-2 border-primary/30 rounded-xl p-6 md:p-8 mb-6">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Order Summary</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground font-body">VIP Access — Manus AI 3-Day Live Challenge</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-brand-muted line-through font-heading text-lg">$297</span>
                <span className="text-primary font-heading font-bold text-2xl">$97</span>
                <span className="bg-primary/20 text-primary text-xs font-heading font-bold px-2 py-0.5 rounded">TODAY ONLY</span>
              </div>
              <p className="text-destructive text-xs mt-3 font-heading font-semibold">
                50 seats max — {seatsRemaining} remaining
              </p>
            </div>

            {/* Checkout form */}
            <form onSubmit={handleSubmit} className="bg-secondary border border-primary/20 rounded-xl p-6 md:p-8 space-y-4">
              <div>
                <label className="block text-sm text-brand-muted font-body mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-brand-muted font-body mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-brand-muted font-body mb-1.5 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" /> Card Number
                </label>
                <input
                  type="text"
                  value={form.card}
                  onChange={(e) => setForm((f) => ({ ...f, card: e.target.value }))}
                  className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                  placeholder="4242 4242 4242 4242"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-brand-muted font-body mb-1.5">Expiry</label>
                  <input
                    type="text"
                    value={form.expiry}
                    onChange={(e) => setForm((f) => ({ ...f, expiry: e.target.value }))}
                    className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-brand-muted font-body mb-1.5">CVV</label>
                  <input
                    type="text"
                    value={form.cvv}
                    onChange={(e) => setForm((f) => ({ ...f, cvv: e.target.value }))}
                    className="w-full bg-input border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-4 py-3 text-foreground font-body outline-none transition-colors"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-heading font-bold text-lg py-4 rounded-lg hover:brightness-110 transition-all animate-pulse-gold disabled:opacity-50 disabled:animate-none mt-2"
              >
                {submitting ? "Processing..." : "YES! UPGRADE MY ACCESS FOR $97 →"}
              </button>

              <p className="text-center text-brand-muted text-xs font-body flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Secure Checkout — Powered by Stripe | 30-Day Money-Back Guarantee
              </p>
            </form>

            {/* Guarantee */}
            <div className="mt-6 text-center">
              <p className="text-brand-muted text-sm font-body flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Not satisfied? Email us within 30 days and we'll refund every penny. No questions asked.
              </p>
            </div>

            {/* Decline */}
            <div className="mt-6 text-center">
              <Link
                to="/thank-you"
                className="text-brand-muted text-sm hover:text-foreground transition-colors underline underline-offset-4"
              >
                No thanks, I'll stick with free access and miss the VIP bonuses.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VipUpsell;
