import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='text-white bg-purple-700 p-3 flex justify-between items-center'>
        <div className='text-xl transition-all hover:text-2xl flex items-center gap-1'>
            <Image width={40} height={40} src="/logo.png" alt='logo'/>
            <Link href="/"><b>BitLinks</b></Link>
        </div>
        <ul className='flex gap-5 items-center max-sm:gap-3 max-sm:text-sm'>
            <Link href="/"><li className='max-sm:hidden transition-all hover:text-xl'>Home</li></Link>
            <Link href="/shorten"><li className='transition-all hover:text-xl'>Shorten</li></Link>
            <Link href="/about"><li className='transition-all hover:text-xl'>About</li></Link>
            <Link href="/contact"><li className='transition-all hover:text-xl'>Contact Us</li></Link>
            <Link href="/shorten"><button className='max-lg:hidden bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold cursor-pointer'>Try Now</button></Link>
            <button className='max-lg:hidden bg-purple-500 shadow-lg p-2 py-1 rounded-lg font-bold cursor-pointer'><a target='_blank' href="https://github.com/nileXrana">GitHub</a></button>
        </ul>
    </nav>
  )
}

export default Navbar
