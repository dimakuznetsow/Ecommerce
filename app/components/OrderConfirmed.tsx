'use client'

import { useCartStore } from "@/store"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

function OrderConfirmed() {
    const cartStore = useCartStore()
    useEffect(() => {
        cartStore.setPaymentIntent("")
        cartStore.clearCart()
    }, [])

    return (
        <>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center my-12 text-gray-800"
            >
                <div className="p-12 text-center ">
                    <h1 className="text-xl font-medium">Your order has been placed!</h1>
                    <h2 className="text-sm my-4">Check your email for the receipt</h2>
                </div>
            </motion.div>
            <div className="flex justify-center">
                <Link href={"/dashboard"}>
                    <button
                        onClick={() => {
                            cartStore.toggleCart();
                            setTimeout(() => {
                                cartStore.setCheckout("cart");
                            }, 1000);
                        }}
                        className="py-2 px-4 bg-blue-800 text-white font-medium"
                    >
                        Check your order
                    </button>
                </Link>
            </div>
        </>
    )
}

export default OrderConfirmed