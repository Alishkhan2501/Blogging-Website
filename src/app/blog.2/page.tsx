import Image from "next/image";
import Link from "next/link";

export default function AndromedaBlog() {
  return (
    <div className="bg-black text-white">
    <header className="bg-gray-700 text-white">
      <div className="flex justify-between items-center px-4 py-2">          
      </div>
    </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center">Andromeda Galaxy</h1>
          <Image src="/pic.3.jpg" alt="Andromeda Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <h2 className="text-3xl font-semibold">Introduction to the Andromeda Galaxy</h2>
            <p>
              The Andromeda Galaxy, also known as M31, is the closest spiral galaxy to the Milky Way and is on a collision course with it. 
              Located approximately 2.537 million light-years from Earth, it is the largest galaxy in the Local Group, which includes 
              the Milky Way, the Triangulum Galaxy, and about 54 other smaller galaxies. With a diameter of about 220,000 light-years, 
              Andromeda contains roughly one trillion stars, significantly more than the Milky Way.
            </p>

            <h2 className="text-3xl font-semibold">Structure and Composition</h2>
            <Image src="/composition.jpg" alt="Andromeda Structure" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              The Andromeda Galaxy has a classic spiral structure, featuring several prominent spiral arms that are rich in gas and dust. 
              Its central bulge contains older stars, while the surrounding disk hosts younger stars and star-forming regions. 
              Andromeda also has a prominent halo of hot gas and dark matter, contributing to its gravitational binding and structural integrity.
            </p>

            <h2 className="text-3xl font-semibold">Galactic Center</h2>
            <Image src="/andro.galactic.jpg" alt="Andromeda Galactic Center" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              At the heart of the Andromeda Galaxy lies a supermassive black hole known as M31, with a mass estimated to be around 
              100 million solar masses. This black hole is surrounded by a dense concentration of stars, and its gravitational influence 
              shapes the orbits of stars in the galaxy’s core.
            </p>

            <h2 className="text-3xl font-semibold">Formation and Age</h2>
            <p>
              The Andromeda Galaxy is believed to have formed about 10 billion years ago, making it slightly older than the Milky Way. 
              Its formation involved the merger of smaller galaxies, a process that is ongoing as Andromeda continues to acquire smaller 
              satellite galaxies. The gravitational interactions between these galaxies contribute to Andromeda's evolving structure.
            </p>

            <h2 className="text-3xl font-semibold">Future Collision with the Milky Way</h2>
            <Image src="/collision.webp" alt="Andromeda Collision" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              In about 4.5 billion years, Andromeda is expected to collide with the Milky Way Galaxy. This event will trigger a series 
              of gravitational interactions that will reshape both galaxies, potentially forming a new, larger galaxy. Scientists predict 
              that during the collision, stars will largely avoid one another due to the vast distances between them, but the merger will 
              lead to significant changes in the galaxies' structures.
            </p>

            <h2 className="text-3xl font-semibold">Observation from Earth</h2>
            <p>
              The Andromeda Galaxy is visible to the naked eye from Earth, appearing as a faint smudge in the night sky. It can be 
              observed in the constellation Andromeda, particularly in dark-sky locations away from urban light pollution. Through 
              binoculars or small telescopes, it reveals more details, including its spiral structure.
            </p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>Andromeda is the nearest spiral galaxy to the Milky Way and is one of the few galaxies visible to the naked eye.</li>
              <li>Andromeda is the largest member of the Local Group, a collection of more than 50 galaxies.</li>
              <li>The first recorded observation of Andromeda dates back to the 10th century.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
