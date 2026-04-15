import { useSearchParams } from "react-router-dom";
import { CheckCircle, AlertTriangle, PartyPopper } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

const VipUpsell = () => {
  const [searchParams] = useSearchParams();
  const seatsParam = searchParams.get("seats");
  const seatsRemaining = seatsParam ? parseInt(seatsParam, 10) : 47;
  const email = searchParams.get("email") ?? "";

  // Append email as a pre-fill param so GHL links this submission to the same contact
  const vipFormSrc = email
    ? `https://api.leadconnectorhq.com/widget/form/1GSHXSK9YYJSOdoaJy3k?email=${encodeURIComponent(email)}`
    : "https://api.leadconnectorhq.com/widget/form/1GSHXSK9YYJSOdoaJy3k";

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
    <div className="relative min-h-screen">
      <div aria-hidden className="absolute inset-0 -z-10 gradient-dots-page" />
      {/* Congratulations banner */}
      <section className="bg-accent">
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 text-center">
          <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground">
            <PartyPopper className="w-7 h-7 inline mr-2 text-accent-foreground" /> You're Registered! One More Thing Before You Go...
          </h1>
          <p className="mt-2 text-accent-foreground/80 font-body text-sm md:text-base">
            This offer only appears <strong>ONCE</strong> and disappears when you leave this page.
          </p>
        </div>
      </section>

      {/* Main offer */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground text-center leading-tight">
            Upgrade to <span className="text-primary">VIP Access</span> — And Get Everything You Need to Implement Fast
          </h2>
          <p className="mt-4 text-muted-foreground text-center text-base md:text-lg font-body max-w-3xl mx-auto">
            For just $97, unlock exclusive resources, priority access, and the full system Nuno uses
            with his private coaching clients.
          </p>

          {/* Scarcity + Timer */}
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 glass rounded-xl px-5 py-3 border-accent/30">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <span className="text-accent font-heading font-semibold text-sm md:text-base">
                Only {seatsRemaining} of 50 VIP seats remaining
              </span>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-3 font-heading uppercase tracking-wider">This offer expires in:</p>
              <CountdownTimer minutes={15} />
            </div>
          </div>

          {/* VIP Benefits */}
          <div className="mt-12 md:mt-16 max-w-3xl mx-auto space-y-3">
            {vipBenefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-start gap-3 glass rounded-xl p-4 hover:scale-[1.01] transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 flex items-start justify-between gap-3">
                  <span className="text-foreground font-body">{benefit.text}</span>
                  <span className="text-muted-foreground font-heading-alt text-sm whitespace-nowrap">({benefit.value} value)</span>
                </div>
              </div>
            ))}
          </div>

          {/* Value callout */}
          <div className="mt-10 text-center">
            <div className="inline-block glass rounded-2xl px-8 py-5 border-primary/30">
              <p className="font-heading text-lg md:text-2xl font-bold text-foreground">
                Total VIP Value: <span className="text-primary">$1,979</span> — Get It All for Just{" "}
                <span className="text-accent text-2xl md:text-3xl font-bold">$97</span> Today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-lg mx-auto">
            {/* Order summary */}
            <div className="glass-strong rounded-2xl p-6 md:p-8 mb-6 border-primary/20">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Order Summary</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-foreground font-body">VIP Access — Manus AI 3-Day Live Challenge</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-muted-foreground line-through font-heading text-lg">$297</span>
                <span className="text-primary font-heading font-bold text-2xl">$97</span>
                <span className="bg-accent/20 text-accent text-xs font-heading font-bold px-2 py-0.5 rounded-lg">TODAY ONLY</span>
              </div>
              <p className="text-accent text-xs mt-3 font-heading font-semibold">
                50 seats max — {seatsRemaining} remaining
              </p>
            </div>

            {/* VIP checkout embed */}
            <div style={{ height: 498 }}>
              <iframe
                src={vipFormSrc}
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 25 }}
                id="inline-1GSHXSK9YYJSOdoaJy3k"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Nadia Cattaneo - VIP Seat Upsell"
                data-height="498"
                data-layout-iframe-id="inline-1GSHXSK9YYJSOdoaJy3k"
                data-form-id="1GSHXSK9YYJSOdoaJy3k"
                title="Nadia Cattaneo - VIP Seat Upsell"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VipUpsell;
