"use client";

import React, { useState } from "react";
import { getIcon } from "@/lib/icons";
import { socialMedia, contactInfo, uiText } from "@/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSent, setJustSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    text: string;
    type: "success" | "error" | null;
  }>({ text: "", type: null });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (statusMessage.type) {
      setStatusMessage({ text: "", type: null });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: "", type: null });

    const requiredFields = contactInfo.form.fields.filter(
      (field) => field.required
    );
    const hasMissingFields = requiredFields.some(
      (field) => !formData[field.name as keyof typeof formData]?.trim()
    );

    if (hasMissingFields) {
      setStatusMessage({
        text: uiText.contact.allFieldsRequired,
        type: "error",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setJustSent(true);
        setStatusMessage({
          text: contactInfo.form.successMessage,
          type: "success",
        });
        setTimeout(() => {
          setJustSent(false);
          setStatusMessage({ text: "", type: null });
        }, 5000);
      } else {
        if (data?.errors && Array.isArray(data.errors)) {
          setStatusMessage({
            text: `${uiText.contact.validationErrorsPrefix} ${data.errors.join(", ")}`,
            type: "error",
          });
        } else {
          setStatusMessage({
            text: data?.message || contactInfo.form.errorMessage,
            type: "error",
          });
        }
      }
    } catch {
      setStatusMessage({ text: uiText.contact.networkError, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-zinc-100 scroll-mt-14 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <h2
            id="contact-heading"
            className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100"
          >
            {contactInfo.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            {contactInfo.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-[#111114] p-6 sm:p-7 rounded-lg border border-zinc-800 min-w-0 flex flex-col justify-between">
            <h3 className="text-sm font-medium mb-5 text-zinc-100">
              {contactInfo.form.title}
            </h3>

            <form
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
              className="space-y-4 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {contactInfo.form.fields.map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-mono text-zinc-300 mb-1.5"
                    >
                      {field.label}
                      {field.required && (
                        <span className="text-zinc-400 ml-1" aria-hidden="true">
                          *
                        </span>
                      )}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={
                          formData[field.name as keyof typeof formData] || ""
                        }
                        onChange={handleChange}
                        required={field.required}
                        rows={4}
                        className="w-full bg-[#0c0c0f] border border-zinc-800 rounded-md px-3.5 py-2.5 text-zinc-100 text-sm focus:border-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 transition-colors resize-y placeholder-zinc-500"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={
                          formData[field.name as keyof typeof formData] || ""
                        }
                        onChange={handleChange}
                        required={field.required}
                        autoComplete={
                          field.name === "name"
                            ? "name"
                            : field.name === "email"
                              ? "email"
                              : "on"
                        }
                        className="w-full bg-[#0c0c0f] border border-zinc-800 rounded-md px-3.5 py-2.5 text-zinc-100 text-sm focus:border-zinc-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 transition-colors placeholder-zinc-500"
                      />
                    )}
                  </div>
                ))}
              </div>

              {statusMessage.type && (
                <div
                  role={statusMessage.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`p-3 rounded-md text-xs sm:text-sm border ${
                    statusMessage.type === "success"
                      ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30"
                      : "bg-red-950/40 text-red-300 border-red-500/30"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-live="polite"
                className={`w-full font-medium py-2.5 px-5 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114] flex items-center justify-center gap-2 ${
                  justSent
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-zinc-100 text-zinc-950 hover:bg-white"
                }`}
              >
                {isSubmitting
                  ? uiText.contact.sending
                  : justSent
                    ? uiText.contact.messageSent
                    : contactInfo.form.submitButton}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 min-w-0 justify-between">
            <div className="bg-[#111114] p-6 sm:p-7 rounded-lg border border-zinc-800 flex-1 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-sm font-medium mb-5 text-zinc-100">
                  {contactInfo.details.title}
                </h3>

                <div className="space-y-4">
                  {contactInfo.details.items.map((item, index) => {
                    const IconComponent = getIcon(item.icon);
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-md border border-zinc-800 bg-[#0c0c0f] p-2 flex items-center justify-center shrink-0">
                          <IconComponent
                            className="text-zinc-400 w-4 h-4"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-mono text-zinc-400">
                            {item.label}
                          </p>
                          <p className="text-sm text-zinc-200 break-all mt-0.5">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-800/80">
                <p className="text-xs font-mono text-zinc-400 mb-3">
                  {uiText.contact.connectWithMe}
                </p>
                <div className="flex flex-wrap gap-2">
                  {socialMedia.map((social) => {
                    const IconComponent = getIcon(social.icon);
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${social.name} profile (opens in new tab)`}
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-[#0c0c0f] px-3 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
