import './globals.css';
import type { Metadata } from 'next';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://my-independence-war.vercel.app/'),
  title: {
    template: '%s | My Independence War',
    default: 'My Independence War', 
  },
  description: 'Technological demo project that talks about my Ukraine war stories',
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#257828' },
    { media: '(prefers-color-scheme: dark)', color: '#257828' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
