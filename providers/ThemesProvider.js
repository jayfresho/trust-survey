"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemesProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="ligth"
      enableSystem={true}
      enableColorScheme={true}
    >
      {children}
    </ThemeProvider>
  );
}
