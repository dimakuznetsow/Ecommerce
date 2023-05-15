'use client'

import { useCartStore } from "@/store";
import formatPrice from "@/util/PriceFormat";
import { PaymentElement, useStripe, useElements, AddressElement, LinkAuthenticationElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react"



function CheckoutForm({ clientSecret }: { clientSecret: string }) {
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading, setIsLoading] = useState(false)

    const cartStore = useCartStore()

    const totalPriceWithout899 = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity!;
    }, 0);
    const totalPrice =
        totalPriceWithout899 <= 3000
            ? totalPriceWithout899 + 899
            : totalPriceWithout899;


    const formatedPrice = formatPrice(totalPrice)

    useEffect(() => {
        if (!stripe) {
            return
        }
        if (!clientSecret) {
            return
        }
    }, [stripe])

    const handleSubmitForm = async (event: React.FormEvent) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        setIsLoading(true)

        stripe.confirmPayment({
            elements,
            redirect: "if_required",
        })
            .then((result) => {
                if (!result.error) {
                    cartStore.setCheckout("success")
                }
            })
        setIsLoading(false)

    }


    return (
        <form onSubmit={handleSubmitForm} id='payment-form' className="">
            <LinkAuthenticationElement
                id="link-authentication-element" />
            <PaymentElement id='payment-element' options={{ layout: "tabs" }} />
            <AddressElement id="address-element" options={{
                mode: 'billing',
                fields: {
                    phone: 'always',
                },
            }} />
            <div className="flex justify-between mt-4">
                <p className="text-lg font-bold">Total: </p>
                <p className="text-lg font-bold">
                    {totalPrice !== null ? formatPrice(totalPrice) : "N/A"}
                </p>
            </div>
            <button
                className="py-2 px-4 mt-4 w-full bg-primary text-white rounded-sm disabled:opacity-60"
                id='submit'
                disabled={isLoading || !stripe || !elements}
            >
                <span id="button-text">{isLoading ? <span>Processing...</span> : <span>Pay</span>}</span>
            </button>

        </form>
    )
}

export default CheckoutForm