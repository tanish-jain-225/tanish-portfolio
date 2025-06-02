"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { socialMedia, contactInfo, uiText } from "@/data";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Reset form and show success message
        setFormData({ name: "", email: "", message: "" });
        setSubmitSuccess(true);
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // Handle validation errors or other issues
        console.error('Form submission failed:', data.message);
        if (data.errors && Array.isArray(data.errors)) {
          alert(`Validation errors:\n• ${data.errors.join('\n• ')}`);
        } else {
          alert(data.message || 'Failed to send message. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> } = {
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
    <section id="contact" className="py-20 text-white w-[90vw] mx-auto scroll-mt-20">
      <h1 className="heading">
        {contactInfo.title.split(' ').map((word, index) => 
          word === 'Connect' ? (
            <span key={index} className="text-purple">{word}</span>
          ) : (
            <span key={index}>{word} </span>
          )
        )}
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Contact Form */}
        <motion.div 
          className="flex-1 bg-[#13162D] p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">{contactInfo.form.title}</h2>
          
          {submitSuccess ? (
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
              <p className="text-white">{contactInfo.form.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {contactInfo.form.fields.map((field) => (
                <div key={field.name} className="mb-4">
                  <label htmlFor={field.name} className="block text-sm text-[#BEC1DD] mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] || ''}
                      onChange={handleChange}
                      required={field.required}
                      rows={4}
                      className="w-full bg-[#1e2142] border border-white/10 rounded-md p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-vertical"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] || ''}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full bg-[#1e2142] border border-white/10 rounded-md p-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  )}
                </div>
              ))}
                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? uiText.contact.sending : contactInfo.form.submitButton}
              </button>
            </form>
          )}
        </motion.div>
        
        {/* Contact Info */}
        <motion.div 
          className="flex-1 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#13162D] p-6 rounded-xl border border-white/10 mb-6">
            <h2 className="text-xl font-bold mb-4">{contactInfo.details.title}</h2>
            <div className="space-y-4">
              {contactInfo.details.items.map((item, index) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                  <div key={index} className="flex items-center">
                    <div className="bg-purple-900/20 p-3 rounded-full mr-4">
                      <IconComponent className="text-purple-300" size={20} />
                    </div>
                    <div>
                      <p className="text-[#BEC1DD] text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
            {/* Social Links */}
          <div className="bg-[#13162D] p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-bold mb-4">{uiText.contact.connectWithMe}</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social) => {
                const IconComponent = getIconComponent(social.icon);
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-900/20 hover:bg-purple-900/40 p-3 rounded-full transition-colors"
                  >
                    <IconComponent className="text-purple-300" size={20} />
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
