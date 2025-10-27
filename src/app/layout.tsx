import { Geist, Geist_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import { Metadata } from 'next';
import { FC, ReactNode } from 'react';
import Providers from './providers';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

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

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
