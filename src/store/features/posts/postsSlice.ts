import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getPostById, getPosts } from "./postsService";

export type Post = {
  id: string;
  author: string;
  date: string;
  content: string;
  __v: number;
  picture?: string;
};
export interface PostsState {
  posts: Post[];
  post: Post;
  isPostsLoading: boolean;
  postsErrorMessage: string;
}

const initialState: PostsState = {
  posts: [],
  post: {
    id: "",
    author: "",
    date: "",
    content: "",
    __v: 0,
  },
  isPostsLoading: false,
  postsErrorMessage: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isPostsLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isPostsLoading = false;
        state.postsErrorMessage = String(action.payload);
      })
      .addCase(getPostById.pending, (state) => {
        state.isPostsLoading = true;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.isPostsLoading = false;
        state.post = action.payload;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.isPostsLoading = false;
        state.postsErrorMessage = String(action.payload);
      });
  },
});

export default postsSlice.reducer;
