import Image from "next/image"
import { SearchParamType } from "@/types/SearchParamType"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"




function Product({ searchParams }: SearchParamType) {

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24  text-gray-800">
            <Image
                src={searchParams.image}
                alt={searchParams.name}
                width={400}
                height={400}
            />
            <div className="font-medium text-gray-800">
                <h1 className="text-2xl font-medium py-2">{searchParams.name}</h1>
                <p className="py-2">{searchParams.description}</p>

                <div className="flex gap-2">
                    <p className="font-bold text-blue-800">{searchParams.unit_amount !== null ? formatPrice(searchParams.unit_amount) : "N/A"} </p>
                </div>
                <AddCart {...searchParams} />
            </div >
        </div >
    )
}

export default Product