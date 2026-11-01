"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/content/profile";
import { contactPage } from "@/content/site";

// Formspree form ID, e.g. "xyzabcde" from https://formspree.io/f/xyzabcde.
// Set in .env.local (local) and in Vercel's environment variables (live site).
// It isn't a secret: anyone can see it in the page, so NEXT_PUBLIC_ is fine here.
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errors.name = contactPage.validation.name;
  if (!EMAIL_PATTERN.test(email)) errors.email = contactPage.validation.email;
  if (!message) errors.message = contactPage.validation.message;
  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  if (!FORM_ID) {
    return (
      <p role="status" className="flex gap-2 text-muted-foreground">
        <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {contactPage.notConfigured(profile.email)}
      </p>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (["name", "email", "message"] as Field[]).find((f) => found[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function clearError(field: Field) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    onChange: () => clearError(field),
  });

  const errorText = (field: Field) =>
    errors[field] && (
      <p id={`contact-${field}-error`} className="text-sm text-destructive">
        {errors[field]}
      </p>
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input type="hidden" name="_subject" value={contactPage.emailSubject} />

      {/* Spam trap: hidden from people, bots fill it in and Formspree discards those */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-gotcha">{contactPage.honeypotLabel}</label>
        <input id="contact-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{contactPage.fields.name}</Label>
          <Input {...fieldProps("name")} type="text" autoComplete="name" required className="h-10" />
          {errorText("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{contactPage.fields.email}</Label>
          <Input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            required
            className="h-10"
          />
          {errorText("email")}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{contactPage.fields.message}</Label>
        <Textarea {...fieldProps("message")} rows={6} required className="min-h-36" />
        {errorText("message")}
      </div>

      <Button type="submit" size="lg" className="h-11 px-5" disabled={status === "sending"}>
        <Send aria-hidden="true" />
        {status === "sending" ? contactPage.sending : contactPage.submit}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="flex gap-2 text-primary">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {contactPage.success}
          </p>
        )}
        {status === "error" && (
          <p className="flex gap-2 text-destructive">
            <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {contactPage.error(profile.email)}
          </p>
        )}
      </div>
    </form>
  );
}
