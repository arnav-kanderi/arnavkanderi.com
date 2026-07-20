import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/theme/theme-provider";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arnavkanderi.com"),
  title: "Arnav Kanderi | Mathematics, Computer Science & Quantitative Finance",
  description:
    "Arnav Kanderi is a high school senior in Waxhaw, NC working at the intersection of mathematics, code, and markets.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Arnav Kanderi",
    description: "Mathematics, computer science, and quantitative finance.",
    url: "https://arnavkanderi.com",
    siteName: "Arnav Kanderi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before hydration so the correct theme class is set with no flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
