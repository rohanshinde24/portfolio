// src/components/ContactForm.js
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // "idle" | "sending" | "sent" | "error"

  const sendToServer = async (data) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = new FormData(formRef.current);
    const payload = {
      name: form.get('user_name'),
      email: form.get('user_email'),
      message: form.get('message'),
    };

    try {
      const ok = await sendToServer(payload);
      if (ok) {
        setStatus('sent');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="max-w-xl mx-auto space-y-6"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 border border-line dark:border-line-dark rounded-md bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-dark placeholder:text-muted focus:border-accent focus:ring-accent"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 border border-line dark:border-line-dark rounded-md bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-dark placeholder:text-muted focus:border-accent focus:ring-accent"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        className="w-full px-4 py-3 border border-line dark:border-line-dark rounded-md bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-dark placeholder:text-muted focus:border-accent focus:ring-accent"
      />

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-darkHover text-white font-semibold py-3 px-6 rounded-md w-full transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {status === 'sent' && (
        <p className="text-accent dark:text-accent-dark text-center">
          Message sent. I’ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-accent dark:text-accent-dark text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
