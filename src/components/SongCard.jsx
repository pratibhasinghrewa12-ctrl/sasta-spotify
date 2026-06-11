
// import { useSongs } from '../hooks/useSongs'

// const SongCard = ({song,index,handlePlay,audioRef}) => {

//   return (

//     <div onClick={()=>handlePlay(song,index)} className='border w-40 p-2 rounded-md cursor-pointer group hover:bg-gray-800 hover:text-white ease-linear duration-300 ' >

//         <div>
//             <img className='w-35 scale-85 rounded-md hover:scale-95 ease-linear duration-300' src={song.thumbnail} alt="" />
        
//         </div>

//         <h1 className=' scale-90 line-clamp-1'>{song.title}</h1>
//         <h1 className=' scale-90 line-clamp-1'>{song.artist}</h1>
       
      
//     </div>
//   )
// }

// export default SongCard
 


import { Pause, Play } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { pause } from '../features/songReducer'

const SongCard = ({ song, index, handlePlay }) => {

  let { currentSong, isPlaying } = useSelector((store) => store.music)

  let isCurrentSong = currentSong?.title === song.title

  let dispatch = useDispatch()


  return (

    <div
      onClick={() => handlePlay(song, index)
      }
      
      className='bg-[#181818] hover:bg-[#282828] p-3 rounded-lg w-44 cursor-pointer duration-300 group'
    >
      {/* Image */}
      <div className='relative overflow-hidden rounded-lg'>

        <img
          className='w-full h-36 object-cover rounded-lg'
          src={song.thumbnail}
          alt=""
        />

        {/* Play / Pause Button */}
        <div
          className={`
            absolute right-2 duration-300
            ${isCurrentSong
              ? "opacity-100 bottom-3"
              : "opacity-0 bottom-1 group-hover:opacity-100 group-hover:bottom-3"
            }
          `}
        >

          <div
            className={`
              w-10 h-10 rounded-full flex items-center justify-center shadow-xl hover:scale-110 duration-200
              ${isCurrentSong && isPlaying
                ? "bg-white"
                : "bg-[#1ed760]"
              }
            `}
          >

            {
              isCurrentSong && isPlaying
                ? <Pause fill='black' color='black' size={18} />
                : <Play  fill='black' color='black' size={18} />
            }

          </div>

        </div>

      </div>

      {/* Content */}
      <div className='mt-3'>

        <h1 className='text-white font-semibold line-clamp-1'>
          {song.title}
        </h1>

        <p className='text-neutral-400 text-sm line-clamp-2'>
          {song.artist}
        </p>

      </div>

    </div>
  )
}

export default SongCard