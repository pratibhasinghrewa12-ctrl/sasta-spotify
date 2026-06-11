import { useDispatch, useSelector } from "react-redux";
import { addSong, pause } from "../features/songReducer";
import { useEffect, useRef, useState } from "react";

export let useSongs = () => {
  let dispatch = useDispatch();

  let { currentSong, isPlaying } = useSelector((store) => store.music);

  let audioRef = useRef(new Audio());


  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0)
  console.log(duration)

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play();
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(()=>{
    let audio = audioRef.current

    let update = ()=>{
        setCurrentTime(audio.currentTime)
        setDuration(audio.duration || 0)
    }
    audio.addEventListener("timeupdate",update)
    
    return ()=>{
        audio.removeEventListener("timeupdate",update)
    }
  },[])

  let handlePlay = (song, index) => {
    dispatch(addSong({ song, index }));
  };


  let handleSeek = (e)=>{
    audioRef.current.currentTime = e.target.value
    console.log(e)
  }
  return {
    dispatch,
    audioRef,
    handlePlay,
    currentTime,
    duration,
    handleSeek
  };
};
