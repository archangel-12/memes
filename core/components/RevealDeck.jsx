"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";

export default function RevealDeck({ children }) {
  const deckRef = useRef(null);
  const revealInstance = useRef(null);

  useEffect(() => {
    if (revealInstance.current || !deckRef.current) return;

    revealInstance.current = new Reveal(deckRef.current, {
      embedded: false,
      hash: true,
    });

    revealInstance.current.initialize();

    return () => {
      try {
        if (revealInstance.current) {
          revealInstance.current.destroy();
          revealInstance.current = null;
        }
      } catch (e) {}
    };
  }, []);

  return (
    <div
      className="reveal"
      ref={deckRef}
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="slides">{children}</div>
    </div>
  );
}