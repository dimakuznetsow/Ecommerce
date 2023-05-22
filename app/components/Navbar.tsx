'use client'

import { Session } from "next-auth"
import { signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import Cart from "./Cart"
import { useCartStore } from "@/store"
import { AiTwotoneShopping } from "react-icons/ai"
import { AnimatePresence, motion } from "framer-motion"
import Menu from "./Menu"
import { useContext } from 'react';
import { DataContext } from '../context';

function Navbar({ user }: Session) {
    const cartStore = useCartStore()

    return (
        <nav className="flex justify-between items-center py-12 px-4 lg:px-48">
            <ul className="flex items-center gap-8">
                <Link href={"/"}>
                    <h1 className="text-primary text-4xl font-black">א<span className="text-4xl font-bold">leph</span></h1>
                </Link>
                <Menu />
            </ul>


            <ul className="flex items-center gap-8">

                {/* toggle the cart */}
                <li onClick={() => cartStore.toggleCart()} className="flex items-center text-3xl relative cursor-pointer">
                    <AiTwotoneShopping />
                    <AnimatePresence>
                        {cartStore.cart.length > 0 && (
                            <motion.span
                                animate={{ scale: 1 }}
                                initial={{ scale: 0 }}
                                exit={{ scale: 0 }}
                                className="bg-primary text-white text-sm font-bold w-5 h-5  rounded-full absolute left-4 bottom-4 text-center">
                                {cartStore.cart.length}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </li>
                {/* if no user */}
                {!user && (
                    <li className="bg-primary text-white py-2 px-4 rounded-sm">
                        <button onClick={() => signIn()}>Sign in</button>
                    </li>
                )}
                {user && (
                    <li className="h-9">
                        <div className="dropdown dropdown-end cursor-pointer">
                            <Image
                                src={user?.image as string}
                                alt={user.name as string}
                                width={36}
                                height={36}
                                className="rounded-full"
                                tabIndex={0}
                            />
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu  p-4 space-y-4 rounded-box w-72 bg-base-200 shadow"
                            >

                                <Link
                                    className="hover:bg-base-300 p-4 rounded-md"
                                    href={'/dashboard'}
                                    onClick={() => {
                                        if (document.activeElement instanceof HTMLElement) {
                                            document.activeElement.blur()
                                        }
                                    }}
                                >
                                    Orders
                                </Link>
                                <li
                                    onClick={() => {
                                        if (document.activeElement instanceof HTMLElement) {
                                            document.activeElement.blur()
                                        }
                                        signOut()
                                    }}
                                    className="hover:bg-base-300 p-4 rounded-md"
                                >
                                    Sign out
                                </li>

                            </ul>
                        </div>
                    </li>
                )}
            </ul>
            <AnimatePresence>
                {cartStore.isOpen && <Cart />}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar