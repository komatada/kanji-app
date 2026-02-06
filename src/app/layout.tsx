import type { Metadata, Viewport } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  subsets: ["latin"], // Zen Maru Gothic is primarily Japanese but subsets often need latin
  display: 'swap',
  preload: false, // Sometimes Japanese fonts are too large to preload fully
});

export const metadata: Metadata = {
  title: "3年生漢字マスター",
  description: "楽しく漢字を覚えよう！",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "漢字マスター",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F0F9FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothic.className} antialiased bg-[#F0F9FF] select-none touch-manipulation overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
