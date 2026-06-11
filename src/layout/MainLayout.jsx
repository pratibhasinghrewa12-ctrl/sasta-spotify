import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Player from '../components/Player'
import { useSelector } from 'react-redux'

const MainLayout = () => {

 let {currentSong} = useSelector((store)=>store.music)

  return (

    <div className='h-screen flex flex-col gap-2 bg-black/80'>

      <Navbar />

      <div className=' px-2 h-[75%] grid grid-cols-[1fr_3fr_1fr] gap-2 '>

        <div className='bg-[#121212] rounded-lg p-2 flex flex-col gap-2 overflow-auto'>

          {/* Top */}
          <div className='flex items-center justify-between text-white'>

            <h1 className='font-bold text-lg'>
              Your Library
            </h1>

            <div className='w-9 h-9 rounded-full hover:bg-[#1f1f1f] flex items-center justify-center cursor-pointer duration-200'>
              <i className="ri-add-line text-xl"></i>
            </div>

          </div>

          {/* Card 1 */}
          <div className='bg-[#1f1f1f] rounded-xl p-5 flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>

              <h1 className='text-white font-bold text-lg'>
                Create your first playlist
              </h1>

              <p className='text-neutral-300 text-sm'>
                It's easy, we'll help you
              </p>

            </div>

            <button className='bg-white text-black font-bold px-4 py-3 rounded-full w-fit hover:scale-105 duration-200'>
              Create playlist
            </button>

          </div>

          {/* Card 2 */}
          <div className='bg-[#1f1f1f] rounded-xl p-5 flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>

              <h1 className='text-white font-bold text-lg leading-8'>
                Let's find some podcasts to follow
              </h1>

              <p className='text-neutral-300 text-sm'>
                We'll keep you updated on new episodes
              </p>

            </div>

            <button className='bg-white text-black font-bold px-4 py-3 rounded-full w-fit hover:scale-105 duration-200'>
              Browse podcasts
            </button>

          </div>

        </div>

        <div className='border rounded-md overflow-auto'>

          <Outlet />

        </div>

        <div className='bg-black rounded-lg p-2 text-white flex flex-col gap-4'>

          <h1 className='text-3xl font-bold line-clamp-1'>
            {currentSong?.title}
          </h1>
            <h1 className='line-clamp-1'>{currentSong?.artist}</h1>

          <div className=' rounded-md flex items-center overflow-hidden'>

  {
    currentSong?.thumbnail && (
      <img
        className='w-full h-[250px] object-cover rounded-lg'
        src={currentSong?.thumbnail}
        alt=""
      />
    )
  }

</div>

        </div>

      </div>

      <Player />

    </div>
  )
}

export default MainLayout
