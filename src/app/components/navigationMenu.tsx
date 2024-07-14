import React from 'react'
import Image from 'next/image'
import en from '/images/flags/india.png'
import logo from '../images/logo.png';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";



export default function navigationMenu() {
  return (
    <div className="flex bg-[#131921] p-3 mr-5 w-full">
      <div className="flex px-1">
        <div className="mt-1">
          <Image src={logo} alt="Amazone.in" width="100" height="100" />
        </div>
        <div className="text-white relative pt-1">
          <p className="pt-[1px]">.in</p>
        </div>
      </div>
      <div className="pr-4 flex">
        <div className="text-white text-xm px-2 pt-2 absolute">
          <HiOutlineLocationMarker />
        </div>
        <div className="text-white text-xs px-8">
          <p>Delivering to Ludhiana 142027</p>
          <p>Update Location</p>
        </div>
        <div className="flex">
          <select className="bg-[#e6e6e6] text-xm rounded-l-md p-2 w-16 h-10">
            <option>All</option>
            <option>Eletronic</option>
            <option>Furiture</option>
            <option>books</option>
            <option>Deals</option>
          </select>
          <input type="text" id="search" className="h-10 text-black w-64" />
          <div className="bg-[#febd69] w-12 h-10 rounded-r-md flex items-center justify-center">
            <IoSearch className="text-2xl " />
          </div>
        </div >
        <div className="flex h-8 custom-select">
          <Image src={en} alt="India" width="100" height="100" className="mt-3 ml-5 " />
          <select className="h-8 p-2 rounded-md bg-[#131921] text-white">
            <option>
              <div className="p-2 text-xm ">
                <p>EN</p>
              </div>
            </option>
          </select>

        </div>
      </div>
    </div>

  )
}
