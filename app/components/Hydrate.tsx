'use client'

import { useThemeStore } from '@/store'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'


function Hydrate({ children }: { children: ReactNode }) {
    const [isHydrated, setIsHydrated] = useState(false)
    const themeStore = useThemeStore()
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <>
            {isHydrated ?
                <>

                    <body data-theme={themeStore.mode} className=''>
                        <form action="">
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <label htmlFor="my-modal-6" className="modal cursor-pointer flex flex-col justify-center">
                                <label className="modal-box relative" htmlFor="">
                                    <h3 className="text-3xl font-black mb-8">10% OFF YOUR FIRST ORDER</h3>
                                    <p className='mb-6'>You got to try it! Receive 10% off your first order now!</p>
                                    <p className='text-xs text-base-content mb-4'>We reserve the right to cancel the promotion at any time at its sole discretion</p>
                                    <label htmlFor="my-modal-6" className="btn btn-primary gap-2">
                                        Order
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>

                                    </label>
                                </label>
                            </label>
                        </form>
                        {children}
                    </body>

                </> :
                <body>
                </body>
            }
        </>
    )
}

export default Hydrate