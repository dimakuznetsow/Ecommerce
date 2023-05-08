import formatPrice from "@/util/PriceFormat"
import Image from "next/image"
import { ProductType } from "@/types/ProductType"
import Link from "next/link"
import AddCart from "../product/[id]/AddCart"


function Product({
    id,
    name,
    unit_amount,
    image,
    description,
    metadata }: ProductType) {
    const { features } = metadata
    return (
        <div className="text-gray-800">
            <Link href={{ pathname: `/product/${id}`, query: { id, name, unit_amount, image, description, features } }} >
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                />
            </Link>
            <div className="font-medium py-2">
                <h1>{name}</h1>
                <h2 className="text-sm text-blue-800">{unit_amount !== null ? formatPrice(unit_amount) : "N/A"}</h2>
            </div>
            <AddCart id={id} name={name} unit_amount={unit_amount} image={image} />
        </div >
    )
}

export default Product