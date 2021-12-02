import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Navbar() {
    return (
        <nav 
        className='bg-black flex justify-between py-4 px-4 text-white'>
            {/* logo */}
            <div className='logo-wrapper'>
                {/* logo icon */}
                <a href="/" 
                className='text-2xl font-black'>
                    tekki 
                </a>
            </div>
            {/* Search box */}
            <div className='input-wrapper'>
                <form>
                <input spellCheck='true'
                 autoComplete='true' 
                 placeholder='search laptop name' 
                 className='border p-1 rounded text-black'

                 />
                <buton
                className="p-2 bg-red-600 rounded cursor-pointer">
                    search 
                </buton>
                </form>
            </div>

        </nav>
    )
}

export default Navbar