import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hono + Next.js",
  description: "Hono + Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}