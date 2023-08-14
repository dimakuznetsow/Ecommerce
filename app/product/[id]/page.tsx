
import Image from "next/image"
import { SearchParamType } from "@/types/SearchParamType"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"
import Link from "next/link"




function Product({ searchParams }: SearchParamType) {
    return (
        <>
            <div className="text-sm breadcrumbs mx-4 sm:mx-32 lg:mx-64">
                <ul>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link
                            href={{
                                pathname: `/category/${searchParams.category}`,
                                query: { category: searchParams.category }
                            }}
                            key={searchParams.category}>
                            {searchParams.category.charAt(0).toUpperCase() + searchParams.category.slice(1).replace(/1/g, " ")}
                        </Link>
                    </li>
                    <li>
                        {searchParams.name}
                    </li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 mx-4 sm:mx-32 lg:mx-64 mb-10">
                <div>
                    <h1 className="text-4xl font-black py-2">{searchParams.name.toUpperCase()}</h1>
                    <h2 className="mb-2 text-lg text-gray-500">{searchParams.volume}</h2>
                    <Image
                        priority={true}
                        src={searchParams.image}
                        alt={searchParams.name}
                        width={400}
                        height={400}
                        className="bg-base-200"
                    />
                </div>
                <div className="">
                    <div className="flex gap-1 items-center lg:mt-24">
                        <p className="font-black text-3xl text-primary">{searchParams.unit_amount !== null ? formatPrice(searchParams.unit_amount) : "N/A"} </p>
                        <AddCart {...searchParams} />
                    </div>
                    <div>
                        {searchParams.kcal && (<div>
                            <h1 className="font-black text-2xl mt-4">PER 100G</h1>
                            <div className="flex gap-8 mt-2">
                                <div>
                                    <p className="text-xl font-semibold">{searchParams.kcal}</p>
                                    <p className="text-sm text-gray-500 -mt-1">kcal</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{searchParams.protein}</p>
                                    <p className="text-sm text-gray-500 -mt-1">protein</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{searchParams.fat}</p>
                                    <p className="text-sm text-gray-500 -mt-1">fat</p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{searchParams.carbohydrate}</p>
                                    <p className="text-sm text-gray-500 -mt-1">carbohydrate</p>
                                </div>
                            </div>
                        </div>)}
                        <div>
                            <h1 className="font-black text-2xl mt-4">ABOUT ITEM</h1>
                            <div className="mt-2">
                                <div>
                                    <h2 className="text-sm text-gray-500">Brand, manufacturer</h2>
                                    <Link
                                        className="text-primary"
                                        href={{
                                            pathname: `/brand/${searchParams.brand}`,
                                            query: { brand: searchParams.brand }
                                        }}
                                        key={searchParams.brand}>
                                        {searchParams.brand.charAt(0).toUpperCase() + searchParams.brand.slice(1).replace(/1/g, " ")}
                                    </Link>

                                </div>
                                <div className="mt-2">
                                    <h2 className="text-sm text-gray-500">Country</h2>
                                    <p>{searchParams.country}</p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-sm text-gray-500">Ingridients</h2>
                                    <p className="w-auto lg:w-96">{searchParams.ingridients} </p>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-sm text-gray-500">Kosher Type</h2>
                                    <p>{searchParams.kosher}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>

    )
}

export default Product