import Image from "next/image";
import Link from "next/link";

export default function CartwheelBlog() {
  return (
    <div className="bg-black text-white">
      <header className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">
        </div>
      </header>

      <main className="bg-black py-20 px-6">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-6xl glow font-bold mb-6 text-center">Cartwheel Galaxy</h1>
          <Image src="/cartwheel.jpg" alt="Cartwheel Galaxy" width={800} height={400} className="rounded mb-6 mx-auto" />

          <div className="text-lg space-y-6">
            <h2 className="text-3xl font-semibold">Overview of the Cartwheel Galaxy</h2>
            <p>
              The Cartwheel Galaxy, also known as ESO 350-40, is a stunning ring galaxy located about 500 million light-years away in the constellation Sculptor.
              Its unique cartwheel-like shape is the result of a past collision with a smaller galaxy.
            </p>

            <h2 className="text-3xl font-semibold">Formation and Structure</h2>
            <p>
              Originally a spiral galaxy, the Cartwheel Galaxy's structure was reshaped by a galactic collision. This collision sent shockwaves
              through its gas and dust, forming the bright outer ring we see today. The galaxy now spans roughly 150,000 light-years.
            </p>

            <h2 className="text-3xl font-semibold">Starburst Ring</h2>
            <p>
              The Cartwheel Galaxy’s outer ring is a starburst region where intense star formation is taking place. The collision triggered
              this process by compressing gas, creating young, hot stars that illuminate the galaxy’s outer ring.
            </p>

            <h2 className="text-3xl font-semibold">Inner Ring and Spokes</h2>
            <p>
              Within the outer ring lies a smaller inner ring, connected by faint spokes—streams of stars and gas that are likely remnants of
              its original spiral structure. These features make the Cartwheel Galaxy a subject of significant scientific interest.
            </p>

            <h2 className="text-3xl font-semibold">Future Evolution</h2>
            <p>
              Over time, the Cartwheel Galaxy is expected to stabilize, with the outer ring gradually dissipating as star formation slows.
              Eventually, it may regain a more spiral or elliptical shape, offering a rare glimpse into galaxy evolution.
            </p>

            <h2 className="text-3xl font-semibold">Interesting Facts</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>The Cartwheel Galaxy spans 150,000 light-years, larger than our Milky Way.</li>
              <li>Its collision occurred approximately 200 million years ago.</li>
              <li>Observations by Hubble and James Webb have provided valuable insights into its starburst activity and structure.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
