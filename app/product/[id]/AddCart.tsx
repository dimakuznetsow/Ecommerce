'use client'

import { useCartStore } from "@/store"
import { AddCartType } from "@/types/AddCart"
import { useState } from "react"


function AddCart({ id, name, unit_amount, image, quantity }: AddCartType) {
    const CartStore = useCartStore()
    const [added, setAdded] = useState(false)
    const handleAddToCart = () => {
        CartStore.addProduct({ id, image, unit_amount, quantity, name })
        setAdded(true)
        setTimeout(() => {
            setAdded(false)
        }, 1000)
    }
    return (
        <>
            <button
                onClick={handleAddToCart}
                disabled={added}
                className="my-4 mx-4 btn btn-wide btn-primary"
            >
                {!added ? "Add to cart" : "Adding to cart"}
            </button>
        </>
    )
}

export default AddCart