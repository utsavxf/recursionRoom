
import { Home, List, MessageCircle } from 'lucide-react'
import LoginButton from './LoginButton'
import AuthContextProvider from '@/lib/contexts/AuthContext'
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-7 py-3 border-b">
        <Link href={'/'}>
            {/* <img className="h-10" src="/image (1).png" alt="" />
             */}
             <h2 className='bg-blue-100 font-bold font-serif'>Recursion Room</h2>
        </Link>
        <ul className="flex gap-6 items-center">
            <Link href={'/'}>
                <li className='flex items-center gap-2'>
                    <Home />
                    Home
                </li>
            </Link>
            <Link href={'/categories'}>
                <li className='flex items-center gap-2'>
                    <List />
                    Categories
                </li>
            </Link>
            <Link href={'/'}>
                <li className='flex items-center gap-2'>
                    <MessageCircle />
                    Contact Us
                </li>
            </Link>
        </ul>
        <AuthContextProvider>
            <LoginButton />
        </AuthContextProvider>
    </nav>
  )
}

export default Header
