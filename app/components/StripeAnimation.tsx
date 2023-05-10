import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"
import stripe from "@/public/Stripe.json"


function StripeAnimation() {
    return (
        <div className="flex items-center justify-center mt-20 h-16 w-full">
            <Player className="h-32 w-32" autoplay loop src={stripe}></Player>
        </div>
    )
}

export default StripeAnimation