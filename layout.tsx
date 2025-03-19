import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sync KiranaBuddy with Tally",
  description:
    "Effortlessly connect and sync your Tally accounting data with KiranaBuddy. Automate bookkeeping and simplify financial management for your B2B operations.",
  openGraph: {
    title: "Sync KiranaBuddy with Tally - Seamless Accounting Integration",
    description:
      "Effortlessly connect and sync your Tally accounting data with KiranaBuddy. Automate bookkeeping and simplify financial management for your B2B operations.",
    url: "https://www.kiranabuddy.in/import-from-tally",
    siteName: "KiranaBuddy",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1QjBahgH2HEUlKpNlDgP32PM0xP1e.png",
        width: 40,
        height: 40,
        alt: "KiranaBuddy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sync KiranaBuddy with Tally - Seamless Accounting Integration",
    description:
      "Effortlessly connect and sync your Tally accounting data with KiranaBuddy. Automate bookkeeping and simplify financial management for your B2B operations.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-K1QjBahgH2HEUlKpNlDgP32PM0xP1e.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Standard Meta */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0].url} />
        <meta property="og:image:width" content={metadata.openGraph?.images?.[0].width?.toString()} />
        <meta property="og:image:height" content={metadata.openGraph?.images?.[0].height?.toString()} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter?.card} />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0]} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.kiranabuddy.in/import-from-tally" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

