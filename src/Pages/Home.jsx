// import React from 'react'
// import musics from '../utils/songs.json'
// import { nanoid } from 'nanoid'
// import SongCard from '../components/SongCard'
// import { useSongs } from '../hooks/useSongs'


// const Home = () => {

//   let {handlePlay,audioRef} = useSongs()

//   let songs = musics.map((elem)=>{

//     return {...elem,id:nanoid()}

//   })

//   console.log(songs)

//   return (

//     <div className='py-5 px-2 justify-center flex flex-wrap gap-4 overflow-auto'>

//         {
//           songs.map((elem,index)=>{

//             return <SongCard handlePlay={handlePlay} index={index} audioRef={audioRef} key={elem.id} song={elem} />
//           })
//         } 
      
//     </div>
//   )
// }

// export default Home


import React from 'react'
import musics from '../utils/songs.json'
import { nanoid } from 'nanoid'
import SongCard from '../components/SongCard'
import { useSongs } from '../hooks/useSongs'

const Home = () => {

  let { handlePlay, audioRef} = useSongs()

  let songs = musics.map((elem) => {

    return { ...elem, id: nanoid() }

  })

  return (

    <div className='py-5 bg-black px-4 overflow-auto'>

      {/* Top Buttons */}
      <div className='flex items-center gap-3 mb-8'>

        <button className='bg-[#2a2a2a] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-white font-semibold duration-200'>
          All
        </button>

        <button className='bg-white text-black px-4 py-2 rounded-full font-semibold'>
          Music
        </button>

        <button className='bg-[#2a2a2a] hover:bg-[#3a3a3a] px-4 py-2 rounded-full text-white font-semibold duration-200'>
          Podcasts
        </button>

      </div>

      {/* Songs */}
      <div className='justify-center flex flex-wrap gap-4'>

        {
          songs.map((elem, index) => {

            return (
              <SongCard
                handlePlay={handlePlay}
                index={index}
                audioRef={audioRef}
                key={elem.id}
                song={elem}
              />
            )

          })
        }

      </div>

    </div>
  )
}

export default Home