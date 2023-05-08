import Hydrate from './components/Hydrate'
import Navbar from './components/Navbar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import './globals.css'
import { Lato, Roboto } from 'next/font/google'


const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata = {
  title: 'Ecommerce',
  description: 'web store',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`mx-4 lg:mx-48 ${lato.className}`}>
        <Hydrate>
          <Navbar user={session?.user} expires={session?.expires as string} />
          {children}
        </Hydrate>
      </body>
    </html>
  )
}
