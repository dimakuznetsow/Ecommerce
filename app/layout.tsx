import Navbar from './components/Navbar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import './globals.css'


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
      <body className='mx-64'>
        <Navbar user={session?.user} expires={session?.expires as string} />
        {children}
      </body>
    </html>
  )
}
