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

    const ok = await sendToServer(payload);
    if (ok) {
      setStatus('sent');
      formRef.current.reset();
    } else {
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
        className="w-full px-4 py-3 border rounded-md bg-white dark:bg-neutral-900 text-gray-800"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 border rounded-md bg-white dark:bg-neutral-900 text-gray-800"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows="5"
        className="w-full px-4 py-3 border rounded-md bg-white dark:bg-neutral-900 text-gray-800"
      />

      <motion.button
        type="submit"
        whileTap={{ scale: 0.95 }}
        disabled={status === 'sending'}
        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md w-full disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {status === 'sent' && (
        <p className="text-green-500 text-center">
          ✅ Message sent! I’ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-center">
          ❌ Oops, something went wrong.
        </p>
      )}
    </form>
  );
}
