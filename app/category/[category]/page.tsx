'use client'

import { SearchParamType } from "@/types/SearchParamType"
import { ProductType } from "@/types/ProductType"
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import Product from "../../components/Product"
import { ContextType } from "@/types/ContextType";


export default function Category({ searchParams }: SearchParamType) {
    const data = useContext(DataContext);
    const products = (data as ContextType).products
    const [sorting, setSorting] = useState("Recommended");
    const [sortedProducts, setSortedProducts] = useState<ProductType[]>(products);

    const filteredProducts = products?.filter(product => product.metadata.category === searchParams.category)
    const [sortedFilterProducts, setSortedFilterProducts] = useState<ProductType[]>(filteredProducts)

    useEffect(() => {
        setSortedProducts(products);
    }, [products]);

    // REFRESHING FILTERED PRODUCTS NOT WORKING!!!


    const handleSorting = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectValue = event.target.value
        setSorting(selectValue)
        let tempProducts = [...products];
        if (selectValue === "Recommended") {
            setSortedProducts(products)
        }
        if (selectValue === "LowToHigh") {
            setSortedProducts(tempProducts.sort((a, b) => a.unit_amount! - b.unit_amount!))
        }
        if (selectValue === "HighToLow") {
            setSortedProducts(tempProducts.sort((a, b) => b.unit_amount! - a.unit_amount!))
        }
    }

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

    if (searchParams.category === 'all') {
        return (
            <main >
                <nav className="flex justify-between">
                    <h1 className='mx-4 lg:mx-48 mb-6 text-2xl md:text-3xl font-black'>
                        {searchParams.category?.toUpperCase().replace(/1/g, " ")}
                    </h1>
                    <select
                        onChange={handleSorting}
                        value={sorting}
                        className="select select-bordered w-xs mx-4 lg:mx-48 mb-6 focus:outline-none">
                        <option value={"Recommended"}>Recommended</option>
                        <option value={"LowToHigh"}>Price Low to High</option>
                        <option value={"HighToLow"}>Price High to Low</option>
                    </select>
                </nav>
                <section className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
                    {sortedProducts?.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </section>

            </main>
        )
    }

    console.log("sortedFilterProducts: ", sortedFilterProducts)

    return (
        <>
            <main >
                <nav className="flex justify-between items-center">
                    <h1 className='mx-4 lg:mx-48 mb-6 text-2xl md:text-3xl font-black'>
                        {searchParams?.category?.toUpperCase().replace(/1/g, " ")}
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
                    {sortedFilterProducts?.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </section>
            </main>
        </>
    )
}