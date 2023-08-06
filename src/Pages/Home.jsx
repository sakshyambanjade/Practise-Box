import React, { Component } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../Components/Post/postSlice'

export 
      const Home = configureStore({
        reducers:{
            posts : postReducer
        }
})
