import Image from "next/image"

function Product({ name, image, price }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
            />
        </div>
    )
}

export default Product