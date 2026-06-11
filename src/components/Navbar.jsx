// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between py-2 px-25 shadow-2xl'>

//         <div>🎵</div>

//         <div className='flex gap-2 items-center'>
//           <div className='border p-2 rounded-full'>🏠</div>
//           <input type="text" placeholder=' 🔍 What do you want to play ?' className='border py-2 px-10 rounded-2xl' />
//         </div>

//         <div className='flex gap-5'>
//           <div className='border rounded-2xl px-3 py-1'>Explore Premium</div>
//           <div className='border rounded-2xl px-3 py-1'>Install App</div>
//           <div>🔔</div>
//         </div>

//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import { Bell, Download, Home, Search, Users, Inbox, } from "lucide-react"
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white flex items-center justify-between px-4 py-1 border-b border-neutral-900'>

      {/* Left */}
      <div className='flex items-center'>
        <div className='text-white text-5xl cursor-pointer'>
          <i className="ri-spotify-fill"></i>
        </div>
      </div>

      {/* Center */}
      <div className='flex items-center gap-3 flex-1 justify-center'>

        {/* Home */}
        <div className='w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center cursor-pointer duration-200'>
          <Home size={22} fill='white' />
        </div>

        {/* Search */}
        <div className='bg-neutral-900 hover:bg-neutral-800 flex items-center gap-3 px-4 py-3 rounded-full w-[45%] duration-200 border border-transparent hover:border-neutral-700'>

          <Search size={22} className='text-neutral-400' />

          <input
            type="text"
            placeholder='What do you want to play?'
            className='bg-transparent outline-none w-full text-white placeholder:text-neutral-400'
          />

          <div className='h-6 w-[1px] bg-neutral-700'></div>

          <Inbox size={22} className='text-neutral-400 cursor-pointer' />
        </div>
      </div>

      {/* Right */}
      <div className='flex items-center gap-5'>

        <button className='bg-white text-black font-semibold px-6 py-3 rounded-full hover:scale-105 duration-200'>
          Explore Premium
        </button>

        <div className='flex items-center gap-2 text-neutral-300 hover:text-white cursor-pointer duration-200 font-medium'>
          <Download size={18} />
          <span>Install App</span>
        </div>

        <Bell
          size={20}
          className='text-neutral-300 hover:text-white cursor-pointer'
        />

        <Users
          size={20}
          className='text-neutral-300 hover:text-white cursor-pointer'
        />

        {/* Profile */}
        <div className='w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center font-bold cursor-pointer'>
          P
        </div>
      </div>
    </div>
  )
}

export default Navbar