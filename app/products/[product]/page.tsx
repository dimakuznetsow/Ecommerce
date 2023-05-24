'use client'

import { SearchParamType } from "@/types/SearchParamType"
import { useContext } from 'react';
import { DataContext } from '../../context';
import Product from "../../components/Product"
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

    const filteredProducts = products.filter(product =>
        new RegExp(`\\b${searchParams.product}\\w*\\b`, 'i').test(product.name)
    );

    if (filteredProducts.length === 0) {
        return (
            <main className='mx-4 lg:mx-48 justify-center mb-10'>
                <div className="text-xl font-black">NO MATCHES FOR "{searchParams.product.toUpperCase()}"</div>
            </main>
        )
    }


    return (
        <>
            <main className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
                {filteredProducts.map((product) => (
                    <Product {...product} key={product.id} />
                ))}
            </main>
        </>
    )
}

