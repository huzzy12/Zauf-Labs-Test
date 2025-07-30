import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "TechCorp - Great Software Built by Great Teams",
  description: "Professional web development, UI/UX design, and team collaboration services. We create exceptional digital experiences that drive growth and innovation.",
  keywords: ["TechCorp", "web development", "UI/UX design", "team collaboration", "software development", "digital solutions"],
  authors: [{ name: "TechCorp Team" }],
  openGraph: {
    title: "TechCorp - Great Software Built by Great Teams",
    description: "Professional web development and digital solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCorp - Great Software Built by Great Teams",
    description: "Professional web development and digital solutions",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
