import Link from "next/link";

export default function Tshirts() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">T-Shirts - Marte</h1>
      <div className="flex flex-col items-center mb-6 gap-2">
        <span className="text-lg font-semibold">[Imagen 1 de Marte]</span>
        <span className="text-lg font-semibold">[Imagen 2 de Marte]</span>
        <span className="text-lg font-semibold">[Imagen 3 de Marte]</span>
        <span className="text-lg font-semibold">[Imagen 4 de Marte]</span>
        <span className="text-lg font-semibold">[Imagen 5 de Marte]</span>
      </div>
      <p className="text-lg text-justify">
        A while back, I embarked on a personal journey to channel my artistic flair into something tangible and unique. This led to the creation of &quot;Marte,&quot; a T-shirt brand that&apos;s a true reflection of my creative vision. Marte was born out of a desire to materialize the myriad of ideas swirling in my head, turning them into wearable art.
      </p>
      <p className="text-lg text-justify mt-4">
        My approach with Marte is centered on minimalist designs that speak volumes. I believe in the power of simplicity; each T-shirt is crafted with the idea of making a subtle yet impactful statement. The designs are intentionally created to suit any occasion, making them versatile and timeless.
      </p>
      <p className="text-lg text-justify mt-4">
        Through Marte, I&apos;ve discovered a fulfilling way to share a piece of myself with the world, one T-shirt at a time. It&apos;s a testament to the idea that art can be both personal and universal, transcending the boundaries of traditional canvas and finding a new home in everyday fashion.
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-[#b22222] text-white font-semibold shadow-md hover:bg-[#a11d1d] transition-all border border-[#b22222]">Regresar al inicio</a>
        </Link>
      </div>
    </section>
  );
}
