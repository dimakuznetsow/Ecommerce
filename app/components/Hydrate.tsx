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