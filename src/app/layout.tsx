import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ThemeProviderWrapper from '@/components/theme-provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery App',
  description: 'A beautiful gallery app',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
console.log('[DBG] ClientLayoutWrapper render');
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <ThemeProviderWrapper>
          <Nav />
          {children}
          {modal}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
