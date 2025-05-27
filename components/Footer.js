"use client"
import React from 'react'

const Footer = () => {
    return (
        <div className="w-full text-center p-4 text-white text-sm fixed bottom-0 bg-purple-700 flex items-center justify-center">
            Made with <lord-icon
                src="https://cdn.lordicon.com/gbkitytd.json"
                trigger="loop"
                delay="1000"
                colors="primary:#e83a30"
                style={{ width: '25px', height: '25px' }}
            >
            </lord-icon>
            by
            <span className='ml-1'>

            <a
                href="https://www.linkedin.com/in/nilexrana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md underline transition-all hover:text-xl"
            >
                <b>nileXrana</b>

            </a>
            </span>
        </div>
    )
}

export default Footer
