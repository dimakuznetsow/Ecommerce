'use client'

import { useThemeStore } from '@/store'
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
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </label>
                    </label>
                    <body data-theme={themeStore.mode} className=''>
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