import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genki",
  description: "by Arpan",
};

export default function RootLayout({ children, blogs, projects }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="p-[10vw]">
            {children}
            {blogs}
            {projects}
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
