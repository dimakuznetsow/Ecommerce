
import Categories from './components/Categories'
import Carousel from './components/Carousel'



export default async function Home() {

  return (
    <>
      <Carousel />
      <label htmlFor="my-modal-4" className="btn">open modal</label>
      <Categories />
    </>
  )
}
