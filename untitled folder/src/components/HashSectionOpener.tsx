"use client";

import { useEffect } from "react";

export default function HashSectionOpener() {
  useEffect(() => {
    const hash = window.location.hash.slice(1); // strip the #
    if (!hash) return;
    // Small delay to let the page render and ProjectGrid mount its listeners
    const t = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("openSection", { detail: { id: hash } }));
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Clean up the hash from the URL without triggering a navigation
      window.history.replaceState(null, "", "/");
    }, 300);
    return () => clearTimeout(t);
  }, []);

  return null;
}
