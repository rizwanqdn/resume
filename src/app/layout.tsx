import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Ensure Inter is imported
import Navbar from '../../components/Navbar';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'My Professional Portfolio',
  description: 'A professional portfolio showcasing my work and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`antialiased flex flex-col min-h-screen`}> {/* Add flex-col min-h-screen for sticky footer */}
        <Navbar />
        <main className="flex-grow"> {/* Make main content take available space */}
          {children}
        </main>
      
      </body>
    </html>
  );
}