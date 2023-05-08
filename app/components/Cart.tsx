'use-client'

import Image from "next/image"
import { useCartStore } from "@/store"
import formatPrice from "@/util/PriceFormat"
import { IoAddCircle, IoRemoveCircle, IoCloseCircle } from 'react-icons/io5'
import cart from "@/public/Cart.png"
import delivery from "@/public/Delivery.jpeg"
import { AnimatePresence, motion } from "framer-motion"
import Checkout from "./Checkout"





function Cart() {
    const cartStore = useCartStore()

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity!
    }, 0)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            onClick={() => cartStore.toggleCart()}
            className="fixed w-full h-screen left-0 top-0 bg-black/30">
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-full lg:w-2/5 h-screen p-12 overflow-scroll text-gray-800">
                <button onClick={() => { cartStore.toggleCart() }} className="text-blue-800 font-bold">Back to store</button>

                {cartStore.onCheckout === "cart" && (
                    <>
                        {cartStore.cart.map((item) => (
                            <div key={item.id} className="flex py-4 gap-4 w-full">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={72}
                                    height={72}
                                />
                                <div className="w-full">
                                    <div className="flex justify-between">
                                        <h2>
                                            {item.name}
                                        </h2>

                                        <button className="text-2xl text-red-600 ml-2" onClick={() => cartStore.deleteProduct({
                                            id: item.id,
                                            image: item.image,
                                            name: item.name,
                                            unit_amount: item.unit_amount,
                                            quantity: item.quantity,
                                        })
                                        }
                                        >
                                            <IoCloseCircle /></button>
                                    </div>
                                    <div className="flex ">
                                        <div className="flex gap-2 items-center">
                                            <button className="text-2xl " onClick={() => cartStore.removeProduct({
                                                id: item.id,
                                                image: item.image,
                                                name: item.name,
                                                unit_amount: item.unit_amount,
                                                quantity: item.quantity,
                                            })
                                            }
                                            >
                                                <IoRemoveCircle /></button>
                                            <div className="w-4 text-center "> {item.quantity}</div>
                                            <button className="text-2xl" onClick={() => cartStore.addProduct({
                                                id: item.id,
                                                image: item.image,
                                                name: item.name,
                                                unit_amount: item.unit_amount,
                                                quantity: item.quantity,
                                            })
                                            }
                                            >
                                                <IoAddCircle /></button>
                                        </div>
                                    </div>
                                    <p className="text-sm">
                                        {item.unit_amount !== null ? formatPrice(item.unit_amount) : "N/A"}
                                    </p>

                                </div>
                            </div>
                        ))}


                        {cartStore.cart.length > 0 && (<div className="flex py-4 gap-4 w-full">

                            <Image
                                src={delivery}
                                alt="delivery"
                                width={72}
                                height={72}
                            />
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <h2>Delivery</h2>
                                </div>
                                <div className="w-full">
                                    {totalPrice < 3000 ? (
                                        <p className="text-sm">${`8.99`}</p>
                                    ) : (
                                        <p className="text-sm">
                                            <span className="line-through text-gray-400">${`8.99`}</span>
                                            <span className="text-gray-800 ml-1">{` $0`}</span>
                                        </p>
                                    )}
                                </div>
                            </div>

                        </div>)}
                    </>
                )}
                {cartStore.cart.length > 0 && (
                    <>
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total: </p>
                            <p className="text-lg font-bold">
                                {totalPrice !== null
                                    ? formatPrice(totalPrice > 3000 ? totalPrice : totalPrice + 899)
                                    : "N/A"}
                            </p>
                        </div>
                        <button
                            onClick={() => cartStore.setCheckout("checkout")}
                            className="py-2 mt-4 bg-blue-800 text-white w-full rounded-sm"
                        >
                            Checkout
                        </button>
                    </>
                )}
                {cartStore.onCheckout === "checkout" && <Checkout />}
                <AnimatePresence>
                    {!cartStore.cart.length && (
                        <motion.div
                            animate={{ scale: 1, rotateZ: 0, opacity: 0.75 }}
                            initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
                            exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}

                            className="flex flex-col items-center pt-28">
                            <Image
                                src={cart}
                                alt="empty-cart"
                                width={400}
                                height={400}
                            />
                            <h1 className="text-3xl font-medium">Your cart is empty</h1>
                            <h2 className="text-sm pt-4">Products you order will appear here.</h2>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Cart