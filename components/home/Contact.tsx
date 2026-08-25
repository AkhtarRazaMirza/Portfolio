"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { MaskReveal, Overline, Reveal } from "@/components/primitives";
import { identity } from "@/lib/site";

const API = process.env.NEXT_PUBLIC_BACKEND_URL
  ? `${process.env.NEXT_PUBLIC_BACKEND_URL.replace(/\/+$/, "")}/api`
  : "/api";

const inputClass =
  "w-full border-b border-white/15 bg-transparent py-3 text-white placeholder:text-zinc-500 outline-none transition-colors duration-300 focus:border-white";
const labelClass = "font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, trimmed);
      toast.success("Message sent. I reply within 24 hours.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong — email me directly instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative z-10 overflow-hidden border-t border-white/[0.06] py-28 md:py-44">
      <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[420px] w-[700px] rounded-full bg-white/[0.04] blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1600px] gap-16 px-6 md:px-12 lg:grid-cols-12 lg:px-24">
        <div className="lg:col-span-7">
          <Reveal><Overline>08 — Contact</Overline></Reveal>
          <h2 className="mt-8 font-display text-3xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-5xl md:text-7xl">
            <MaskReveal inView>Let's build</MaskReveal>
            <MaskReveal inView delay={0.12}><span className="text-zinc-500">something real.</span></MaskReveal>
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-zinc-400">
              Open for Full-Stack Developer roles, internships, and freelance projects. If you're building a product that has to be reliable and well-crafted — let's connect.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <a
              data-testid="contact-email-link"
              href={`mailto:${identity.email}`}
              className="group inline-flex max-w-full items-center gap-3 border-b border-white/30 pb-1 font-mono text-sm text-white transition-colors duration-300 hover:border-white"
            >
              <span className="break-all sm:break-normal">{identity.email}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              <a data-testid="contact-resume-link" href={identity.resumeUrl} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">Resume ↗</a>
              <a data-testid="contact-github-link" href={identity.github} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">GitHub</a>
              <a data-testid="contact-linkedin-link" href={identity.linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">LinkedIn</a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <form onSubmit={submit} data-testid="contact-form" aria-busy={sending} className="glass-surface space-y-6 rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="space-y-2">
                <label htmlFor="contact-name" className={labelClass}>Name</label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  required
                  aria-required="true"
                  autoComplete="name"
                  disabled={sending}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className={labelClass}>Email</label>
                <input
                  id="contact-email"
                  data-testid="contact-email-input"
                  required
                  type="email"
                  aria-required="true"
                  autoComplete="email"
                  disabled={sending}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  id="contact-message"
                  data-testid="contact-message-input"
                  required
                  aria-required="true"
                  rows={4}
                  disabled={sending}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the product you're building."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                data-testid="contact-submit-button"
                type="submit"
                disabled={sending}
                aria-live="polite"
                className="w-full rounded-full bg-white py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-black transition-[background-color,transform] duration-200 hover:bg-zinc-300 active:scale-[0.98] disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
