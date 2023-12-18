import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { DDBProvider } from '@/providers/ddb-modal-provider';
import { OnboardModalProvider } from '@/providers/onboard-modal-provider';
import { ToasterProvider } from '@/providers/toaster-provider';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InfraZilla',
  description: 'Deploy AWS resources using InfraZilla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <DDBProvider />
          <OnboardModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
