import { Call } from "@/app/icon/call.icon";
import { Facebook } from "@/app/icon/facebook.icon";
import { Github } from "@/app/icon/github.icon";
import { Insta } from "@/app/icon/insta.icon";
import { Linkedin } from "@/app/icon/linkedin.icon";
import { Mark } from "@/app/icon/location.icon";
import { Mail } from "@/app/icon/mail.icon";
import { Twitter } from "@/app/icon/twitter.icon";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
    return(
        <main>
            <section>
                <div className="h-[500px] bg-gray-700 pt-5 ">
                <Image src="/galaxy-black-and-white-isolated-icon-vector-53425252.jpg" alt="Galaxy Logo" width={50} height={20} className="w-28 h-28 rounded-full   mx-[900px]" />
                <p className="text-xl flex items-center font-extrabold text-white mx-[925px]">Galaxy</p>
                <div
                className="h-1 bg-gray-400 mt-10"></div>
                <div className="">
                    <div className="flex space-x-[400px]" >
                    <div className="ml-28 space-y-5">
                        <h2  className="mt-7 text-3xl font-bold">
                            Reach Us
                        </h2>
                    <div className="flex mt-6">
                    <Call></Call>
                    <p className="pt-3 pl-1 font-medium">92+ 51412054132</p>
                    </div>
                    <div className="flex">
                    <Mail></Mail>
                    <p className="pt-2 pl-2 font-medium">Unknown@gmail.com</p>
                    </div>
                    <div className="flex">
                    <Mark></Mark>
                    <p className="pt-3 pl-1 font-medium">
                        Karachi Bahria Town Sec-6b1 
                    </p>
                    </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="mt-6 text-3xl font-bold">Company</h3>
                        <Link href="/about" className="block font-medium">About</Link>
                        <Link href="/Contact" className="block font-medium">Contact</Link>
                        <Link href="/" className="block font-medium">Home</Link>
                    </div>
                    <div>
                        <h2 className="mt-7 text-3xl font-bold">
                            Social Media
                        </h2>
                        <div className="flex mt-4 space-x-4">
                            <Facebook></Facebook>
                            <Github></Github>
                            <Twitter></Twitter>
                            <Linkedin></Linkedin>
                            <Insta></Insta>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}