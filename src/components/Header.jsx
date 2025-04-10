"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-3 mt-4">
      {/* Centered navigation */}
      <nav className="border text-sm text-gray-500 px-3 py-2 rounded-full w-fit mx-auto">
        <div className="flex items-center gap-6 text-black dark:text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/uses" className="hover:underline">
            Uses
          </Link>
        </div>
      </nav>

      {/* Theme toggle button aligned to the right */}
      {mounted && (
        <button
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      )}
    </header>
  );
}