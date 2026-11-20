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
    default: "Rizwan Ahmad Zafar | Full Stack Web Developer",
    template: "%s | Rizwan Ahmad Zafar",
  },
  description:
    "Portfolio of Rizwan Ahmad Zafar, a Full Stack Web Developer specializing in Next.js, React, TypeScript and Generative AI with LangChain.js.",
  openGraph: {
    title: "Rizwan Ahmad Zafar | Full Stack Web Developer",
    description:
      "Projects, experience and skills of Rizwan Ahmad Zafar — Next.js, React, TypeScript & Generative AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070b",
};

// Runs before first paint so there is no dark/light flash on load.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className={`${body.className} min-h-screen bg-[#07070b] text-zinc-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
