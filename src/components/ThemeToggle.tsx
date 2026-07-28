"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch — render a stable placeholder until mounted
    useEffect(() => setMounted(true), []);

    const isDark = mounted ? resolvedTheme === "dark" : false

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="text-on-surface-variant w-10 h-10 flex items-center justify-center rounded-full hover:text-primary hover:bg-line-subtle transition-colors duration-300"
        >
            <span className="material-symbols-outlined text-2xl theme-toggle-icon">
                {mounted ? (isDark ? "dark_mode" : "light_mode") : "contrast"}
            </span>
        </button>
    );
}