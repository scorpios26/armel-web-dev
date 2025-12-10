import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Lottie from "lottie-react";
import ThemeToggle from "./ThemeToggle";
import './App.css'
import Developer from "./assets/Developer.json";
import Developer_2 from "./assets/Developer2.0.json";

const navigation = [
  { name: 'Home', href: '#' , color: 'text-[#2E186A]'},
  { name: 'About', href: '#about' , color: 'text-[#2E186A]' },
  { name: 'Experience', href: '#experience', color: 'text-[#2E186A]' },
  { name: 'Projects', href: '#projects' , color: 'text-[#2E186A]' },
  { name: 'Contact', href: '#contact', color: 'text-[#2E186A]' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode
          ? 'dark-gradient text-gray-100'
          : 'light-gradient text-gray-900'
      }`}
    >
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8 m-4 bg-white/30 white:bg-purple-950/30 rounded-xl shadow-md backdrop-blur-md"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Hamburger menu button (mobile) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 dark:text-[#2E186A]"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a 
              key={item.name} 
              href={item.href} 
              className={`font-orbitron flex items-center gap-2 text-sm font-semibold ${item.color}`}>
                {item.name === 'Home' && (
                 <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="size-5"
                  >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>

                )}
                {item.name === 'About' && (
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="size-5">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>

                )}
                {item.name === 'Projects' && (
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="size-5">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                )}
                {item.name === 'Contact' && (
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="size-5">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                )}
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
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" />
          <DialogPanel 
          className={`fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm p-6 transition-colors duration-300 ${
              isDarkMode ? 'bg-[#2E186A] text-white' : 'bg-white text-[#2E186A]'
            }`}
          >

            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
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
                className={`-m-2.5 rounded-md p-2.5 ${isDarkMode ? 'text-gray-200' : 'text-[#2E186A]'}`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                        isDarkMode ? 'text-white' : 'text-[#2E186A]'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main className="px-8 lg:px-30 text-center">
        <section
          id="hero"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
            
            {/* Left: Me */}
            <div className="text-center lg:text-left space-y-4 order-2 lg:order-1">
                <h1 className="text-5xl lg:text-6xl mb-2 text-center font-semibold">
                Hi, I'm <span className="dark:text-[#2E186A] font-semibold ">Armel</span>👋
              </h1>
              <p className="font-orbitron font-semibold text-2xl lg:text-4xl mb-4 text-center">A Web Developer</p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                <button className="px-6 py-3 bg-[#2E186A] text-white text-sm font-semibold rounded-lg shadow hover:bg-[#ff6700] transition">
                  View Projects
                </button>
                <button className="px-6 py-3 bg-transparent border border-[#2E186A] text-[#2E186A] text-sm font-semibold rounded-lg shadow dark:hover:bg-[#ff6700] dark:hover:text-white transition">
                  Contact Me
                </button>
              </div>
            </div>
            {/* Right: Lottie Animation */}
            <div className="flex justify-center order-1 lg:order-2">
              <Lottie
                animationData={Developer_2}
                loop={true}
                autoplay={true}
                className="w-100 md:w-100 lg:w-[550px]"
              />
            </div>

          </div>
        </section>
        <section
          id="about"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
            About Me
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
            {/* Left: Lottie Animation */}
            <div className="flex justify-center">
              <Lottie
                animationData={Developer}
                loop={true}
                autoplay={true}
                className="w-72 md:w-96 lg:w-[500px]"
              />
            </div>

            {/* Right: Paragraph */}
            <div className="text-center lg:text-left space-y-4">
              <p className="text-lg leading-relaxed">
                Hi, I’m <span className="font-semibold text-[#2E186A] dark:text-[#2E186A]">Armel</span> — a
                passionate Web Developer who loves creating elegant, responsive, and
                functional websites. With hands-on experience in WordPress, PHP, and API
                integration, I focus on building solutions that are both user-friendly
                and efficient.
              </p>
              <p className="text-lg leading-relaxed">
                When I’m not coding, I’m learning new technologies and exploring ways to
                improve web performance and design aesthetics. I take pride in turning
                ideas into beautiful, working experiences on the web.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="min-h-screen flex flex-col items-center justify-center py-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-25 font-orbitron">
            Work Experience
          </h2>

          <div className="max-w-5xl w-full space-y-12">
            {/* Experience Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <div className="md:text-right">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Junior Web Developer
                </h3>
                <p className="text-gray-500 dark:text-gray-400">Maven Solutions</p>
                <span className="text-sm text-gray-400">Jan 2024 – Jun 2024</span>
              </div>

              {/* Right Side */}
              <div className="md:col-span-2 border-l-2 border-[#2E186A] pl-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>Worked as part of the API integration team using PHP backend.</li>
                  <li>Developed efficient code and improved system functionality.</li>
                  <li>Enhanced technical skills and explored new web technologies.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-start">
              {/* Left Side */}
              <div className="md:text-right">
                <h3 className="text-xl font-semibold">
                  Detection Specialist
                </h3>
                <p className="">Stealth Monitoring</p>
                <span className="text-sm text-gray-400">2021 – 2024</span>
              </div>

              {/* Right Side */}
              <div className="md:col-span-2 border-l-2 border-[#2E186A] pl-6">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Monitored live and recorded video feeds for issues and incidents.</li>
                  <li>Provided detailed reports ensuring accuracy and consistency.</li>
                  <li>Maintained strong attention to detail in a fast-paced environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



      </main>


    </div>
    
  )
}

export default App
