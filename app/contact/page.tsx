"use client";

import { useState } from "react";
import InnerNav from "@/components/InnerNav";
import { PageBottom } from "@/components/Footer";

type Field = { label: string; id: string; type: string; required: boolean; placeholder: string; rows?: number };

const FIELDS: Field[] = [
  { label: "Full name", id: "name", type: "text", required: true, placeholder: "Your name" },
  { label: "Email address", id: "email", type: "email", required: true, placeholder: "you@company.com" },
  { label: "LinkedIn profile", id: "linkedin", type: "url", required: false, placeholder: "linkedin.com/in/yourprofile" },
  { label: "Business Registration Number (ABN)", id: "phone", type: "text", required: false, placeholder: "e.g. 51 824 753 556" },
  { label: "Website (or description if in stealth)", id: "website", type: "text", required: false, placeholder: "yourcompany.com or a brief description" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", phone: "", website: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-background text-white min-h-screen flex flex-col">
      <InnerNav />

      <main className="flex-1 pt-40 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="text-primary-container font-label uppercase tracking-[0.2em] text-xs mb-4">Get in touch</div>
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
              Tell us about <br /><span className="italic font-light">your project.</span>
            </h1>
            <p className="text-white/60 font-body leading-relaxed">
              Share what you&apos;re building and what you need. We&apos;ll be in touch if there&apos;s a fit.
            </p>
          </div>

          {status === "sent" ? (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-primary-container text-6xl mb-6 block">check_circle</span>
              <h2 className="font-headline text-3xl font-bold text-white mb-4">Got it, thank you.</h2>
              <p className="text-white/60">We&apos;ll review your submission and be in touch if there&apos;s a fit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Project description — first and prominent */}
              <div>
                <label htmlFor="project" className="block font-label text-xs uppercase tracking-[0.2em] text-primary-container mb-3">
                  About your project <span className="text-white/40 normal-case tracking-normal">*</span>
                </label>
                <textarea
                  id="project"
                  required
                  rows={6}
                  value={form.project}
                  onChange={handleChange}
                  placeholder="Tell us what you're building, what stage you're at, and what you're looking for from Jenta."
                  className="w-full bg-surface-container-low border border-white/10 focus:border-primary-container/60 outline-none rounded-none px-5 py-4 text-white placeholder-white/30 font-body text-sm leading-relaxed resize-none transition-colors"
                />
              </div>

              {/* Other fields */}
              {FIELDS.map(({ label, id, type, required, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block font-label text-xs uppercase tracking-[0.2em] text-primary-container mb-3">
                    {label} {required && <span className="text-white/40 normal-case tracking-normal">*</span>}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required={required}
                    value={(form as Record<string, string>)[id]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full bg-surface-container-low border border-white/10 focus:border-primary-container/60 outline-none rounded-none px-5 py-4 text-white placeholder-white/30 font-body text-sm transition-colors"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary-container text-on-primary-container px-8 py-5 font-headline font-bold text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {status === "sending" ? "Sending…" : "Submit enquiry"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          )}
        </div>
      </main>

      <PageBottom />
    </div>
  );
}
