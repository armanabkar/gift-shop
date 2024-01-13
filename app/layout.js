import { Inter } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gift Shop",
  description: "Your favorite gift card shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
