import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'My Independence War',
  description: 'Technological demo project that talks about my Ukraine war stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
