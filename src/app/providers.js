// providers.tsx
"use client"
import { ThemeProvider } from 'next-themes';
import React, { useState, useEffect } from "react";

export default function Providers({ children }) {

  const [mounted, setMointed] = useState(false);
  useEffect(() => {
    setMointed(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}