"use client";
import { useId, useRef, useState, type FormEvent } from "react";
import { submitForm, type FormKind } from "@/lib/forms";
import { gifts } from "@/lib/content";
import { Button } from "./Button";
const topics: Record<string, string> = { programs: "Programs", volunteer: "Volunteer", expertise: "Share Expertise", partner: "Partnership", event: "Event Registration", donate: "Donate", other: "Other" };
export function InquiryForm({ kind = "contact", topic = "", event = "", amount = "" }: { kind?: FormKind; topic?: string; event?: string; amount?: string }) {
  const prefix = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const result = useRef<HTMLDivElement>(null);
  const volunteer = kind === "volunteer", newsletter = kind === "newsletter";
  const id = (name: string) => `${prefix}-${name}`;
  const error = (name: string) => errors[name] && <span id={id(name+"-error")} className="field-error">{errors[name]}</span>;
  const field = (name: string, label: string, type = "text") => <div className="field"><label htmlFor={id(name)}>{label} *</label><input id={id(name)} name={name} type={type} required autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : undefined} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? id(name+"-error") : undefined}/>{error(name)}</div>;
  const textarea = (name: string, label: string, required = false) => <div className="field full"><label htmlFor={id(name)}>{label}{required && " *"}</label><textarea id={id(name)} name={name} rows={4} required={required} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? id(name+"-error") : undefined}/>{error(name)}</div>;
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); const nextErrors: Record<string, string> = {};
    for (const control of Array.from(form.elements)) {
      if (control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement) {
        if (control.required && !control.value.trim()) nextErrors[control.name] = "Please complete this field.";
        else if (control.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)) nextErrors[control.name] = "Please enter a valid email address.";
      }
    }
    if (!newsletter && String(data.get("phone")).replace(/\D/g, "").length < 7) nextErrors.phone = "Please enter a valid phone number.";
    const attachment = data.get("attachment");
    if (attachment instanceof File && attachment.size > 5 * 1024 * 1024) nextErrors.attachment = "Please choose a file smaller than 5 MB.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { const control = form.elements.namedItem(Object.keys(nextErrors)[0]); if (control instanceof HTMLElement) control.focus(); return; }
    setStatus("sending");
    try { setMessage(await submitForm(kind, data)); setStatus("success"); form.reset(); requestAnimationFrame(() => result.current?.focus()); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again."); setStatus("error"); }
  }
  if (status === "success") return <div ref={result} tabIndex={-1} className="form-success" role="status"><span className="success-icon" aria-hidden="true">✓</span><h3>{message}</h3>{!process.env.NEXT_PUBLIC_FORM_ENDPOINT && <p>This is a local confirmation. Your information has not been sent or saved. To connect with our team, email <a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a>.</p>}{volunteer && <p>What happens next: when a live form is connected, our team will review your interests and availability and contact you about matching opportunities.</p>}<button className="button" onClick={() => setStatus("idle")}>Return to form</button></div>;
  return <form className={`inquiry-form ${newsletter ? "newsletter-form" : ""}`} onSubmit={submit} noValidate>
    {!newsletter && <p className="form-note">Fields marked * are required.</p>}
    <div className="form-grid">
      {!newsletter && field("name", volunteer ? "Full Name" : kind === "program" ? "Name" : "Your Name")}
      {field("email", newsletter || volunteer || kind === "program" ? "Email" : "Your Email", "email")}
      {!newsletter && field("phone", "Phone Number", "tel")}
      {kind === "contact" && <div className="field"><label htmlFor={id("topic")}>How Can We Help? *</label><select id={id("topic")} name="topic" required defaultValue={event ? "event" : topic in topics ? topic : ""} aria-invalid={!!errors.topic} aria-describedby={errors.topic ? id("topic-error") : undefined}><option value="">Choose a topic</option>{Object.entries(topics).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select>{error("topic")}</div>}
      {event && <div className="event-selection full"><strong>Event:</strong> {event === "legacy-collective" ? "The Legacy Collective Conference · October 14–15, 2026" : event}<input type="hidden" name="event" value={event}/></div>}
      {amount && <div className="event-selection full">Donation inquiry: ${amount}<input type="hidden" name="amount" value={amount}/></div>}
      {volunteer && <>{textarea("interests", "Areas of Interest (Events, Workshops, Mentorship, Registration, Outreach, Admin)", true)}{field("availability", "Availability")}{textarea("motivation", "Why would you like to volunteer with Be Inspired NJ?", true)}</>}
      {!newsletter && textarea("message", volunteer ? "Additional Comments" : "Message")}
      {!newsletter && kind !== "program" && <div className="field full"><label htmlFor={id("attachment")}>Attachment <span className="muted">(optional, up to 5 MB)</span></label><input id={id("attachment")} type="file" name="attachment" aria-invalid={!!errors.attachment} aria-describedby={errors.attachment ? id("attachment-error") : undefined}/>{error("attachment")}</div>}
      {!newsletter && <label className="checkbox full"><input type="checkbox" name="updates"/> <span>{kind === "program" ? "Sign me up for program updates, events, and opportunities." : volunteer ? "Sign me up for Be Inspired NJ updates, events, programs, and volunteer opportunities." : "Sign me up for Be Inspired NJ updates, programs, events, stories, and opportunities to get involved."}</span></label>}
    </div>
    {!process.env.NEXT_PUBLIC_FORM_ENDPOINT && <p className="form-note">Preview form: submissions show a local confirmation. To reach us, email <a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a>.</p>}
    {status === "error" && <p role="alert" className="field-error">{message}</p>}
    <button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : newsletter ? "Sign up" : volunteer ? "Submit Volunteer Interest Form" : kind === "program" ? "Send Message" : "Send"}<span aria-hidden="true">↗</span></button>
  </form>;
}
export function Newsletter() { return <section className="newsletter" id="subscribe"><div className="container newsletter-inner"><div><p className="eyebrow">A little inspiration, in your inbox</p><h2>Stay Connected</h2><p>Get inspiring stories, program updates, upcoming events, volunteer opportunities, and ways to make a difference.</p></div><InquiryForm kind="newsletter"/></div></section>; }
export function Giving() {
  const [amount, setAmount] = useState("100");
  return <div><div className="grid giving-grid">{gifts.map(gift => <article className={`gift-card ${amount === String(gift.amount) ? "selected" : ""}`} key={gift.amount}><h3>{gift.title}</h3><span className="gift-amount">${gift.amount}</span><p>{gift.description}</p><button className="button button-ghost" aria-pressed={amount === String(gift.amount)} onClick={() => setAmount(String(gift.amount))}>{amount === String(gift.amount) ? "Selected" : "Select gift"} <span aria-hidden="true">↗</span></button><a href={`/contact?topic=donate&amount=${gift.amount}`}>Donate ${gift.amount}</a></article>)}</div><div className="custom-gift"><div className="field"><label htmlFor="gift-amount">Your gift amount ($)</label><input id="gift-amount" type="number" min="1" step="0.01" value={amount} onChange={e => setAmount(e.target.value)}/></div>{Number(amount) > 0 && Number.isFinite(Number(amount)) ? <Button href={`/contact?topic=donate&amount=${encodeURIComponent(amount)}`}>Donate Today</Button> : <p role="status">Enter an amount greater than $0.</p>}</div><p className="form-note">Be Inspired NJ is a nonprofit. For donation processing, contact <a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a>. No payments are processed on this website.</p></div>;
}
