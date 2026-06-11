import { configureStore } from '@reduxjs/toolkit'
import songReducer from '../features/songReducer'

export let store = configureStore({

    reducer:{

        music:songReducer

    }
})