import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BEM AGENCY",
  description: "Application Task for BEM Agency",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container">{children}</div>
        <footer className="bg-primary text-white w-full h-[40px] py-2 px-5">
          <p className="text-center">Designed by Mehedy Hassan</p>
        </footer>
      </body>
    </html>
  );
}
