'use client'
import { useContext } from 'react';
import { DataContext } from '../context';
import { ContextType } from "@/types/ContextType";
import Link from 'next/link';




export default function Menu() {

    const data = useContext(DataContext);
    const uniqueCategories = new Set((data as ContextType).products?.map(product => product.metadata.category));



    if ((data as ContextType).loading) {
        return (
            <ul className='hidden md:block menu bg-base-200 rounded-box'>
                <li tabIndex={0}>
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </li>
            </ul>
        )
    }


    return (

        <>
            <ul className="hidden md:block menu bg-base-200 rounded-box">
                <li tabIndex={0}>
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                    <ul className="rounded-box p-2 bg-base-200 z-10">
                        <h1 className='mx-4 mt-2 mb-3 text-lg font-black'>
                            CATALOGUE
                        </h1>
                        {Array.from(uniqueCategories).map(category => (
                            <li key={category}>
                                <Link href={{ pathname: `/category/${category}`, query: { category } }}>
                                    {category.charAt(0).toUpperCase() + category.slice(1).replace(/1/g, " ")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </>

    )
}

