"use client";
// components/ContactSection.tsx
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    const res = await fetch('/api/contact-gmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <>
      <div className="bg-stone-950">
        <div className=" container mx-auto text-center flex justify-center py-10">
          <p className="text-3xl md:w-1/4">Wenn Sie Fragen haben, 
kontaktieren Sie uns bitte. </p></div>
      </div>
      <section className="bg-stone-950 text-white pb-20 px-6">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 items-center">
          <Image
            src="/box-contact.jpg"
            alt="Kontaktbild"
            width={516}
            height={372}
            className="rounded-xl md:w-[15vw] max-sm:py-5"
          />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1">E-Mail</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1">Telefon</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-1">Nachricht</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded hover:bg-stone-300 transition"
            >
              Senden
            </button>
            {submitted && <p className="text-green-400 mt-4">Nachricht gesendet!</p>}
          </form>
        </div>
      </section>
    </>
  );
}