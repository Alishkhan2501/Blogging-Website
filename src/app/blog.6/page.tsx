import Image from "next/image";
import Link from "next/link";

export default function TriangulumBlog() {
  return (
    <div className="bg-black text-white">
      <header className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">
        </div>
      </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center">Triangulum Galaxy</h1>
          <Image src="/pic 7.jpg" alt="Triangulum Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <h2 className="text-3xl font-semibold">Introduction to the Triangulum Galaxy</h2>
            <p>
              The Triangulum Galaxy, also known as M33 or NGC 598, is a spiral galaxy located about 2.7 million light-years away in the constellation 
              Triangulum. It is the third-largest galaxy in the Local Group, following the Milky Way and Andromeda, and provides astronomers with a closer 
              look at galaxy formation and evolution.
            </p>

            <h2 className="text-3xl font-semibold">Structure and Composition</h2>
            <p>
              M33 features loosely bound spiral arms filled with regions of active star formation, which give it a fragmented, “flocculent” appearance. 
              Unlike many other galaxies, it has a relatively small nucleus, suggesting it may lack a supermassive black hole or have a significantly smaller one.
            </p>

            <h2 className="text-3xl font-semibold">Star Formation and Nebulae</h2>
            <p>
              M33 has one of the highest star formation rates in the Local Group, with many HII regions, such as NGC 604, a massive star-forming area nearly 
              1,500 light-years across. The presence of these regions, filled with young, hot stars, gives the galaxy a distinct blue hue.
            </p>

            <h2 className="text-3xl font-semibold">Interaction with Andromeda</h2>
            <Image src="/coll.jpg" alt="Interaction with Andromeda" width={800} height={400} className="rounded mb-4 mx-auto" />
            <p>
              The Triangulum Galaxy has a gravitational relationship with the Andromeda Galaxy, and it’s possible that the two have interacted in the past. 
              This relationship could be influencing the galaxy's spiral structure and star formation regions.
            </p>

            <h2 className="text-3xl font-semibold">Future of the Triangulum Galaxy</h2>
            <p>
              In the far future, M33 may merge with either Andromeda or the Milky Way, leading to complex galactic interactions within the Local Group. Its 
              smaller size means it may be significantly altered or absorbed in the process.
            </p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>The Triangulum Galaxy is sometimes considered a “satellite” of Andromeda due to their gravitational proximity.</li>
              <li>NGC 604 within M33 is one of the largest HII regions known and could be visible to the naked eye if it were as close as the Orion Nebula.</li>
              <li>The galaxy’s high rate of star formation contributes to its bluish appearance in visible light.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
