'use client'

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCart"
import { useState } from "react"


function AddCart({ id, name, unit_amount, image, quantity }: AddCartType) {
    const CartStore = useCartStore()
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        CartStore
    }
    return (
        <>
            <button onClick={() => CartStore.addProduct({ id, image, unit_amount, quantity, name })} className="my-12 bg-blue-800 text-white py-2 px-4 font-medium rounded-sm">
                Add to cart
            </button>
        </>
    )
}

export default AddCart