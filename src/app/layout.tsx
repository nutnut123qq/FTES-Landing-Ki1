import "./globals.css";
import type { Metadata } from "next";
import { InnerLayout } from "@/app/InnerLayout";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans"
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "FTES Kì 1 - Gói học PRF192 & MAE101",
  description:
    "Gói học PRF192 và MAE101 với mentor đồng hành, feedback thật và lộ trình rõ ràng — chọn gói phù hợp ngay từ đầu kỳ."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn(inter.variable, beVietnamPro.variable, "font-sans light")}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InnerLayout>{children}</InnerLayout>
      </body>
    </html>
  );
}
