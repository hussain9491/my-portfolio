
// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post('/api/contact', { name, email, message });
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required className="w-full p-2 border" />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required className="w-full p-2 border" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required className="w-full p-2 border"></textarea>
          <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
          {submitStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
          {submitStatus === 'error' && <p className="text-red-500">Failed to send message.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;