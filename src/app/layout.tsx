import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProvidersLayout from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Locapart",
  description: "Trouvez votre logement idéal en un clic !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersLayout>
          {children}
        </ProvidersLayout>
      </body>
    </html>
  );
}
