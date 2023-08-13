'use client'

import { SearchParamType } from "@/types/SearchParamType"
import { ChangeEvent, useContext, useState } from 'react';
import { DataContext } from '../../context';
import Product from "../../components/Product"
import { ContextType } from "@/types/ContextType";
import { ProductType } from "@/types/ProductType";



export default function Category({ searchParams }: SearchParamType) {

    const data = useContext(DataContext);
    const products = (data as ContextType).products
    const filteredProducts = products.filter(product =>
        new RegExp(`\\b${searchParams.product}\\w*\\b`, 'i').test(product.name)
    );

    const [sorting, setSorting] = useState("Recommended");
    const [sortedFilterProducts, setSortedFilterProducts] = useState<ProductType[]>(filteredProducts)
    const handleFilterSorting = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value
        setSorting(selectValue)
        let tempProducts = [...filteredProducts];
        if (selectValue === "Recommended") {
            setSortedFilterProducts(filteredProducts)
        }
        if (selectValue === "LowToHigh") {
            setSortedFilterProducts(tempProducts.sort((a, b) => a.unit_amount! - b.unit_amount!))
        }
        if (selectValue === "HighToLow") {
            setSortedFilterProducts(tempProducts.sort((a, b) => b.unit_amount! - a.unit_amount!))
        }
    }

    if ((data as ContextType).loading) {
        return (
            <main className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>

            </main>
        )
    }



    if (filteredProducts.length === 0) {
        return (
            <main className='mx-4 lg:mx-48 justify-center mb-10'>
                <div className="text-xl font-black">NO MATCHES FOR "{searchParams.product.toUpperCase()}"</div>
            </main>
        )
    }


    return (
        <>
            <main >
                <nav className="flex justify-between items-center">
                    <h1 className='mx-4 lg:mx-48 mb-6 text-2xl md:text-3xl font-black'>
                        {searchParams.category?.toUpperCase().replace(/1/g, " ")}
                    </h1>
                    <select
                        onChange={handleFilterSorting}
                        value={sorting}
                        className="select select-bordered w-xs mx-4 lg:mx-48 mb-6 focus:outline-none">
                        <option value={"Recommended"}>Recommended</option>
                        <option value={"LowToHigh"}>Price Low to High</option>
                        <option value={"HighToLow"}>Price High to Low</option>
                    </select>
                </nav>
                <section className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
                    {(sortedFilterProducts ?? filteredProducts)?.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </section>
            </main>
        </>
    )
}

