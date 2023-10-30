import './globals.css';
import type { Metadata } from 'next';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  metadataBase: new URL('hhttps://my-independence-war.vercel.app/'),
  title: {
    template: '%s | My Independence War',
    default: 'My Independence War', 
  },
  description: 'Technological demo project that talks about my Ukraine war stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='px-2 pb-2'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
