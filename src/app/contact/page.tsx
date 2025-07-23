
import Link from "next/link";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
      <div className="flex flex-col items-center gap-4">
        <a href="https://www.linkedin.com/in/eduardo-cisneros-biz-580233190/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">LinkedIn</a>
        <a href="https://www.instagram.com/eduardocbiz" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline font-semibold">Instagram</a>
        <a href="mailto:educbiz11@gmail.com" className="text-gray-700 underline font-semibold">educbiz11@gmail.com</a>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-[#b22222] text-white font-semibold shadow-md hover:bg-[#a11d1d] transition-all border border-[#b22222]">Regresar al inicio</a>
        </Link>
      </div>
    </section>
  );
}
