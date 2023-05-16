import { SearchParamType } from "@/types/SearchParamType"
import Stripe from "stripe"
import Product from "../../components/Product"




const getProducts = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15"
    })
    console.log(stripe)
    const products = await stripe.products.list()
    console.log(products)

    const productsWithPrice = await Promise.all(
        products.data.map(async (product) => {
            const prices = await stripe.prices.list({ product: product.id })
            return {
                id: product.id,
                name: product.name,
                unit_amount: prices.data[0].unit_amount,
                image: product.images[0],
                currency: prices.data[0].currency,
                description: product.description,
                metadata: product.metadata
            }
        }
        ))
    return productsWithPrice

}

export default async function Category({ searchParams }: SearchParamType) {
    const products = await getProducts()
    if (!products) {
        return (
            <div>no products</div>
        )
    }
    const filteredProducts = products.filter(product => product.metadata.category === searchParams.category)

    return (
        <main className='grid grid-cols-fluid gap-12 mx-4 lg:mx-48 justify-center mb-10'>
            {filteredProducts.map((product) => (
                <Product {...product} key={product.id} />
            ))}
        </main>
    )
}

