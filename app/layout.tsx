import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shannon Hydraulics LTD",
  description:
    "Shannon Hydraulics provides custom Hydraulic services, repairs, and sales for industrial and agricultural clients across Ireland.",
  openGraph: {
    title: "Shannon Hydraulics LTD",
    description:
      "Shannon Hydraulics provides custom hydraulic services, repairs, and sales for industrial and agricultural clients across Ireland.",
    url: "https://shannonhydraulics.ie",
    siteName: "Shannon Hydraulics LTD",
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`${inter.className} bg-black text-white min-h-screen`}>
            <Header />
            {children}
            <Footer />
          </div>
          <Analytics /> {/* Added here to capture all pages */}
        </ThemeProvider>
      </body>
    </html>
  );
}
