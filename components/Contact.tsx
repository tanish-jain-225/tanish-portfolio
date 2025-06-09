"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle input changes for all fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
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
        // Reset form and show success message
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
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
  const getIconComponent = (iconName: string) => {
    const iconMap: {
      [key: string]: React.ComponentType<{ className?: string; size?: number }>;
    } = {
      FaEnvelope,
      FaPhone,
      FaMapMarkerAlt,
      FaGithub,
      FaLinkedin,
      FaTwitter,
    };
    return iconMap[iconName] || FaEnvelope;
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-16 md:py-20 text-white w-full max-w-7xl mx-auto scroll-mt-20 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="heading text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {contactInfo.title.split(" ").map((word, index) =>
          word === "Connect" ? (
            <span key={index} className="text-purple">
              {word}
            </span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </h1>
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
          {submitSuccess ? (
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 sm:p-4 text-center">
              <p className="text-white text-sm sm:text-base">{contactInfo.form.successMessage}</p>
            </div>
          ) : (
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
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base"
              >
                {isSubmitting
                  ? uiText.contact.sending
                  : contactInfo.form.submitButton}
              </button>
            </form>
          )}
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
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-purple-900/20 p-2 sm:p-3 rounded-full flex items-center justify-center">
                      <IconComponent className="text-purple-300 w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[#BEC1DD] text-xs sm:text-sm">{item.label}</p>
                      <p className="text-white text-sm sm:text-base break-all">{item.value}</p>
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
                const IconComponent = getIconComponent(social.icon);
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900/20 hover:bg-purple-900/40 p-2 sm:p-3 rounded-full transition-colors flex items-center justify-center"
                  >
                    <IconComponent className="text-purple-300 w-4 h-4 sm:w-5 sm:h-5" />
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
