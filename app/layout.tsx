import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { PHProvider } from "@/components/providers/posthog-provider"
import { AdminStatusProvider } from "@/components/admin-status-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Polniy - AI-Powered Creation Platform",
  description: "Generate text, images, code, and websites with advanced AI. The ultimate creative toolkit for modern creators.",
  keywords: "AI, artificial intelligence, text generation, image generation, code generation, website builder, creative tools",
  authors: [{ name: "Polniy Team" }],
  creator: "Polniy",
  publisher: "Polniy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polniy.com",
    title: "Polniy - AI-Powered Creation Platform",
    description: "Generate text, images, code, and websites with advanced AI. The ultimate creative toolkit for modern creators.",
    siteName: "Polniy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polniy - AI-Powered Creation Platform",
    description: "Generate text, images, code, and websites with advanced AI. The ultimate creative toolkit for modern creators.",
    creator: "@polniy",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <PHProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <AdminStatusProvider>
                {children}
                <Toaster richColors position="top-right" />
              </AdminStatusProvider>
            </ThemeProvider>
          </PHProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}