
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import Modal from './components/Modal'



export default async function Home() {

  return (
    <>
      <div>
        <Carousel />
        <Modal />
        <Categories />
      </div>
    </>
  )
}
