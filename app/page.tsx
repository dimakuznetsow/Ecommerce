import Stripe from 'stripe'
import Product from './components/Product'
import Categories from './components/Categories'
import Carousel from './components/Carousel'



export default async function Home() {

  return (
    <>
      <Carousel />
      <Categories />

    </>
  )
}
