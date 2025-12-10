import React, { useEffect } from "react";

function ThemeToggle({ isDarkMode, onToggle }) {
  // Apply theme change when `isDarkMode` changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const darkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  return (
    <button
      onClick={onToggle}
      className="w-20 h-8 rounded-full bg-[#00001c] flex items-center transition duration-400 focus:outline-none shadow"
    >
      <div
        className={`w-10 h-10 relative rounded-full transition-all duration-500 transform p-1 text-white
          ${isDarkMode ? "bg-gray-700 translate-x-full" : "bg-yellow-500 -translate-x-2"}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {isDarkMode ? darkIcon : lightIcon}
        </div>
      </div>
    </button>
  );
}

export default ThemeToggle;
