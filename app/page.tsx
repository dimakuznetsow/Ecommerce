import Stripe from 'stripe'
import Product from './components/Product'

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15"
  })
  const products = await stripe.products.list()

  const productsWithPrice = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id })
      return {
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: prices.data[0].unit_amount,
        currency: prices.data[0].currency,
      }
    }
    ))
  return productsWithPrice

}

export default async function Home() {
  const products = await getProducts()
  return (
    <main>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </main>
  )
}
