import { useSearchParams } from "react-router-dom";
import { CheckCircle, Mail, Users, Monitor, Calendar, Clock, Mic, Award, Share2, Facebook, Linkedin } from "lucide-react";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const isVip = searchParams.get("vip") === "true";

  return (
    <div className="min-h-screen bg-background">
      {/* Confirmation hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="relative z-10 max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass border-2 border-primary flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>

          <h1 className="mt-6 font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            You're In! See You April 27th at <span className="text-primary">3 PM CST</span> 🎉
          </h1>
          <p className="mt-4 text-muted-foreground text-base md:text-lg font-body max-w-2xl mx-auto">
            Check your inbox — a confirmation email is on its way to{" "}
            <span className="text-foreground font-semibold">[EMAIL]</span>. Add our address to your safe sender list
            so you don't miss a thing.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center">
            What Happens <span className="text-primary">Next</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: 1, icon: <Mail className="w-7 h-7" />, title: "Check Your Email",
                desc: "A confirmation email with your calendar invite is arriving now. Add us to your contacts.",
              },
              {
                step: 2, icon: <Users className="w-7 h-7" />, title: "Join the Free Community",
                desc: "Connect with fellow attendees, ask questions early, and get hyped for the challenge.",
                cta: { text: "Join Community →", href: "#" },
              },
              {
                step: 3, icon: <Monitor className="w-7 h-7" />, title: "Show Up Live on April 27",
                desc: "3 PM CST sharp. The Zoom link will be emailed to you before the event. Don't miss Day 1!",
              },
            ].map((item) => (
              <div key={item.step} className="glass rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {item.step}
                  </span>
                  <span className="text-primary">{item.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                {item.cta && (
                  <a
                    href={item.cta.href}
                    className="inline-block mt-4 text-primary font-heading font-semibold text-sm hover:brightness-110 transition-all duration-300"
                  >
                    {item.cta.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Details Box */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-6 md:p-8 border-primary/20">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-6">
              Webinar Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Calendar className="w-5 h-5" />, text: "April 27, 28 & 29, 2026" },
                { icon: <Clock className="w-5 h-5" />, text: "3:00 – 4:00 PM CST each day" },
                { icon: <Monitor className="w-5 h-5" />, text: "Online (Zoom link will be emailed)" },
                { icon: <Mic className="w-5 h-5" />, text: "Host: Nuno Tavares, Automated Marketer" },
              ].map((detail) => (
                <div key={detail.text} className="flex items-center gap-3">
                  <span className="text-primary">{detail.icon}</span>
                  <span className="text-foreground font-body text-sm md:text-base">{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIP Section — conditional */}
      {isVip && (
        <section>
          <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Welcome to the <span className="text-primary">VIP Family!</span>
              </h2>
            </div>

            <div className="w-28 h-28 rounded-full glass border-2 border-primary flex items-center justify-center mx-auto my-6">
              <div className="text-center">
                <span className="text-primary font-heading font-bold text-lg">VIP</span>
                <div className="text-brand-spindle/60 text-[10px] font-heading-alt">★ ★ ★</div>
              </div>
            </div>

            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Your exclusive bonuses will be delivered to your inbox within 24 hours. Keep an eye out for
              your VIP welcome email with access to all premium resources.
            </p>
          </div>
        </section>
      )}

      {/* Share Section */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Share2 className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
              Know someone who should join?
            </h3>
          </div>
          <p className="text-muted-foreground font-body mb-6">Share this event:</p>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
              { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
              { icon: <Mail className="w-4 h-4" />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className="flex items-center gap-2 glass rounded-xl px-5 py-2.5 text-foreground hover:text-primary hover:scale-[1.03] font-heading font-semibold text-sm transition-all duration-300"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section>
        <div className="max-w-funnel mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="text-foreground font-body text-base md:text-lg mb-4">
            While you wait — join <span className="text-primary font-heading font-bold">500+ entrepreneurs</span>{" "}
            in the Automated Marketer community:
          </p>
          <a
            href="#"
            className="inline-block bg-accent text-accent-foreground font-heading font-bold text-lg px-8 py-4 rounded-xl hover:scale-[1.03] hover:brightness-110 transition-all duration-300 glow-red"
          >
            JOIN THE FREE COMMUNITY →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
