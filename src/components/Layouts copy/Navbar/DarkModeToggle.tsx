"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setDarkMode(newMode);
  };

  if (darkMode === null) return null; // Prevent rendering until theme is determined

  return (
    <Button
      onClick={toggleDarkMode}
      aria-label="Theme toggle dark and light mood"
    >
      {darkMode ? <Sun /> : <Moon />}
    </Button>
  );
};

export default DarkModeToggle;
