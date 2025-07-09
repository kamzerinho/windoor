// components/ContactSection.tsx
import Image from 'next/image';

export default function ContactSection() {
  return (
    <>
     <div className="container mx-auto text-center flex justify-center my-10">
      <p className="text-3xl w-1/4">Wenn Sie Fragen haben, 
kontaktieren Sie uns bitte. </p></div>
    <section className="bg-stone-950 text-white pb-20 px-6">
     
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 items-center">
        <Image
          src="/box-contact.jpg"
          alt="Kontaktbild"
          width={516}
          height={372}
          className="rounded-xl w-[15vw]"
        />

        <form
          action="https://formspree.io/f/manjvlqe"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Telefon</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Nachricht</label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-stone-900 border border-stone-700 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded hover:bg-stone-300 transition"
          >
            Senden
          </button>
        </form>
      </div>
    </section>
    </>
  );
}