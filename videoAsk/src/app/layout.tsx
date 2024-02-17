import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./(components)/navbar/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className + 'py-3 px-2'}>
        <div className="flex min-h-screen flex-col items-center relative md:container md:m-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
