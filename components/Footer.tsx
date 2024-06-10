import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center gap-6 text-cente md:flex-row md:justify-between items-center py-10 bg-transparent w-full">
        <div className='flex flex-col items-center md:items-start gap-5'>
            <p>&copy; 2024 Vimerge Studio</p>
            <div className='flex items-center gap-8'>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Subscribe to our Newsletter</Link>
            </div>
        </div>
        <div className='flex items-center gap-6'>
            <Link href="/">Instagram</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">X</Link>
            <Link href="/">Facebook</Link>
        </div>
    </footer>
  )
}

export default Footer