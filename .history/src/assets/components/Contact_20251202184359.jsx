import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import Tech_Vision from "../Tech_Vision.json";

export default function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen">
      <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
        Get in touch
      </h2>
      <p className="text-base leading-relaxed text-[#2E186A]">
        “Let’s turn your vision into a pixel‑perfect reality.”
      </p>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center max-w-8xl w-full">
        <div className="row-span-4">
          <div className="flex justify-center order-1 lg:order-2">
            <Lottie
              animationData={Tech_Vision}
              loop={true}
              autoplay={true}
              className="w-100 md:w-100 lg:w-[550px]"
            />
          </div>
        </div>
        <div className="row-span-4">
          <form
            action="#"
            method="POST"
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-left"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-left"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold  text-left"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold  text-left"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md text-white bg-[#2E186A] px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:bg-[#ff6700] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6700]"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
