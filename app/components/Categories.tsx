import Stripe from 'stripe'
import Link from 'next/link'


const getCategories = async () => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15"
    })
    const products = await stripe.products.list()


    const categories = await Promise.all(
        products.data.map(async (product) => {
            return product.metadata.category
        }
        ))

    return categories

}

export default async function Categories() {
    const categories = await getCategories()
    const uniqueCategories = [...new Set(categories)] // create a new array with only unique categories


    return (
        <>
            <div className='flex justify-between mx-4 lg:mx-48 items-end  mb-2' >
                <h1 className='text-3xl font-black'>SMALL BITES:</h1>
                <Link href={{ pathname: `/category/all` }}>
                    <div className="badge badge-outline">All ></div>
                </Link>

            </div>
            <main className='grid grid-cols-fluid gap-8 px-4 lg:px-48 mb-10 z-0'>
                {uniqueCategories.length > 0 && (
                    <>
                        {uniqueCategories.map((category) => {
                            return (
                                <Link href={{ pathname: `/category/${category}`, query: { category } }} key={category}>
                                    <div className="z-0 rounded-lg">
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
                    </>
                )}
            </main>
        </>

    )
}