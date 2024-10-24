import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const outfit = Roboto({ weight: ["100", "300", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Level Train",
  description:
    "Elevate your fitness journey by logging your workouts and planning future sessions. Our platform makes it easy to track your progress, set goals, and stay motivated.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
