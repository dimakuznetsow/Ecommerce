'use client'

import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"



function Navbar({ user }: Session) {
    return (
        <nav className="flex justify-between items-center py-8">
            <Link href={"/"}>
                <h1 className="text-gray-800">Ecommerce</h1>
            </Link>
            <ul className="flex items-center gap-12">
                {/* if no user */}
                {!user && (
                    <li className="bg-blue-800 text-white py-2 px-4 rounded-sm">
                        <button onClick={() => signIn()}>Sign in</button>
                    </li>
                )}

                {user && (
                    <li>
                        <Image
                            src={user?.image as string}
                            alt={user.name as string}
                            width={48}
                            height={48}
                            className="rounded-full" />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar