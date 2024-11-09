
import Image from "next/image";
import Link from "next/link"; // Import Link


export default function Home() {
  return (
    <div className="bg-black text-white">
     

      <main className="bg-black flex justify-around py-40">
        <div className="main pl-9">
          <div className="text-6xl glow font-bold">Explore The Galaxy World</div>
          <p className="py-3 w-1/3 text-2xl">
          "Step into the vastness of the universe, where galaxies swirl, stars are born, and mysteries await.
           From the nearby Milky Way to distant galaxies billions of light-years away, the cosmos holds wonders beyond imagination..."
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <Image src="/pic 1.jpg" alt="Another Image" width={500} height={300} className="rounded" />
          </div>
        </div>
      </main>

      <section className="py-16 px-4 bg-black">
        <h2 className="text-5xl  font-bold text-center mb-8">Learn About Galaxies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl ">
            <Image
              src="/pic 2.jpg"
              alt="Milky Way Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Milky Way Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Milky Way Galaxy.</p>
              <Link href="/blog.1/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/pic.3.jpg"
              alt="Andromeda Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Andromeda Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Andromeda Galaxy.</p>
              <Link href="/blog.2/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/whirlpool.gal.jpg"
              alt="Whirlpool Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Whirlpool Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Whirlpool Galaxy.</p>
              <Link href="/blog.3/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/pic 5.jpg"
              alt="Sombrero Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Sombrero Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Sombrero Galaxy.</p>
              <Link href="/blog.4/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/cartwheel.jpg"
              alt="Cartwheel Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Cartwheel Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Cartwheel Galaxy.</p>
              <Link href="/blog.5/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-gray-400 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <Image
              src="/pic 7.jpg"
              alt="Triangulum Galaxy"
              width={400}
              height={250}
              className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Triangulum Galaxy</h3>
              <p className="text-black mt-2">This is a short summary of the Triangulum Galaxy.</p>
              <Link href="/blog.6/" className="text-blue-800 hover:underline mt-2 inline-block">Read more...</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




