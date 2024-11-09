import Image from "next/image";
import Link from "next/link";

export default function MilkyWayBlog() {
  return (
    <div className="bg-black text-white">
      <header className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">          
        </div>
      </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center ">Milky Way Galaxy</h1>
          <Image src="/milky way galaxy.webp" alt="Milky Way Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <p>The Milky Way Galaxy is our galactic home—a vast, barred spiral galaxy that contains our Solar System and billions of other stars, planets, and celestial bodies. Its name comes from its milky appearance in the night sky, a sight visible from Earth due to its dense collection of stars. Spanning over 100,000 light-years, the Milky Way is both ancient and dynamic, with a history shaped by cosmic events and processes over billions of years.</p>

            <h2 className="text-3xl font-semibold">Structure and Size</h2>
            <Image src="/structure.webp" alt="Galaxy Structure" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>The Milky Way's structure is organized into a flat, rotating disk with spiral arms, a central bulge, and a surrounding halo. It has four main spiral arms, with our Solar System located in the Orion Arm, roughly 27,000 light-years from the galactic center. The galaxy’s disk is about 1,000 light-years thick, tapering into a dense bulge in the center, which contains older stars and a supermassive black hole.</p>

            <h2 className="text-3xl font-semibold">Galactic Center and Sagittarius A*</h2>
            <Image src="/black hole.webp" alt="Galactic Center" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>At the heart of the Milky Way lies Sagittarius A*, a supermassive black hole with a mass of approximately four million Suns. This enigmatic region is shrouded in dense gas and dust, making it invisible in regular light but observable through radio waves, X-rays, and other non-visible light forms. Sagittarius A* shapes the galaxy’s dynamics, with stars orbiting it at high speeds, revealing its immense gravitational pull.</p>

            <h2 className="text-3xl font-semibold">Formation and Age</h2>
            <Image src="/formation.jpg" alt="Formation of the Milky Way" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>The Milky Way began forming around 13.6 billion years ago, just after the Big Bang. Initially, smaller proto-galaxies merged, eventually forming the large structure we observe today. Over time, stars and clusters gathered, leading to the current spiral shape. Ongoing galactic evolution continues as the Milky Way absorbs smaller galaxies, while star formation and death continuously shape its structure and content.</p>

            <h2 className="text-3xl font-semibold">Position of the Solar System</h2>
            <Image src="/solar.webp" alt="Solar System's Position" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>Our Solar System is located in a relatively quiet neighborhood within the Orion Arm, a minor spiral arm of the Milky Way. Positioned about halfway between the center and the galaxy's outer edge, this location provides a stable environment for life, free from the intense radiation of the central regions. We orbit the galactic center approximately once every 225-250 million years.</p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>The galaxy has a faint halo of dark matter and sparse gas.</li>
              <li>In about 4.5 billion years, the Milky Way is expected to collide with the neighboring Andromeda Galaxy, creating a new, merged galaxy over millions of years.</li>
            </ul>

            <h2 className="text-3xl font-semibold">Observation from Earth</h2>
            <Image src="/observing.webp" alt="Observing the Milky Way" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>Under clear, dark skies, the Milky Way is visible as a milky band across the night sky. This view, seen without the interference of city lights, reveals the dense star population within the galaxy’s disk, a sight that has inspired awe for centuries.</p>

            <h2 className="text-3xl font-semibold">Fun Fact (Mythology)</h2>
     
            <p>The name "Milky Way" originates from Greek mythology, where it is said to be the milk of the goddess Hera, forming a “milky path” across the heavens. In various cultures, this sight has inspired legends and stories, connecting humanity to the cosmos.</p>
          </div>
        </section>
      </main>
    </div>
  );
}






