"use client";
import { useState } from "react";

export default function ContactGmailPage() {
  const [form, setForm] = useState({ email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    const res = await fetch("/api/contact-gmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Kontaktformular (Gmail)</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded shadow">
        <div>
          <label className="block mb-1">E-Mail</label>
          <input name="email" type="email" required className="w-full border px-3 py-2 rounded" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Telefon</label>
          <input name="phone" type="tel" className="w-full border px-3 py-2 rounded" value={form.phone} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Nachricht</label>
          <textarea name="message" required className="w-full border px-3 py-2 rounded" rows={4} value={form.message} onChange={handleChange} />
        </div>
        <button type="submit" className="w-full bg-stone-950 text-white py-3 rounded hover:bg-stone-800 transition font-semibold">Senden</button>
        {submitted && <p className="text-green-600 mt-4">Nachricht gesendet! Wir werden uns so schnell wie möglich bei Ihnen melden!</p>}
      </form>
    </div>
  );
}