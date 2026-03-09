"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { socialMedia, contactInfo, uiText } from "@/data";

const Contact = () => {
  // All fields required and initialized
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSent, setJustSent] = useState(false);

  // Handle input changes for all fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler: all fields are required and sent as JSON
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side required check (defensive, backend also checks)
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Reset form and show sent state temporarily
        setFormData({ name: "", email: "", subject: "", message: "" });
        setJustSent(true);
        setTimeout(() => setJustSent(false), 2000);
      } else {
        // Handle validation errors or other issues
        console.error("Form submission failed:", data.message);
        if (data.errors && Array.isArray(data.errors)) {
          alert(`Validation errors:\n• ${data.errors.join("\n• ")}`);
        } else {
          alert(data.message || "Failed to send message. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 text-white w-[90vw] mx-auto scroll-mt-20"
    >
      <h1 className="heading text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {contactInfo.title.split(" ").map((word, i) =>
          i === 0 ? (
            <span key={i} className="text-purple">
              {word}{" "}
            </span>
          ) : (
            <span key={i}>{word} </span>
          ),
        )}
      </h1>
      <p className="text-center text-[#BEC1DD] text-sm md:text-base max-w-xl mx-auto mt-3 mb-8">
        {contactInfo.subtitle}
      </p>
      <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 md:mt-10 w-full">
        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-[#13162D] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/10 min-w-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
            {contactInfo.form.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {contactInfo.form.fields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label
                  htmlFor={field.name}
                  className="block text-xs sm:text-sm text-[#BEC1DD] mb-1"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData] || ""}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-[#1e2142] border border-white/10 rounded-md p-2 sm:p-3 text-white text-sm sm:text-base focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-vertical"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData] || ""}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1e2142] border border-white/10 rounded-md p-2 sm:p-3 text-white text-sm sm:text-base focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base ${
                justSent
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20 scale-[1.02]"
                  : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-[1.01]"
              }`}
            >
              {isSubmitting
                ? uiText.contact.sending
                : justSent
                  ? "✓ Message Sent!"
                  : contactInfo.form.submitButton}
            </button>
          </form>
        </motion.div>
        {/* Contact Info & Socials */}
        <motion.div
          className="flex-1 flex flex-col gap-4 sm:gap-6 min-w-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#13162D] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/10 mb-0 flex-1 flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 lg:text-left">
              {contactInfo.details.title}
            </h2>
            <div className="flex flex-col gap-4 sm:gap-6 p-1 sm:p-2">
              {contactInfo.details.items.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-purple-900/20 p-2 sm:p-3 rounded-full flex items-center justify-center">
                      <IconComponent className="text-purple-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#BEC1DD] text-xs sm:text-sm">
                        {item.label}
                      </p>
                      <p className="text-white text-sm sm:text-base break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Social Links */}
          <div className="bg-[#13162D] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-white/10 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {uiText.contact.connectWithMe}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 w-full">
              {socialMedia.map((social) => {
                const IconComponent = getIcon(social.icon);
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.name} profile`}
                    className="bg-purple-900/20 hover:bg-purple-900/40 p-2.5 sm:p-3 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <IconComponent className="text-purple-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
