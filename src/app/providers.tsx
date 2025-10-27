'use client';

import { ThemeProvider } from 'next-themes';
import { FC, useEffect, useState } from 'react';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}
const Providers: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
