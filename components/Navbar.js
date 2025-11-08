'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className='bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link href="/" className='group flex items-center gap-2 transition-all'>
            <div className='relative w-12 h-12 bg-white rounded-xl p-1.5 group-hover:scale-110 transition-transform shadow-md'>
              <Image width={40} height={40} src="/logo.png" alt='BitLinks Logo' className='w-full h-full object-contain'/>
            </div>
            <span className='text-2xl font-bold text-white group-hover:text-purple-100 transition-colors'>
              Bit<span className='text-purple-200'>Links</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            <Link href="/">
              <li className='text-white hover:text-purple-200 font-semibold transition-all hover:scale-110 cursor-pointer'>
                Home
              </li>
            </Link>
            <Link href="/shorten">
              <li className='text-white hover:text-purple-200 font-semibold transition-all hover:scale-110 cursor-pointer'>
                Shorten
              </li>
            </Link>
            <Link href="/about">
              <li className='text-white hover:text-purple-200 font-semibold transition-all hover:scale-110 cursor-pointer'>
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className='text-white hover:text-purple-200 font-semibold transition-all hover:scale-110 cursor-pointer'>
                Contact
              </li>
            </Link>
          </ul>

          {/* Desktop CTA Buttons */}
          <div className='hidden lg:flex items-center gap-3'>
            <Link href="/shorten">
              <button className='bg-white text-purple-700 px-6 py-2.5 rounded-lg font-bold hover:bg-purple-50 transition-all hover:scale-105 shadow-md'>
                Try Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white p-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {mobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='md:hidden py-4 border-t border-purple-500 animate-fadeIn'>
            <ul className='flex flex-col gap-4'>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <li className='text-white hover:text-purple-200 font-semibold py-2 px-4 hover:bg-purple-600 rounded-lg transition-all'>
                  Home
                </li>
              </Link>
              <Link href="/shorten" onClick={() => setMobileMenuOpen(false)}>
                <li className='text-white hover:text-purple-200 font-semibold py-2 px-4 hover:bg-purple-600 rounded-lg transition-all'>
                  Shorten
                </li>
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <li className='text-white hover:text-purple-200 font-semibold py-2 px-4 hover:bg-purple-600 rounded-lg transition-all'>
                  About
                </li>
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <li className='text-white hover:text-purple-200 font-semibold py-2 px-4 hover:bg-purple-600 rounded-lg transition-all'>
                  Contact
                </li>
              </Link>
              <div className='flex flex-col gap-3 mt-2'>
                <Link href="/shorten" onClick={() => setMobileMenuOpen(false)}>
                  <button className='w-full bg-white text-purple-700 px-6 py-2.5 rounded-lg font-bold hover:bg-purple-50 transition-all'>
                    Try Now
                  </button>
                </Link>
                <a target='_blank' href="https://github.com/nileXrana" rel="noopener noreferrer">
                  <button className='w-full bg-purple-800 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-purple-900 transition-all'>
                    GitHub
                  </button>
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
