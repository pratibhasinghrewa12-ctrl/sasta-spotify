import { createSlice, current } from "@reduxjs/toolkit";
import music from '../utils/songs.json'

let songReducer = createSlice({

    name: "song",
    initialState: {
        currentSong: null,
        isPlaying: false,
        musics: music,
        currentIndex: 0,


    }, 
    reducers: {

        addSong: (state, action) => {
            
            state.currentIndex = action.payload.index
            state.currentSong = action.payload.song
            state.isPlaying = true
        },
        play: (state) => {
            state.isPlaying = true
        },
        pause: (state) => {
            state.isPlaying = false
        },
        nextSong:(state)=>{

            if (state.currentIndex < state.musics.length - 1) {
                state.currentIndex += 1
                
            } else {
                state.currentIndex = 0
                
            }
            state.currentSong = state.musics[state.currentIndex]
            state.isPlaying = true

        },
        prevSong:(state)=>{

            if (state.currentIndex > 0) {
                state.currentIndex -= 1
                
            } else {
                state.currentIndex = state.musics.length - 1
                
            }
            state.currentSong = state.musics[state.currentIndex]
            state.isPlaying = true
        }


    }


})

export let {addSong,play,pause,nextSong,prevSong} = songReducer.actions
export default songReducer.reducer