import React, { useEffect, useRef } from "react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-300 dark:border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Armel Sesdoyro. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 