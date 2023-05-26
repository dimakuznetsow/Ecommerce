
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import Modal from './components/Modal'
import Head from 'next/head'




export default function Home() {



  return (
    <>
      <main>
        <Carousel />
        {/* <Modal /> */}
        <Categories />
      </main>
    </>
  )
}
