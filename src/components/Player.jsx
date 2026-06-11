import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong, pause, play, prevSong } from "../features/songReducer";
import { useSongs } from "../hooks/useSongs";

const Player = () => {
  let { currentSong, isPlaying } = useSelector((store) => store.music);
  let dispatch = useDispatch();
  let { currentTime, duration, handleSeek  } = useSongs();

  let min = Math.floor(currentTime / 60)
  let sec = Math.floor(currentTime % 60)

  if(sec < 10){
    sec = "0" + sec
  }

  let dmin = Math.floor(duration / 60)
  let dsec = Math.floor(duration % 60)

  if(dsec < 10){
    dsec = "0" + dsec
  }
  

  return (
    <div className="px-2 py-1 grid grid-cols-[1fr_3fr_1fr] gap-2 bg-black">
      <div className="flex text-white items-center gap-2 shadow-2xl">
        <div>
          <img
            className="w-10 rounded-xs"
            src={currentSong?.thumbnail}
            alt=""
          />
        </div>
        <div>
          <h1 className="line-clamp-1">{currentSong?.title}</h1>
          <h1 className="line-clamp-1">{currentSong?.artist}</h1>
        </div>
      </div>

      {/* <div className='bg-red-500 flex justify-center py-2 gap-2'>

        <div onClick={() => dispatch(prevSong())}><SkipBack /></div>

        <div>
          {
            isPlaying ? <Pause onClick={() => dispatch(pause())} /> : <Play onClick={() => dispatch(play())} />
          }
        </div>

        <div onClick={() => dispatch(nextSong())}><SkipForward /></div>

      </div> */}

      <div className="flex flex-col items-center gap-2 w-full">
        {/* Controls */}
        <div className="flex items-center gap-6 text-white">
          <i className="ri-shuffle-line text-xl hover:text-[#1ed760] cursor-pointer duration-200"></i>

          <div onClick={() => dispatch(prevSong())}>
            <SkipBack
              size={22}
              className="cursor-pointer hover:text-[#1ed760] duration-200"
            />
          </div>

          <div className="bg-white text-black rounded-full p-2 hover:scale-105 duration-200 cursor-pointer">
            {isPlaying ? (
              <Pause fill="black" size={20} onClick={() => dispatch(pause())} />
            ) : (
              <Play fill="black" size={20} onClick={() => dispatch(play())} />
            )}
          </div>

          <div onClick={() => dispatch(nextSong())}>
            <SkipForward
              size={22}
              className="cursor-pointer hover:text-[#1ed760] duration-200"
            />
          </div>

          <i className="ri-repeat-line text-xl hover:text-[#1ed760] cursor-pointer duration-200"></i>
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-3 w-full max-w-150">
          {/*

    <div className='flex-1 h-1 bg-neutral-600 rounded-full overflow-hidden cursor-pointer'>

      <div className='w-[2%] h-full bg-white rounded-full'></div>

    </div>

    */}

          <span className="text-sm text-neutral-400">
            {
                `${min}:${sec}`
            } 

            
          </span>

          <input
            type="range"
            min="0"
            value={currentTime}
            max={duration}
            onChange={handleSeek}
            className="w-full"
          />

          <span className="text-sm text-neutral-400">{`${dmin}:${dsec}`}</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 text-white">
        <i className="ri-mic-line text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>

        <i className="ri-list-check-2 text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>

        <i className="ri-play-list-2-line text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>

        <i className="ri-volume-up-line text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>

        {/* Volume Line */}
        <div className="w-28 h-1 bg-neutral-500 rounded-full overflow-hidden cursor-pointer">
          <div className="w-[70%] h-full bg-white rounded-full"></div>
        </div>

        <i className="ri-picture-in-picture-line text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>

        <i className="ri-fullscreen-line text-xl cursor-pointer hover:text-[#1ed760] duration-200"></i>
      </div>
    </div>
  );
};

export default Player;
