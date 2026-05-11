import type { Metadata } from "next"
import { Outfit, Cinzel_Decorative } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { Web3Provider } from "./providers"
import { Header } from "@/components/header"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CeloQuest - Prosperity Through Knowledge",
  description: "Embark on a digital journey to master the Celo ecosystem and unlock prosperity.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} ${cinzelDecorative.variable} font-sans antialiased`} suppressHydrationWarning>
        <Web3Provider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
          <Analytics />
        </Web3Provider>
      </body>
    </html>
  )
}
