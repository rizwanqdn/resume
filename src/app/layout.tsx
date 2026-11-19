// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
  themeColor: "#060913",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} scroll-smooth`}
    >
      <body
        className={`${body.className} min-h-screen bg-[#060913] text-slate-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
