import React, { useState } from 'react';
import Swal from 'sweetalert2';

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) return false;
    if (!formData.subject.trim()) return false;
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
        confirmButtonColor: '#2563eb',
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/xdklqkde', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your message. I’ll get back to you soon!',
          confirmButtonColor: '#2563eb',
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
        confirmButtonColor: '#2563eb',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
          Get In Touch
        </h2>
        <p className="text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
          Interested in working together? Drop me a message below 👇
        </p> 

        {/* Download Resume Button */}
        <div className="mb-8">
        <a
            href="/resume.pdf" // <-- make sure your resume is in the public folder
            download
            className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
            Download Resume
        </a>
    </div>
        <form 
          className="space-y-4" 
          data-aos="fade-up" 
          data-aos-delay="400"
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            disabled={isSending}
            className={`px-6 py-3 rounded-lg shadow-md text-white transition ${
              isSending ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <p className="text-gray-400 mt-6 text-center">
          Or email me directly at: 
          <a href="mailto:emmanuelojo291@gmail.com" className="text-blue-500 hover:underline"> emmanuelojo291@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
