
import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">About Eduardo Cisneros Biz</h1>
      <div className="flex flex-col items-center mb-6">
        <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Ver mi CV (PDF)</a>
      </div>
      <p className="text-lg text-justify">
        Hello, I&apos;m Eduardo, a Data Analyst at Autodesk and a skilled actuary based in Quer&eacute;taro, Mexico. My academic background in Actuarial Science from the Autonomous University of Quer&eacute;taro, combined with my proficiency in tools like Excel, SQL, Python, and Tableau, has enabled me to thrive in various data-oriented roles. With experience ranging from sales data analysis at Tractozone to optimizing reporting processes at PSL Group, I excel in turning complex data into actionable insights. My journey in data analysis is driven by a passion for problem-solving, attention to detail, and a commitment to delivering clean and effective data solutions. Fluent in both Spanish and English, I effectively navigate multicultural environments, bringing a creative and analytical approach to every project.
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-[#b22222] text-white font-semibold shadow-md hover:bg-[#a11d1d] transition-all border border-[#b22222]">Regresar al inicio</a>
        </Link>
      </div>
    </section>
  );
}
