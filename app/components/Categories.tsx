'use client'
import { useContext } from 'react';
import { DataContext } from '../context';
import { ContextType } from "@/types/ContextType";
import Link from 'next/link'



export default function Categories() {
    const data = useContext(DataContext);
    const uniqueCategories = new Set((data as ContextType).products?.map(product => product.metadata.category));


    console.log(data)

    if ((data as ContextType).loading) {
        return (
            <>
                <div className='flex justify-between items-center mx-4 lg:mx-48 mb-2' >
                    <div className="w-48 h-9 rounded-2xl bg-base-200 animate-pulse"></div>
                    <div className="w-12 h-6 rounded-3xl bg-base-200 animate-pulse"></div>

                </div>
                <section className='grid grid-cols-fluid gap-8 px-4 lg:px-48 mb-10 z-0'>
                    <div className="z-0 rounded-xl">
                        <div className="bg-base-200 w-full h-56 md:h-40 rounded-2xl animate-pulse"></div>
                    </div>
                    <div className="z-0 rounded-xl">
                        <div className="bg-base-200 w-full h-56 md:h-40 rounded-2xl animate-pulse"></div>
                    </div>
                    <div className="z-0 rounded-xl">
                        <div className="bg-base-200 w-full h-56 md:h-40 rounded-2xl animate-pulse"></div>
                    </div>
                </section>
            </>
        )
    }
    return (
        <>
            <div className='flex justify-between items-center mx-4 lg:mx-48 mb-2' >
                <h1 className='text-3xl font-black'>SMALL BITES:</h1>
                <Link href={{ pathname: `/category/all`, query: { category: "all" } }}>
                    <div className="badge badge-outline">All ></div>
                </Link>

            </div>
            <section className='grid grid-cols-fluid gap-8 px-4 lg:px-48 mb-10 z-0'>
                {Array.from(uniqueCategories).map((category) => {
                    return (
                        <Link href={{ pathname: `/category/${category}`, query: { category } }} key={category}>
                            <div className="z-0 rounded-xl">
                                <figure className='relative card'>
                                    <img src={`https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/${category}.webp`} alt={category.replace(/1/g, " ")} />
                                    <div className="absolute px-4 py-3 text-base">
                                        <h2 className="card-title text-gray-800">{category.toUpperCase().replace(/1/g, " ")}</h2>
                                    </div>
                                </figure>
                            </div>
                        </Link>
                    )
                })
                }
            </section>
        </>

    )
}