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
    const { category, brand, carbohydrate, country, fat, ingridients, kcal, kosher, protein, volume } = metadata
    return (

        <div className="bg-base-200">
            <Link href={{ pathname: `/product/${id}`, query: { id, name, unit_amount, image, description, category, brand, carbohydrate, country, fat, ingridients, kcal, kosher, protein, volume } }}>
                <Image
                    priority={true}
                    src={image}
                    alt={name}
                    width={300}
                    height={300}


                />
            </Link>
            <div className="py-2">
                <h1 className="text-lg font-black mx-4 text-primary">{unit_amount !== null ? formatPrice(unit_amount) : "N/A"}</h1>
                <h2 className="mx-4 font-bold">{name}</h2>
                <h2 className="mx-4">{volume}</h2>
            </div>
            <AddCart id={id} name={name} unit_amount={unit_amount} image={image} />
        </div>

    )
}

export default Product