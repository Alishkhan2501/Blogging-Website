import Image from "next/image";
import Link from "next/link";

export default function SombreroBlog() {
  return (
    <div className="bg-black text-white">
      <header className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">
        </div>
      </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center">Sombrero Galaxy</h1>
          <Image src="/pic 5.jpg" alt="Sombrero Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <h2 className="text-3xl font-semibold">Introduction to the Sombrero Galaxy</h2>
            <p>
              The Sombrero Galaxy, also known as M104 or NGC 4594, is a distinctive galaxy located about 31 million light-years away in 
              the constellation Virgo. Named for its resemblance to a sombrero hat, this galaxy stands out with its large central bulge 
              and bright, flat disk.
            </p>

            <h2 className="text-3xl font-semibold">Unique Structure and Appearance</h2>
            <p>
              The Sombrero Galaxy features a massive central bulge surrounded by a prominent ring of dust, giving it a flat, disc-like 
              appearance. This unique structure makes it one of the most recognizable galaxies and sets it apart from other spirals.
            </p>

            <h2 className="text-3xl font-semibold">Massive Central Black Hole</h2>
            <Image src="/som.hole.jpg" alt="Sombrero Galaxy Black Hole" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              At the heart of the Sombrero Galaxy lies a supermassive black hole estimated to be about one billion times the mass of the 
              Sun. This massive black hole plays a key role in the galaxy's dynamics and contributes to the brightness of the core.
            </p>

            <h2 className="text-3xl font-semibold">High Luminosity and Bright Core</h2>
            <p>
              Known for its high luminosity, the Sombrero Galaxy is visible with small telescopes due to its bright core, largely composed 
              of older stars. The contrast of the bright core against the dark dust lane creates its sombrero-like appearance.
            </p>

            <h2 className="text-3xl font-semibold">Potential Halo of Globular Clusters</h2>
            <p>
              M104 is thought to have an extensive halo containing over a thousand globular clusters, which is far more than the Milky Way. 
              These clusters provide insights into the galaxy's formation and history.
            </p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>The Sombrero Galaxy spans roughly 50,000 light-years across, about half the size of the Milky Way.</li>
              <li>It was first observed by Pierre Méchain in 1781 and later cataloged by Charles Messier.</li>
              <li>Due to its brightness, M104 can be seen from Earth with small telescopes or binoculars under clear skies.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
