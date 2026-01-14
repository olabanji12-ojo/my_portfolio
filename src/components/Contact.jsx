import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) return false;
    if (!formData.message.trim()) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please fill out all fields correctly.',
        background: '#0a0a0a',
        color: '#fff',
        confirmButtonColor: '#cac6f9',
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xdklqkde', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const isDarkMode = document.documentElement.classList.contains('dark');
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your message. I’ll get back to you soon!',
          background: '#0a0a0a',
          color: '#fff',
          confirmButtonColor: '#cac6f9',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again or email me directly.',
        background: '#0a0a0a',
        color: '#fff',
        confirmButtonColor: '#cac6f9',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-lavender/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          <div data-aos="fade-right" className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary-gold font-bold tracking-[0.2em] uppercase text-xs">Contact</span>
              <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
                Let’s Build <br />Something Great.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-md">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and challenges.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-primary-lavender transition-colors">Email Me</p>
                <a href={`mailto:${personalInfo.email}`} className="text-xl sm:text-2xl font-black text-white hover:text-primary-lavender transition-colors">{personalInfo.email}</a>
              </div>

              <div className="flex gap-6 pt-4">
                {personalInfo.socials.map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div data-aos="fade-left" className="glass p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-gold/10 blur-3xl" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary-gold transition-colors">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors placeholder:text-gray-700"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary-gold transition-colors">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors placeholder:text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-primary-gold transition-colors">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors placeholder:text-gray-700 resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-5 bg-primary-gold text-black rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-glow-gold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending Mission...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
