"use client";

import { useState } from "react";
import "./contact.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
  honey: string; // honeypot anti-spam
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    program: "General Inquiry",
    message: "",
    honey: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  function update<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm((p) => ({ ...p, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        program: "General Inquiry",
        message: "",
        honey: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="contact">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="kicker">Admissions & Training</span>
          <h1>Contact Us</h1>
          <div className="divider" />

          <p className="hero-lead">
            Your dream of becoming a pilot deserves a serious plan — and the
            right training environment.
          </p>

          <p className="hero-sub">
            Tell us where you are in your journey. We’ll help you map the next
            steps with clarity, professionalism, and a safety-first mindset.
          </p>

          <div className="hero-badges">
            <span className="badge">Safety First</span>
            <span className="badge">Structured Training</span>
            <span className="badge">Mentorship Focused</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="contact-body">
        <div className="container grid">
          {/* Left: Message/Info */}
          <div className="panel">
            <h2>Start the Conversation</h2>
            <p>
              Whether you’re starting from zero hours or advancing toward a
              professional pathway, we’re here to guide you with honest
              expectations and high standards.
            </p>

            <div className="callout">
              <div className="callout-title">What happens next?</div>
              <ul>
                <li>We review your message promptly</li>
                <li>We recommend the best training path for your goals</li>
                <li>We answer your questions clearly — no pressure</li>
              </ul>
            </div>

            <div className="note">
              <strong>Prefer email?</strong>
              <div className="muted">
                You can also reach us directly at{" "}
                <span className="mono">
                  info@royalinternationalflightschool.com
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="formCard">
            <h2>Send a Message</h2>
            <p className="muted">
              Share your goals and we’ll respond with guidance on your next
              steps.
            </p>

            <form onSubmit={onSubmit} className="form">
              {/* Honeypot (hidden) */}
              <div className="hp" aria-hidden="true">
                <label>
                  Leave this empty
                  <input
                    value={form.honey}
                    onChange={(e) => update("honey", e.target.value)}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
              </div>

              <div className="row2">
                <label>
                  Full Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                  />
                </label>

                <label>
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <div className="row2">
                <label>
                  Phone (optional)
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </label>

                <label>
                  Program Interest
                  <select
                    value={form.program}
                    onChange={(e) => update("program", e.target.value)}
                  >
                    <option>General Inquiry</option>
                    <option>Discovery Flight</option>
                    <option>Private Pilot (PPL)</option>
                    <option>Instrument Rating (IR)</option>
                    <option>Commercial Pilot (CPL)</option>
                    <option>CFI / CFII</option>
                    <option>International Student</option>
                  </select>
                </label>
              </div>

              <label>
                Message
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us where you are in your journey and what your goal is..."
                  rows={6}
                />
              </label>

              {status === "error" && (
                <div className="alert alertError">{errorMsg}</div>
              )}
              {status === "sent" && (
                <div className="alert alertSuccess">
                  Message sent. We’ll get back to you soon.
                </div>
              )}

              <button className="btnPrimary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <div className="tiny">
                By submitting, you agree to be contacted about training and
                admissions.
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
