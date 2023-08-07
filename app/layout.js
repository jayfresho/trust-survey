import "@styles/globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trust Referral Program",
  description: "Trust referral program",
  icons: {
    icon: "/images/trust-logo.png",
  },
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
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  );
}
