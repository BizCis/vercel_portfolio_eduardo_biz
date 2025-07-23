import Link from "next/link";

export default function Music() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Music - Salón Morado</h1>
      <div className="flex flex-col items-center mb-6">
        <span className="text-lg font-semibold mb-4">[Imagen de la banda Salón Morado]</span>
      </div>
      <p className="text-lg mb-6 text-justify">
        A few years ago, I discovered that music has a special power to express emotions and thoughts in a unique way. This passion led me to venture beyond just listening to music; I decided to create it. Together with a friend from university, we formed a band called &quot;Sal&oacute;n Morado.&quot; We embarked on the exciting journey of composing our own songs, blending genres and experimenting with different sounds. Each song is a piece of us, infused with our joys, sorrows, and hopes.
      </p>
      <div className="mb-6">
        <iframe src="https://www.youtube.com/embed/z9HcKqDyxSo" style={{ width: '100%', height: '315px' }} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <p className="text-lg text-justify">
        This gallery is a collection of moments from our band &quot;Sal&oacute;n Morado.&quot; It captures our rehearsal sessions, concerts, and the creative process behind each song. It&apos;s a testament to our evolution as artists and the magic that happens when a passion for music unites us.
      </p>
      <div className="flex justify-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-[#b22222] text-white font-semibold shadow-md hover:bg-[#a11d1d] transition-all border border-[#b22222]">Regresar al inicio</a>
        </Link>
      </div>
    </section>
  );
}
