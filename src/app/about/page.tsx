
 import Image from "next/image";

export default function About() {
  return (
    <main className="bg-black min-h-screen p-8">
      <section className=" max-w-4xl mx-auto bg-gradient-to-r from-gray-700 via-gray-200 to-gray-400  shadow-md rounded-lg p-20">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-black mb-5">About Me</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3">
            <Image 
              src="/girl.jpg" 
              alt=" Photo" 
              width={300} 
              height={300} 
              className="rounded-full mx-auto"
            />
          </div>

          <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold text-black mb-4">Hello! </h2>
            <p className="text-black mb-4 font-medium">
            I am Alishba, a passionate web developer with a keen interest in designing and creating visually appealing, user-friendly websites.
             My journey into web development started with a fascination for how websites work behind the scenes, 
            and it has grown into a dedicated pursuit of bringing creative ideas to life on the web.
            </p>
            <p className="text-black mb-4 font-medium">
            Currently, I'm focused on expanding my knowledge in areas like Tailwind CSS, JavaScript, and modern web frameworks. Through my projects, I aim to create experiences that not only look great but also provide seamless functionality for users. Outside of coding,
             I enjoy exploring new tech trends, reading about space and the galaxies, and working on personal growth.
            </p>
            <p className="text-black font-medium">
            Thank you for visiting my page, and I look forward to sharing more of my work and journey with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}










