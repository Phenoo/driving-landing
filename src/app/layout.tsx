import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.scss";

import Navigation from "@/components/common/nav-bar";
import FootTest from "@/components/FootTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GM Driving School",
  description: "GM SERVICES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <FootTest />
      </body>
    </html>
  );
}
