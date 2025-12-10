import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import ThemeToggle from "./ThemeToggle";
import "./App.css";
import Developer from "./assets/Developer.json";
import Developer_2 from "./assets/Developer2.0.json";
import Technology_Network from "./assets/Technology_Network.json";
import Projects from "./assets/components/ProjectCarousel.jsx";
import TechCarousel from "./assets/components/TechCarousel.jsx";
import Contact from "./assets/components/Contact.jsx";
import Loader from "./assets/components/Loader.jsx";
import Footer from "./assets/components/Footer.jsx";
import Reveal from "./assets/components/Reveal.jsx";
import GoToTopButton from "./assets/components/GoToTopButton.jsx";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "#", color: "text-[#2E186A]" },
  { name: "About", href: "#about", color: "text-[#2E186A]" },
  { name: "Experience", href: "#experience", color: "text-[#2E186A]" },
  { name: "Projects", href: "#projects", color: "text-[#2E186A]" },
  { name: "Contact", href: "#contact", color: "text-[#2E186A]" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Keep loader visible for 5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out
    }, 2800); // change 5000 to however long you want (in ms)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loader fadeOut={fadeOut} onAnimationEnd={() => setLoading(false)} />
    );
  }

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        isDarkMode
          ? "dark-gradient text-gray-100"
          : "light-gradient text-gray-900"
      }`}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 m-4 bg-[#cbcace]/20 white:bg-purple-950 rounded-xl shadow-md backdrop-blur-md"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/assets/Portfolio_Logo.png"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Hamburger menu button (mobile) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 
             text-gray-600 dark:text-[#2E186A]
             bg-transparent
             active:scale-95 transition-all duration-200 ease-in-out shadow hover:shadow-lg"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-orbitron flex items-center gap-2 text-sm font-semibold ${item.color}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Dark mode toggle */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ThemeToggle
              isDarkMode={isDarkMode}
              onToggle={() => setIsDarkMode((v) => !v)}
            />
          </div>
        </nav>

        {/* ✅ Mobile menu (Headless UI Dialog) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-40 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Sliding Panel */}
              <Dialog.Panel
                as={motion.div}
                initial={{ x: "100%" }} // Start off-screen right
                animate={{ x: 0 }} // Slide into view
                exit={{ x: "100%" }} // Slide back out
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm p-6
        ${
          isDarkMode ? "bg-[dark-gradient] text-white" : "bg-[#f2f2f3] text-[#2E186A]"
        }`}
              >
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <img
                      alt=""
                      src="/assets/Portfolio_Logo.png"
                      className="h-8 w-auto"
                    />
                  </a>
                  <ThemeToggle
                    isDarkMode={isDarkMode}
                    onToggle={() => setIsDarkMode((v) => !v)}
                  />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-m-2.5 rounded-md p-2.5 bg-transparent 
             active:scale-95 transition-all duration-200 ease-in-out shadow hover:shadow-lg ${
                      isDarkMode ? "text-gray-200" : "text-[#2E186A]"
                    }`}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6">
                  <div className="space-y-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 text-base font-orbitron ${
                          isDarkMode ? "text-white" : "text-[#2E186A]"
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          )}
        </AnimatePresence>
      </header>
      <main className="px-8 lg:px-30 text-center">
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full mt-10">
            {/* Left: Me */}
            <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
              <Reveal animation="slideLeft">
                <h1 className="text-5xl lg:text-6xl mb-2 text-center font-semibold">
                  Hi, I'm{" "}
                  <span className="dark:text-[#2E186A] font-semibold ">
                    Armel
                  </span>
                  👋
                </h1>
                <p className="typing font-orbitron text-2xl lg:text-3xl mb-4 text-center tracking-widest">
                  A Web Developer
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                  <a href="#projects">
                    <button className="px-5 py-4 bg-[#2E186A] text-white text-xs font-semibold rounded-lg shadow hover:bg-[#ff6700] transition tracking-widest font-orbitron">
                      VIEW PROJECTS
                    </button>
                  </a>
                  <a href="#contact">
                    <button className="px-5 py-4 bg-transparent border border-[#2E186A] dark:hover:border-[#ff6700] text-[#2E186A] text-xs font-semibold rounded-lg shadow dark:hover:bg-[#ff6700] dark:hover:text-white transition tracking-widest font-orbitron">
                      CONTACT ME
                    </button>
                  </a>
                </div>
              </Reveal>
            </div>
            {/* Right: Lottie Animation */}
            <div className="flex justify-center order-1 lg:order-2">
              <Reveal animation="slideRight">
                <Lottie
                  animationData={Developer_2}
                  loop={true}
                  autoplay={true}
                  className="w-full md:w-full lg:w-[550px]"
                />
              </Reveal>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          {/* Title */}
          <Reveal animation="zoom">
            <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
              About Me
            </h2>
          </Reveal>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
            {/* Left: Lottie Animation */}
            <Reveal animation="slideLeft">
              <div className="flex justify-center">
                <Lottie
                  animationData={Developer}
                  loop={true}
                  autoplay={true}
                  className="w-72 md:w-96 lg:w-[500px]"
                />
              </div>
            </Reveal>

            {/* Right: Paragraph */}
            <Reveal animation="slideRight">
              <div className="text-center lg:text-left space-y-4">
                <p className="text-lg leading-relaxed">
                  Hi, I’m{" "}
                  <span className="font-semibold text-[#2E186A] dark:text-[#2E186A]">
                    Armel
                  </span>{" "}
                  — a passionate Web Developer who loves creating elegant,
                  responsive, and functional websites. With hands-on experience
                  in WordPress, PHP, and API integration, I focus on building
                  solutions that are both user-friendly and efficient.
                </p>
                <p className="text-lg leading-relaxed">
                  When I’m not coding, I’m learning new technologies and
                  exploring ways to improve web performance and design
                  aesthetics. I take pride in turning ideas into beautiful,
                  working experiences on the web.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center py-16"
        >
          <Reveal animation="zoom">
            <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
              Work Experience
            </h2>
          </Reveal>

          <div className="max-w-5xl w-full space-y-12">
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <Reveal animation="slideLeft">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-[#2E186A]">
                    INTERN WEB DEVELOPER & QA TESTER
                  </h3>
                  <p className="">Maven Solutions</p>
                  <span className="text-sm">Dec 2018 – April 2019</span>
                </div>
              </Reveal>

              {/* Right Side */}

              <div
                className="
                md:col-span-2
                md:border-l-1
                border-t-1
                border-[#2E186A]
                md:border-t-0
                pl-0
                md:pl-6
                pt-4
                md:pt-0
                "
              >
                <Reveal animation="slideRight">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Design and develop website using Wordpress</li>
                    <li>
                      Manually Perform testing around features and functions of
                      websites and web applications
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <Reveal animation="slideLeft">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-[#2E186A]">
                    JUNIOR WEB DEVELOPER
                  </h3>
                  <p className="">Maven Solutions</p>
                  <span className="text-sm">Jan 2020 – June 2020</span>
                </div>
              </Reveal>

              {/* Right Side */}
              <div
                className="
                md:col-span-2
                md:border-l-1
                border-t-1
                border-[#2E186A]
                md:border-t-0
                pl-0
                md:pl-6
                pt-4
                md:pt-0
                "
              >
                <Reveal animation="slideRight">
                  <ul className="list-disc list-inside space-y-2">
                    <li>API Integration and Development using PHP and MYSQL</li>
                    <li>Automations and Debugging</li>
                    <li>Manually Testing API</li>
                    <li>Web Scraping</li>
                    <li>Using Bitbucket and GIT</li>
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <Reveal animation="slideLeft">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-[#2E186A]">
                    Detection Specialist
                  </h3>
                  <p className="">Stealth Monitoring</p>
                  <span className="text-sm">May 2021 – May 2024</span>
                </div>
              </Reveal>

              {/* Right Side */}
              <div
                className="
                md:col-span-2
                md:border-l-1
                border-t-1
                border-[#2E186A]
                md:border-t-0
                pl-0
                md:pl-6
                pt-4
                md:pt-0
                "
              >
                <Reveal animation="slideRight">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Monitor various sites by watching video snippets or live
                      video feed.
                    </li>
                    <li>
                      Ensuring all tools pertinent for monitoring are in working
                      condition.
                    </li>
                    <li>
                      Monitor the control center systems by processing motion
                      triggered alarms and live video feed.
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
            {/* Experience Item 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <Reveal animation="slideLeft">
                <div className="md:text-right">
                  <h3 className="text-xl font-semibold text-[#2E186A]">
                    FREELANCE WEB DEVELOPER
                  </h3>
                  <p className="">Self Employed</p>
                  <span className="text-sm">Present</span>
                </div>
              </Reveal>

              {/* Right Side */}
              <div
                className="
                md:col-span-2
                md:border-l-1
                border-t-1
                border-[#2E186A]
                md:border-t-0
                pl-0
                md:pl-6
                pt-4
                md:pt-0
                "
              >
                <Reveal animation="slideRight">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Built and customized a product showcase website in
                      WordPress using Elementor and Astra theme.
                    </li>
                    <li>
                      Created custom post types with CPT UI & ACF for structured
                      product catalog management.
                    </li>
                    <li>
                      Implemented Google Tag Manager and Analytics for tracking.
                    </li>
                    <li>
                      Ensured responsive design and cross-browser compatibility.
                    </li>
                    <li>
                      Optimized SEO (on-page & technical) to improve visibility
                      in search results
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20 min-h-screen">
        <Reveal animation="zoom">
          <Projects />
        </Reveal>
        </section>
        <div className="flex flex-col items-center justify-center">
          <div>
            <Reveal animation="slideUp">
              <Lottie
                animationData={Technology_Network}
                loop={true}
                autoplay={true}
                className="w-full md:w-full lg:w-[550px]"
              />
            </Reveal>
          </div>
        </div>
        <Reveal animation="zoom">
          <TechCarousel />
        </Reveal>
        <Contact />
        <Reveal animation="zoom">
          <Footer />
        </Reveal>
        <GoToTopButton />
      </main>
    </div>
  );
}

export default App;
