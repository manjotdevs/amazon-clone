import type { Metadata } from "next";
import { Inter, M_PLUS_1 } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-[#131921] p-3 mr-5 w-full">
          <div className="flex px-2">
            <div>
              <Image src={logo} alt="Amazone.in" width="100" height="100" />
            </div>
            <div className="text-white relative pt-2">
              <p>.in</p>
            </div>
          </div>
          <div className="pr-4 flex">
            <div className="text-white text-xm px-2 pt-2 absolute ">
              <HiOutlineLocationMarker />
            </div>
            <div className="text-white text-xs px-8 ">
              <p>Delivering to Ludhiana 142027</p>
              <p>Update Location</p>
            </div>
            <div className="flex">
              <select className="bg-[#e6e6e6] rounded-l-md p-2 w-12 h-10">
                <option>All</option>
                <option>Eletronic</option>
                <option>Furiture</option>
                <option>books</option>
                <option>Deals</option>
              </select>
              <input type="text" id="search" className="h-10 w-64" />
              <div className="bg-yellow-500 w-12 h-10 rounded-r-md flex items-center justify-center">
                <IoSearch className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
