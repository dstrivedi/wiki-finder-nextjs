import React from 'react';
import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
    return (
        <div>
            <nav className='p-4 bg-slate-950 flex justify-between flex-col md:flex-row sticky drop-shadow-xl'>
                <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 hover:text-slate-200'><Link href="/">WikiFinder!</Link></h1>
                <Search />
            </nav>
        </div>
    )
}
