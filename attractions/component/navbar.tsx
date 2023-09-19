"use client"
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto">


        <button type="button" className="p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href="/">
            Home
          </Link>
        </button>

        <button type="button" className="p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href="/attractions">
            <p className="text-white">Attractions</p>
          </Link>
        </button>

        <button type="button" className="p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href="/add">
            <p className="text-white">Add Attractions</p>
          </Link>
        </button>

        

      </div>
    </div>
  );
};
export default Navbar;
