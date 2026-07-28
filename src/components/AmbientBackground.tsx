"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      {/* Top right blob */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] animate-blob" />
      
      {/* Bottom left blob */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[140px] animate-blob animation-delay-2000" />
      
      {/* Center ambient glow */}
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px] animate-blob animation-delay-4000" />
      
      {/* Optional faint grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
    </div>
  );
}
