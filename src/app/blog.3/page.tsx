import Image from "next/image";
import Link from "next/link";

export default function WhirlpoolBlog() {
  return (
    <div className="bg-black text-white">
      <header className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">
        </div>
      </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center">Whirlpool Galaxy</h1>
          <Image src="/whirlpool.gal.jpg" alt="Whirlpool Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <h2 className="text-3xl font-semibold">Introduction to the Whirlpool Galaxy</h2>
            <p>
              The Whirlpool Galaxy, also known as M51 or NGC 5194, is a beautiful spiral galaxy approximately 23 million light-years 
              away in the constellation Canes Venatici. Known for its iconic spiral arms, M51 is one of the most well-studied galaxies 
              and is interacting with a smaller galaxy, NGC 5195, creating a mesmerizing cosmic duo.
            </p>

            <h2 className="text-3xl font-semibold">Structure and Composition</h2>
            <p>
              The Whirlpool Galaxy is nearly face-on, displaying its prominent spiral arms filled with bright star-forming regions, 
              dust, and young stars. The gravitational interaction with NGC 5195 has enhanced star formation within the arms, creating 
              clusters of young, luminous stars that illuminate M51’s iconic spiral.
            </p>

            <h2 className="text-3xl font-semibold">Interaction with NGC 5195</h2>
            <Image src="/pic 4.jpg" alt="Interaction with NGC 5195" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              NGC 5195, a smaller companion galaxy, is interacting with the Whirlpool Galaxy, pulling on one of its spiral arms. This 
              interaction intensifies the star formation in the Whirlpool’s arms, giving it its striking appearance and providing a 
              valuable example of galactic interaction for astronomers.
            </p>

            <h2 className="text-3xl font-semibold">Observational Significance</h2>

            <p>
              The Whirlpool Galaxy is a favorite among amateur astronomers and can be observed with small telescopes, where its spiral 
              arms become visible in greater detail. Its interaction with NGC 5195 and its distinct structure offer an opportunity to 
              study spiral galaxy formation and behavior.
            </p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>The Whirlpool Galaxy was the first galaxy where spiral structure was identified in the 19th century.</li>
              <li>It is approximately 23 million light-years from Earth, located in the constellation Canes Venatici.</li>
              <li>Its interaction with NGC 5195 makes it an ideal example of galactic interaction and merger studies.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
