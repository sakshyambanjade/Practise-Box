import React from 'react'
import { createSlice} from "@reduxjs/toolkit";
export default function postSlice() {
    const initialState= [
        {
            id : '1', title : 'Hello world' , content:"lorem ko"
        },
        {
            id : '2', title : 'Hello world 2' , content:"lorem ko 2"
        }
    ]
    const postSlice = createSlice({
        name: ' post',
        initialState: initialState,
        reducers:{}
    })
 
}
