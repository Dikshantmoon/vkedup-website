"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_BUSINESS_NUMBER } from "./site-config";

type ContactValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  details: string;
};

type ContactField = keyof ContactValues;
type FormStatus = {
  kind: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialValues: ContactValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  details: "",
};

const services = [
  "Brand partnerships",
  "Sponsored content",
  "YouTube video",
  "Instagram Reels",
  "Business storytelling",
  "Other",
];

function validate(values: ContactValues): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.service) {
    errors.service = "Choose the service you are interested in.";
  }

  if (values.details.trim().length < 20) {
    errors.details = "Please share at least 20 characters about your project.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<ContactField, string>>
  >({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    kind: "idle",
    message: "",
  });

  function updateField(field: ContactField, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);

    if (hasAttemptedSubmit) {
      setErrors(validate(nextValues));
    }

    if (status.kind !== "idle") {
      setStatus({ kind: "idle", message: "" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasAttemptedSubmit(true);

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        kind: "error",
        message: "Please check the highlighted fields and try again.",
      });
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim();

    if (!endpoint) {
      setStatus({
        kind: "error",
        message:
          "This form is not connected yet, so your enquiry has not been sent. Configure NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to deliver submissions.",
      });
      return;
    }

    setStatus({ kind: "loading", message: "Sending your enquiry…" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Contact endpoint returned ${response.status}.`);
      }

      setValues(initialValues);
      setErrors({});
      setHasAttemptedSubmit(false);
      setStatus({
        kind: "success",
        message: "Thank you. Your enquiry has been sent successfully.",
      });
    } catch (error) {
      console.error("Contact form submission failed.", error);
      setStatus({
        kind: "error",
        message:
          "We could not send your enquiry. Please try again or use WhatsApp instead.",
      });
    }
  }

  function openWhatsApp() {
    const number = WHATSAPP_BUSINESS_NUMBER.replace(/\D/g, "");

    if (!/^\d{8,15}$/.test(number)) {
      setStatus({
        kind: "error",
        message:
          "WhatsApp is not configured yet. Add your business number in app/site-config.ts.",
      });
      return;
    }

    const message = [
      "Hello VKEDUP, I would like to enquire about your services.",
      values.name.trim() ? `Name: ${values.name.trim()}` : "",
      values.service ? `Service: ${values.service}` : "",
      values.details.trim() ? `Project details: ${values.details.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="vkedup-contact-card border p-5 sm:p-8 lg:p-9">
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="vkedup-contact-label" htmlFor="contact-name">
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="name"
              className="vkedup-contact-field"
              id="contact-name"
              maxLength={100}
              name="name"
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              required
              value={values.name}
            />
            {errors.name && (
              <p className="vkedup-contact-error" id="contact-name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="vkedup-contact-label" htmlFor="contact-email">
              Work email <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="email"
              className="vkedup-contact-field"
              id="contact-email"
              maxLength={254}
              name="email"
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
              required
              type="email"
              value={values.email}
            />
            {errors.email && (
              <p className="vkedup-contact-error" id="contact-email-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="vkedup-contact-label" htmlFor="contact-company">
            Company / business name{" "}
            <span className="vkedup-contact-optional">(optional)</span>
          </label>
          <input
            autoComplete="organization"
            className="vkedup-contact-field"
            id="contact-company"
            maxLength={160}
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            value={values.company}
          />
        </div>

        <div>
          <label className="vkedup-contact-label" htmlFor="contact-service">
            Service interested in <span aria-hidden="true">*</span>
          </label>
          <select
            className="vkedup-contact-field"
            id="contact-service"
            name="service"
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? "contact-service-error" : undefined
            }
            required
            value={values.service}
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="vkedup-contact-error" id="contact-service-error">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label className="vkedup-contact-label" htmlFor="contact-details">
            Project details <span aria-hidden="true">*</span>
          </label>
          <textarea
            className="vkedup-contact-field min-h-36 resize-y"
            id="contact-details"
            maxLength={2000}
            name="details"
            onChange={(event) => updateField("details", event.target.value)}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={
              errors.details ? "contact-details-error" : undefined
            }
            placeholder="Tell us what you are working on and how we can help."
            required
            value={values.details}
          />
          {errors.details && (
            <p className="vkedup-contact-error" id="contact-details-error">
              {errors.details}
            </p>
          )}
        </div>

        {status.message && (
          <p
            aria-live={status.kind === "error" ? "assertive" : "polite"}
            className={`vkedup-contact-status vkedup-contact-status--${status.kind}`}
            role={status.kind === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        )}

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <button
            className="vkedup-button vkedup-button--inverse inline-flex min-h-12 flex-1 items-center justify-center px-6 py-3 font-bold disabled:cursor-wait disabled:opacity-65"
            disabled={status.kind === "loading"}
            type="submit"
          >
            {status.kind === "loading" ? "Sending…" : "Send enquiry"}
            {status.kind !== "loading" && (
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            )}
          </button>
          <button
            className="vkedup-button vkedup-button--whatsapp inline-flex min-h-12 flex-1 items-center justify-center gap-2 border px-6 py-3 font-semibold"
            onClick={openWhatsApp}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.5-8.42ZM12.09 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.75-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
            </svg>
            Enquire on WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
