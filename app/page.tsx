"use client";

import * as React from "react";
import { Heart, Mail, MailOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/* ----------------------------- Content ----------------------------- */

const HER_NAME = "Ain Ilmiah";

const LETTER: string[] = [
  `Happy birthday, sayang.`,
  `Today is your day, but honestly, every day feels like a gift because of you. Thank you for being such a wonderful wife — for taking care of me and all my needs, big and small, often before I even realise I need anything.`,
  `Thank you for listening to my problems, my long stories, my worries about work — and somehow always making everything feel lighter. You are my calm after every hard day.`,
  `I don't say it enough, but I see everything you do. And I'm so grateful that of all the people in this world, it's you I get to come home to.`,
];

const NOTES = [
  {
    title: "For your care",
    body: "You take care of me in a hundred quiet ways — the meals, the reminders, the little things you do without being asked. Thank you for making our home feel like home.",
  },
  {
    title: "For your listening ear",
    body: "Whenever I'm stressed or overthinking, you sit with me and just listen. You don't rush me, you don't judge me. You have no idea how much peace that gives me.",
  },
  {
    title: "For being you",
    body: "Your patience, your laughter, your heart. I fall for you a little more every year. Growing older together with you is my favourite plan.",
  },
] as const;

const CLOSING = {
  wish: "May Allah bless you with happiness, good health, and endless barakah — this year and always.",
  malay: "Selamat hari lahir, sayang. Terima kasih kerana menjadi segalanya untukku.",
  sign: "With all my love, your husband — Fitri",
};

/* ------------------------- Floating petals ------------------------- */

type Petal = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  hue: "rose" | "gold";
};

function makePetals(count: number): Petal[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 9 + Math.random() * 9,
    size: 10 + Math.random() * 12,
    opacity: 0.35 + Math.random() * 0.45,
    hue: Math.random() > 0.3 ? "rose" : "gold",
  }));
}

function Petals({ visible }: { visible: boolean }) {
  const [petals, setPetals] = React.useState<Petal[]>([]);

  React.useEffect(() => {
    // Generate on the client only, to avoid hydration mismatch.
    setPetals(makePetals(26));
  }, []);

  if (!visible) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <Heart
          key={i}
          className={cn(
            "absolute -top-8 animate-drift",
            p.hue === "rose" ? "text-rose" : "text-champagne"
          )}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fill: "currentColor",
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------ Candle ----------------------------- */

function Candle({ lit, onBlow }: { lit: boolean; onBlow: () => void }) {
  return (
    <button
      onClick={onBlow}
      disabled={!lit}
      aria-label={lit ? "Blow out the candle and make a wish" : "Candle blown out"}
      className="group relative mx-auto flex flex-col items-center rounded-3xl p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Flame */}
      <div className="relative h-16 w-10">
        {lit ? (
          <>
            <div className="absolute left-1/2 top-1 h-12 w-7 -translate-x-1/2 animate-flicker rounded-full bg-gradient-to-t from-champagne via-amber-300 to-amber-100 blur-[1px]" />
            <div className="absolute left-1/2 top-4 h-7 w-4 -translate-x-1/2 rounded-full bg-white/80 blur-[2px]" />
            <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-6 rounded-full bg-champagne/20 blur-2xl" />
          </>
        ) : (
          <div className="absolute left-1/2 top-6 h-8 w-2 -translate-x-1/2 rounded-full bg-slate-400/30 blur-sm" />
        )}
      </div>

      {/* Wick + candle body */}
      <div className="h-3 w-0.5 bg-slate-600" />
      <div className="h-32 w-9 rounded-t-md rounded-b-sm bg-gradient-to-b from-blush via-rose/80 to-rose/60 shadow-lg shadow-rose/10" />
      <div className="mt-[-4px] h-3 w-24 rounded-full bg-mauve shadow-inner" />

      <span className="mt-5 text-sm tracking-widest text-muted-foreground transition group-hover:text-foreground">
        {lit ? "tap the candle to make a wish ✦" : "wish made ✦"}
      </span>
    </button>
  );
}

/* --------------------------- Sealed notes -------------------------- */

function SealedNote({
  title,
  body,
  index,
}: {
  title: string;
  body: string;
  index: number;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Card
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      className={cn(
        "cursor-pointer select-none border-border/60 bg-card/70 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5",
        "animate-bloom"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="flex min-h-52 flex-col items-center justify-center gap-4 p-8 text-center">
        {open ? (
          <>
            <MailOpen className="h-6 w-6 text-accent" />
            <h3 className="font-display text-2xl italic text-primary">{title}</h3>
            <p className="text-sm font-light leading-relaxed text-foreground/85">
              {body}
            </p>
          </>
        ) : (
          <>
            <Mail className="h-7 w-7 text-accent/80" />
            <h3 className="font-display text-2xl text-foreground/90">{title}</h3>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              tap to open
            </span>
          </>
        )}
      </CardContent>
    </Card>
  );
}

/* ------------------------------- Page ------------------------------ */

export default function BirthdayPage() {
  const [lit, setLit] = React.useState(true);
  const [showClosing, setShowClosing] = React.useState(false);
  const letterRef = React.useRef<HTMLElement>(null);

  const blowCandle = () => {
    setLit(false);
    setTimeout(() => {
      letterRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1600);
  };

  const revealed = !lit;

  return (
    <main className={cn("dusk-sky min-h-screen", revealed && "lit")}>
      <Petals visible={revealed} />

      {/* ----- Hero: the wish ----- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-accent/90 animate-bloom">
          {new Date().toLocaleDateString("en-MY", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <h1 className="max-w-3xl font-display text-5xl font-medium leading-tight text-blush sm:text-7xl">
          {revealed ? (
            <span className="animate-bloom">
              Happy Birthday,
              <br />
              <em className="text-primary">{HER_NAME}</em>
            </span>
          ) : (
            <span>
              Tonight, the sky saved
              <br />
              <em className="text-primary">one wish for you</em>
            </span>
          )}
        </h1>

        <div className="mt-10">
          <Candle lit={lit} onBlow={blowCandle} />
        </div>

        {revealed && (
          <p className="mt-6 max-w-md animate-bloom text-sm font-light text-muted-foreground [animation-delay:600ms]">
            Scroll down, sayang — there&apos;s something I want to tell you.
          </p>
        )}
      </section>

      {/* ----- The letter ----- */}
      {revealed && (
        <>
          <section
            ref={letterRef}
            className="mx-auto max-w-2xl scroll-mt-10 px-6 py-24"
          >
            <div className="mb-10 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-accent/40" />
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="h-px w-16 bg-accent/40" />
            </div>

            <article className="space-y-6">
              {LETTER.map((para, i) => (
                <p
                  key={i}
                  className={cn(
                    "animate-bloom font-light leading-relaxed text-foreground/90",
                    i === 0 &&
                      "text-center font-display text-3xl italic text-primary sm:text-4xl"
                  )}
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {para}
                </p>
              ))}
            </article>
          </section>

          {/* ----- Three notes ----- */}
          <section className="mx-auto max-w-5xl px-6 pb-24">
            <h2 className="mb-10 text-center font-display text-3xl text-blush sm:text-4xl">
              Three small notes, <em className="text-primary">just for you</em>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {NOTES.map((note, i) => (
                <SealedNote key={note.title} {...note} index={i} />
              ))}
            </div>
          </section>

          {/* ----- Closing ----- */}
          <section className="mx-auto max-w-2xl px-6 pb-32 text-center">
            {!showClosing ? (
              <Button variant="gold" size="lg" onClick={() => setShowClosing(true)}>
                One last thing… <Heart className="h-4 w-4 fill-current" />
              </Button>
            ) : (
              <div className="animate-bloom space-y-8">
                <Heart className="mx-auto h-10 w-10 animate-heartbeat fill-primary text-primary" />
                <p className="font-display text-2xl italic leading-relaxed text-blush sm:text-3xl">
                  {CLOSING.wish}
                </p>
                <p className="font-light leading-relaxed text-primary">
                  {CLOSING.malay}
                </p>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  {CLOSING.sign}
                </p>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}
