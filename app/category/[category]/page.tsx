'use client'

import { SearchParamType } from "@/types/SearchParamType"
import { useContext } from 'react';
import { DataContext } from '../../context';
import Product from "../../components/Product"
import Head from "next/head";
import { ContextType } from "@/types/ContextType";






export default function Category({ searchParams }: SearchParamType) {
    const data = useContext(DataContext);
    const products = (data as ContextType).products


    if ((data as ContextType).loading) {
        return (
            <main className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>

            </main>
        )
    }



    const filteredProducts = products.filter(product => product.metadata.category === searchParams.category)

    if (searchParams.category === 'all') {
        return (
            <main >
                <nav className="flex justify-between">
                    <h1 className='mx-4 lg:mx-48 mb-6 text-2xl md:text-3xl font-black'>
                        {searchParams.category.toUpperCase().replace(/1/g, " ")}
                    </h1>
                    <p className='mx-4 lg:mx-48'>filter</p>
                </nav>
                <section className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
                    {products.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </section>

            </main>
        )
    }

    return (
        <>
            <main >
                <nav className="flex justify-between items-center">
                    <h1 className='mx-4 lg:mx-48 mb-6 text-2xl md:text-3xl font-black'>
                        {searchParams.category.toUpperCase().replace(/1/g, " ")}
                    </h1>
                    <select className="select select-bordered w-xs mx-4 lg:mx-48 mb-6 focus:outline-none">
                        <option>Recommended</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                    </select>
                </nav>
                <section className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
                    {filteredProducts.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </section>
            </main>
        </>
    )
}

