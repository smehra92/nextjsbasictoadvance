import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className=" bg-yellow-100 p-1 flex  flex-col items-center justify-between">
        <Link href="/" className="text-black font-bold p-2">Home</Link>
        <Link href="/api/blog/posts" className="text-black p-2">Blog</Link>
        <Link href="/api/products/10" className="text-black p-2">Products</Link>
        </div>
        {children}
        </body>
    </html>
  );
}
