import "@styles/globals.css";
import { Inter } from "next/font/google";
import styles from "@styles/tailwind";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trust Referral Program",
  description: "Trust referral program",
  keywords: ["Trust referral"],
  authors: [
    {
      name: "Mano Bright",
      url: "https://trustprogram.com",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
