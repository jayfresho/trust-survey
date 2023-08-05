import "@styles/globals.css";
import { Inter } from "next/font/google";
import ThemesProvider from "../providers/ThemesProvider";
import { GlobalContextProvider } from "../providers/ContextProvider";
import Menu from "@components/common/Menu";
import Footer from "@components/common/Footer";
import styles from "@styles/tailwind";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yawoo",
  description: "yawoo",
  keywords: ["Yawoo"],
  authors: [
    {
      name: "Oluwafemi Faleye",
      url: "https://yawoo.com",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <GlobalContextProvider>
          <ThemesProvider>
            <main className={`${styles.maxWidth}`}>
              <Menu />
              {children}
            </main>
          </ThemesProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
