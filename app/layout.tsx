import "./globals.css";
import { RocGrotesk } from "./fonts";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={RocGrotesk.variable} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
