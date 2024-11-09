import Image from "next/image";
import Link from "next/link";
export function Header() {
    return(
        <main>
            <section>
                <div>
                <nav className="bg-gray-700 text-white">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex-shrink-0">
            <Image src="/galaxy-black-and-white-isolated-icon-vector-53425252.jpg" alt="Galaxy Logo" width={50} height={20} className="w-12 rounded-3xl" />
            <span className="text-xl flex items-center font-extrabold">Galaxy</span>
          </div>
          <ul className="flex space-x-11 ml-auto">
            <li>
              <Link href="/" className="text-xl font-bold">Home</Link>
            </li>
            <li >
              <Link href="/about" className="text-xl font-bold">About</Link>
            </li>
            <li >
              <Link href="/contact" className="text-xl font-bold mr-10">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
                </div>
            </section>
        </main>
    )
}