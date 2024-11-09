import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-200 to-gray-400 p-5">

      <div className="bg-blue rounded-2xl shadow-lg p-8 md:p-12 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-black mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
        Let’s connect! Tell us how we can assist you, and we’ll be in touch soon.
        </p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-black">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 "
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-black">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 "
              placeholder="Your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-black">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
             
              placeholder="Your message"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
