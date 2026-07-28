"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.classList.contains("glass-panel-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide default cursor on body when custom cursor is active
    document.body.style.cursor = "none";

    // We need to apply cursor: none to common interactive elements too,
    // otherwise the browser default pointer might show over buttons/links
    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, []);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "rgba(100, 116, 139, 0)",
      borderColor: "rgba(192, 193, 255, 0.4)", // Primary color with opacity
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(100, 116, 139, 0.1)", // Subtle gray
      borderColor: "rgba(192, 193, 255, 0.8)", // Primary tint
    },
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 2,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
    },
  };

  return (
    <>
      {/* Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-[99999]"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      />
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[99999]"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.05,
        }}
      />
    </>
  );
}
