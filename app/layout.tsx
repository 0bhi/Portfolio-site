import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import DarkModeEnforcer from "@/components/DarkModeEnforcer";
import { personalInfo } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://abhigyanpal.dev"), // Update with your actual domain
  title: {
    default: "Abhigyan Pal - Full Stack Developer",
    template: "%s | Abhigyan Pal",
  },
  description: "Portfolio website showcasing full-stack development projects and skills. Specialized in building scalable web applications with real-time capabilities, WebSocket-based systems, and cloud infrastructure.",
  keywords: [
    "Abhigyan Pal",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "AI Engineer",
    "WebSocket",
    "Real-time Applications",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Abhigyan Pal", url: "https://github.com/0bhi" }],
  creator: "Abhigyan Pal",
  publisher: "Abhigyan Pal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhigyanpal.dev", // Update with your actual domain
    title: "Abhigyan Pal - Full Stack Developer",
    description: "Portfolio website showcasing full-stack development projects and skills. Specialized in building scalable web applications with real-time capabilities.",
    siteName: "Abhigyan Pal Portfolio",
    images: [
      {
        url: "/avatar.jpg", // Add og-image.png to public folder for better results
        width: 1200,
        height: 630,
        alt: "Abhigyan Pal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhigyan Pal - Full Stack Developer",
    description: "Portfolio website showcasing full-stack development projects and skills",
    creator: "@yourtwitter", // Update with your Twitter handle if available
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://abhigyanpal.dev", // Update with your actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <DarkModeEnforcer />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

