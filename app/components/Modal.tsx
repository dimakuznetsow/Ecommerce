'use client'

import { IoMailOutline, IoCall, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5"
import Image from "next/image"

import DarkTheme from "./DarkTheme"
import visa from "@/public/paymentMethod/Visa.png"
import mastercard from "@/public/paymentMethod/MasterCard.png"
import amex from "@/public/paymentMethod/AmEx.png"
import diners from "@/public/paymentMethod/Diners.png"
import jcb from "@/public/paymentMethod/JCB.png"
import unionpay from "@/public/paymentMethod/UnionPay.png"
import Link from "next/link"





function Footer() {

    return (
        <>
            <footer className="hidden lg:block">
                <div className="flex items-end bg-base-300 py-4 pl-4 lg:pl-48">
                    <div className="flex justify-between w-full items-end pr-4 lg:pr-36">

                        {/* contacts */}
                        <ul className="">
                            <div className="font-semibold">Contact us</div>
                            <li className="flex items-center gap-2 my-2">
                                <IoMailOutline />
                                <span className="text-sm">
                                    <a href="mailto:info@aleph.express">info@aleph.express</a>
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCall />
                                <span className="text-sm">
                                    <a href="tel:+972587958029">+972 58 795 8029</a>
                                </span>
                            </li>
                            <li className="flex gap-2 text-2xl mt-2">
                                <IoLogoInstagram />
                                <IoLogoFacebook />
                            </li>
                        </ul>
                        {/* payment */}
                        <div className="">
                            <div className="flex gap-1">
                                <Image
                                    src={visa}
                                    alt="visa"
                                    width={36}
                                    height={36}
                                />
                                <Image
                                    src={mastercard}
                                    alt="mastercard"
                                    width={36}
                                    height={36}
                                />
                                <Image
                                    src={amex}
                                    alt="amex"
                                    width={36}
                                    height={36}
                                />
                                <Image
                                    src={diners}
                                    alt="diners"
                                    width={36}
                                    height={36}
                                />
                                <Image
                                    src={jcb}
                                    alt="jcb"
                                    width={36}
                                    height={36}
                                />
                                <Image
                                    src={unionpay}
                                    alt="unionpay"
                                    width={36}
                                    height={36}
                                />

                            </div>
                        </div>
                        {/* about */}
                        <ul className="">
                            <div className="font-semibold">About</div>
                            <li className="flex items-center gap-2 text-sm my-2">
                                Our story
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                Shipping
                            </li>
                            <li className="flex items-center gap-2 text-sm mt-2">
                                Payments
                            </li>
                        </ul>
                    </div>
                    <div className="pr-8 h-6 z-0">
                        <DarkTheme />
                    </div>
                </div>
            </footer>
            < footer className="bg-base-300 block lg:hidden" >
                <div className="flex justify-around mx-4 py-4">
                    {/* contacts */}
                    <ul className="">
                        <div className="font-semibold mb-2">Contact us</div>
                        <li className="flex items-center gap-2">
                            <IoMailOutline />
                            <span className="text-sm">
                                <a href="mailto:info@aleph.express">info@aleph.express</a>
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <IoCall />
                            <span className="text-sm my-2">
                                <a href="tel:+972587958029">+972 58 795 8029</a>
                            </span>
                        </li>
                        <li className="flex text-2xl gap-2">
                            <IoLogoInstagram />
                            <IoLogoFacebook />
                        </li>
                    </ul>
                    {/* about */}
                    <ul className="">
                        <div className="font-semibold mb-2">About</div>
                        <li className="flex items-center text-sm">
                            Our story
                        </li>
                        <li className="flex items-center text-sm my-2">
                            Shipping
                        </li>
                        <li className="flex items-center text-sm">
                            Payments
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center pt-4">
                    <div className="flex gap-1">
                        <Image
                            src={visa}
                            alt="visa"
                            width={36}
                            height={36}
                        />
                        <Image
                            src={mastercard}
                            alt="mastercard"
                            width={36}
                            height={36}
                        />
                        <Image
                            src={amex}
                            alt="amex"
                            width={36}
                            height={36}
                        />
                        <Image
                            src={diners}
                            alt="diners"
                            width={36}
                            height={36}
                        />
                        <Image
                            src={jcb}
                            alt="jcb"
                            width={36}
                            height={36}
                        />
                        <Image
                            src={unionpay}
                            alt="unionpay"
                            width={36}
                            height={36}
                        />
                    </div>
                </div>
                <div className="z-0 flex justify-end p-4">
                    <DarkTheme />
                </div>
            </footer >
        </>
    )
}

export default Footer