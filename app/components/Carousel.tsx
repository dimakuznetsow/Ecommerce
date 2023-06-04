import snacks from "@/public/Snacks.png"
import chocolates from "@/public/Chocolates.png"
import teaAndCoffee from "@/public/TeaAndCoffee.png"
import Link from "next/link"


function Carousel() {


    return (
        <div className="carousel  mb-10 mx-4 lg:mx-48">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Delivery.png" className="w-full hidden lg:block" />
                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Delivery-xs.png" className="w-full block lg:hidden" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="" className=""></a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">

                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Bissli.jpg" className="w-full hidden lg:block" />
                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Bissli-xs.png" className="w-full block lg:hidden" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Bamba.png" className="w-full hidden lg:block" />
                <img src="https://ecommerce-aleph.s3.eu-west-1.amazonaws.com/Bamba-xs.png" className="w-full block lg:hidden" />


                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>

                </div>
            </div>

        </div>
    )
}

export default Carousel