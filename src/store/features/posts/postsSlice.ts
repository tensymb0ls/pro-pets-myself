import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Post = {
author: string
date: string
content: string
picture?: Blob
}
export interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
    posts:[]
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
      builder
        .addCase()
        .addCase()
        .addCase()
      
    },

})

export default postsSlice.reducer