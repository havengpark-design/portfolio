"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress({ color = "#4583DA" }: { color?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[200] pointer-events-none">
      <div
        className="h-full"
        style={{ width: `${progress}%`, background: color, transition: "width 80ms linear" }}
      />
    </div>
  );
}
