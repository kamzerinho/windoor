"use client";
import { useState } from 'react';
// Removed nodemailer import - not usable in client-side React/Next.js

const setupTypes = [
  { type: 'FIX im Rahmen', image: '/fenstertyp/fix-imrahmen.png' },
  { type: '1-TLG KIPP FLG', image: '/fenstertyp/1-tlg-kipp-flg.png' },
  { type: '1-TLG DREHKIPP', image: '/fenstertyp/1-tlg-drehkipp.png' },
  { type: 'FIX + DREHKIPP', image: '/fenstertyp/fix-plus-drehkipp.png' },
  { type: '2-TLG DREHKIPP mit Pfosten', image: '/fenstertyp/2-tlg-drehkipp-pfosten.png' },
  { type: '3-FLG ELEMENT MIT PFOSTEN', image: '/fenstertyp/3-flg-element-mit-pfosten.png' },
  { type: 'FIX im Rahmen + DREHKIPP', image: '/fenstertyp/fix-im-rahmen-drehkipp.png' },
  { type: 'Balkontür mit normaler Schwelle', image: '/fenstertyp/balkontuer-normal.png' },
  { type: '2-TLG Balkontür mit normaler Schwelle', image: '/fenstertyp/2-tlg-balkontuer-normal.png' },
  { type: 'HEBE-KIPP-SCHIEBE-TÜR (HKS bzw. PSK)', image: '/fenstertyp/hks-psk.png' },
  { type: 'HEBE-SCHIEBE-TÜR (HST)', image: '/fenstertyp/hst.png' },
  { type: 'Nebentüren', image: '/fenstertyp/nebentueren.png' },
];

const windowModels = [
  { name: 'Aluplast Ideal 4000', setups: setupTypes },
  { name: 'Aluplast 8000', setups: setupTypes },
  { name: 'Aluminium Aluprof MB70', setups: setupTypes },
  { name: 'Aluminium Aluprof MB86', setups: setupTypes },
  { name: 'Aluminium Aliplast Imperial', setups: setupTypes },
  { name: 'Aluminium Aliplast Economic', setups: setupTypes },
  { name: 'Aluminium Aliplast Star', setups: setupTypes },
  { name: 'Aluminium Aliplast Superial', setups: setupTypes },
];

export default function FenstertypPage() {
  const [selectedModel, setSelectedModel] = useState(windowModels[0]);
  const [selectedSetup, setSelectedSetup] = useState<string>('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(false);
    // No need to destructure or assign unused variables; data is sent directly in fetch below.
    try {
      const res = await fetch('/api/contact-gmail', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone,
          message: form.message,
          model: selectedModel.name,
          setup: selectedSetup,
        }),
      });

      if (res.ok) setSubmitted(true);
    } catch (err) {
      // Optionally handle error (e.g., show a message)
      console.error(err);
    }
    // (No code needed here; removed invalid server-side code from client component.)
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">Fenstertypen & Modelle</h1>
        <div className="mb-8 flex flex-col items-center">
          <label htmlFor="model-select" className="mb-2 text-lg text-black font-semibold">Wählen Sie ein Fenster-Modell:</label>
          <select
            id="model-select"
            className="border text-stone-950 border-gray-300 rounded px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-stone-950"
            value={selectedModel.name}
            onChange={e => {
              const found = windowModels.find(m => m.name === e.target.value);
              setSelectedModel(found || windowModels[0]);
              setSelectedSetup('');
              setShowForm(false);
              setSubmitted(false);
            }}
          >
            {windowModels.map(model => (
              <option key={model.name} value={model.name}>{model.name}</option>
            ))}
          </select>
        </div>
        {!showForm && (
          <div className="grid md:grid-cols-3 gap-8">
            {selectedModel.setups.map((setup, idx) => (
              <div
                key={idx}
                className={`bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center cursor-pointer transition border-2 ${selectedSetup === setup.type ? 'border-stone-950' : 'border-transparent'}`}
                onClick={() => setSelectedSetup(setup.type)}
              >
                <div className="w-full h-40 bg-white flex items-center justify-center rounded mb-4 border border-dashed border-gray-300 overflow-hidden">
                  {setup.image ? (
                    <img src={setup.image} alt={setup.type} className="object-contain h-full max-w-full" />
                  ) : (
                    <span className="text-gray-400">Bild folgt</span>
                  )}
                </div>
                <h3 className="text-md font-semibold text-black text-center">{setup.type}</h3>
                {selectedSetup === setup.type && (
                  <button
                    className="mt-4 bg-stone-950 text-white px-4 py-2 rounded hover:bg-stone-800 transition"
                    onClick={() => setShowForm(true)}
                  >
                    Weiter
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {showForm && (
          <form className="max-w-lg text-stone-950 mx-auto mt-10 bg-gray-50 p-6 rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4 text-black">Anfrage senden</h2>
            <div className="mb-4">
              <label className="block text-stone-700 mb-1">Fenster-Modell</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" value={selectedModel.name} readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-stone-700 mb-1">Fenster-Typ</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" value={selectedSetup || ''} readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-stone-700 mb-1">E-Mail</label>
              <input type="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2" value={form.email} onChange={handleFormChange} required />
            </div>
            <div className="mb-4">
              <label className="block text-stone-700 mb-1">Telefon</label>
              <input type="tel" name="phone" className="w-full border border-gray-300 rounded px-3 py-2" value={form.phone} onChange={handleFormChange} />
            </div>
            <div className="mb-4">
              <label className="block text-stone-700 mb-1">Nachricht</label>
              <textarea name="message" className="w-full border border-gray-300 rounded px-3 py-2" rows={3} value={form.message} onChange={handleFormChange} />
            </div>
            <button type="submit" className="w-full bg-stone-950 text-white py-3 rounded hover:bg-stone-800 transition font-semibold">Senden</button>
            {submitted && <p className="mt-4 text-green-600">Vielen Dank für Ihre Anfrage!</p>}
          </form>
        )}
      </div>
    </div>
  );
} 