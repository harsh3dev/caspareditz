import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Caspar Editz",
  description: "Edit Viral Videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{lato.className} dark`}>{children}</body>
    </html>
  );
}
