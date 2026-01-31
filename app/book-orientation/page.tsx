"use client";

import { useState } from "react";
import "./book-orientation.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
  availability: string;
  location: string;
  goal: string;
  experience: string;
  questions: string;
  honey: string;
};

export default function BookOrientationPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    availability: "",
    location: "",
    goal: "Private Pilot (PPL)",
    experience: "No flight time yet",
    questions: "",
    honey: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    const message = [
      "ORIENTATION BOOKING REQUEST",
      "",
      `Preferred Availability: ${form.availability || "N/A"}`,
      `Preferred Location: ${form.location || "N/A"}`,
      `Goal: ${form.goal}`,
      `Experience: ${form.experience}`,
      "",
      "Questions / Notes:",
      form.questions || "N/A",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          program: "Orientation Booking",
          message,
          honey: form.honey,
        }),
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
        availability: "",
        location: "",
        goal: "Private Pilot (PPL)",
        experience: "No flight time yet",
        questions: "",
        honey: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <main className="orientation">
      {/* HERO */}
      <section className="orientation-hero">
        <div className="container">
          <span className="kicker">Admissions</span>
          <h1>Book an Orientation</h1>
          <div className="divider" />

          <p className="lead">
            Your pilot journey starts with a clear plan — not guesswork.
          </p>
          <p className="sub">
            Book an orientation to discuss your goals, timeline, and the best
            training path. We’ll answer your questions honestly and help you
            start with confidence.
          </p>

          <div className="badges">
            <span className="badge">Clear Training Plan</span>
            <span className="badge">Safety-First Culture</span>
            <span className="badge">Professional Standards</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="orientation-body">
        <div className="container grid">
          {/* Left panel */}
          <div className="panel">
            <h2>What you’ll get</h2>
            <ul>
              <li>A recommended training path based on your goals</li>
              <li>What to expect in the first weeks of training</li>
              <li>Timeline guidance and realistic next steps</li>
              <li>Answers to licensing, requirements, and scheduling</li>
            </ul>

            <div className="callout">
              <div className="callout-title">Who is this for?</div>
              <p className="muted">
                New students, international students, career-focused pilots, and
                anyone who wants a structured start.
              </p>
            </div>

            <div className="note">
              <strong>Tip:</strong>{" "}
              <span className="muted">
                The more details you share, the more precise our guidance will
                be.
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="formCard">
            <h2>Request Your Orientation</h2>
            <p className="muted">
              Submit this form and we’ll reach out to schedule your orientation.
            </p>

            <form className="form" onSubmit={onSubmit}>
              {/* Honeypot */}
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
                  Your Goal
                  <select
                    value={form.goal}
                    onChange={(e) => update("goal", e.target.value)}
                  >
                    <option>Discovery Flight</option>
                    <option>Private Pilot (PPL)</option>
                    <option>Instrument Rating (IR)</option>
                    <option>Commercial Pilot (CPL)</option>
                    <option>CFI / CFII</option>
                    <option>International Student</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label>
                Flight Experience
                <select
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                >
                  <option>No flight time yet</option>
                  <option>Discovery flight only</option>
                  <option>Some flight time</option>
                  <option>Student pilot</option>
                  <option>Already licensed</option>
                </select>
              </label>

              <label>
                Preferred Availability (days/times)
                <input
                  value={form.availability}
                  onChange={(e) => update("availability", e.target.value)}
                  placeholder="Example: Weekdays after 5pm, Saturdays mornings"
                />
              </label>

              <label>
                Preferred Location / Airport (if known)
                <input
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="Example: Fort Lauderdale / Miami / Not sure"
                />
              </label>

              <label>
                Questions or notes (optional)
                <textarea
                  value={form.questions}
                  onChange={(e) => update("questions", e.target.value)}
                  placeholder="What would you like to know? Any deadlines or goals?"
                  rows={5}
                />
              </label>

              {status === "error" && (
                <div className="alert alertError">{errorMsg}</div>
              )}
              {status === "sent" && (
                <div className="alert alertSuccess">
                  Request sent. We’ll reach out soon to schedule your orientation.
                </div>
              )}

              <button className="btnPrimary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Request Orientation"}
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
