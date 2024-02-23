import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./(components)/tools/authContext";

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
        <div className="flex min-h-screen flex-col items-center relative mx-3 lg:container lg:m-auto">
          <AuthProvider>
              {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
