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
            <div></div>
        )
    }


    return (

        <ul className="hidden md:block menu bg-base-300 rounded-box p-2">
            <li tabIndex={0}>
                <span>Categories</span>
                <ul className="rounded-box gap-1 p-2 bg-base-300 z-10">
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

    )
}

