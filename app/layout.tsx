import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Head from 'next/head';
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MW Property Management - Professional Property Management Services",
  description:
    "Maximize your property investment with MW Property Management. Comprehensive property management services including tenant screening, maintenance, financial management, and 24/7 support.",
  keywords: "property management, rental properties, tenant screening, property maintenance, real estate investment",
    generator: 'v0.dev',
  icons: {
    icon: 'images/logo-mw.png', // or .png, .svg
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
