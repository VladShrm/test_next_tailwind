import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div className="border-b border-gray-300 flex justify-evenly space-x-4 px-4 py-2 items-center w-100">
            <Link href="/" className="hover:text-blue-500">
                Home
            </Link>
            <Link href="/cars" className="hover:text-blue-500">
                Cars
            </Link>
        </div>
    );
};

export default MenuComponent;