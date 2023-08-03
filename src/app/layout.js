import "./globals.css";
import { Inter } from "next/font/google";
import Heading from "@/app/components/Heading";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dFlix",
  description: "A netflix clone made with nextjs and tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>dFlix</title>
        <meta name="description" content="width=device-width , initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Heading />
        {children}
        <Footer />
      </body>
    </html>
  );
}
