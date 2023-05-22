import Hydrate from './components/Hydrate'
import Navbar from './components/Navbar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import './globals.css'
import { Lato } from 'next/font/google'
import Footer from './components/Footer'
import DataProvider from './context';




const lato = Lato({ weight: ["400", "700", "900"], subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className={`${lato.className} `} >

      <Hydrate>
        <DataProvider>
          <Navbar user={session?.user} expires={session?.expires as string} />
          {children}
          <Footer />
        </DataProvider>
      </Hydrate>
    </html>
  )
}
