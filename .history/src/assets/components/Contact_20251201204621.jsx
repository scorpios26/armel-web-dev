import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen">
      {/* Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold mb-10 font-orbitron text-left">
        Get in touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left side text */}
        <div className="flex items-start">
          <p className="text-xl leading-relaxed max-w-md">
            “Let’s turn your vision into a pixel-perfect reality.”
          </p>
        </div>

        {/* Form */}
        <form
          action="#"
          method="POST"
          className="w-full max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            {/* First name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-left"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* Last name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-left"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-left"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-left"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md px-3.5 py-2 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                />
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md text-white bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let’s talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
