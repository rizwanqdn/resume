// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

// Body font: friendly, highly readable, modern
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Display font: used for headings (h1–h3)
const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arfa Sultan | Science Educator & Molecular Biologist",
    template: "%s | Arfa Sultan",
  },
  description:
    "Portfolio of Arfa Sultan, a science and technology educator with an M.Ed. and M.Sc. in Molecular Biology & Biochemistry.",
  openGraph: {
    title: "Arfa Sultan | Science Educator & Molecular Biologist",
    description:
      "Teaching experience, education, research and skills of Arfa Sultan.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body
        className={`${body.className} antialiased flex min-h-screen flex-col`}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
