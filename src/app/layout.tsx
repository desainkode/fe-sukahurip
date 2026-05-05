import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Desa Sukahurip",
  description: "Portal resmi Desa Sukahurip",
  icons: {
    icon: "/img/image.png",
    shortcut: "/img/image.png",
    apple: "/img/image.png",
  },
};

import MainLayout from "./MainLayout";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F7] dark:bg-[#000418]">
        <ThemeProvider>
          <AuthProvider>
            <MainLayout>{children}</MainLayout>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
