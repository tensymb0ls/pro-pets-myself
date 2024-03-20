import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../../config/api";

// *get all posts
export const getPosts = createAsyncThunk(
  "posts/get_posts",
  async (_, { rejectWithValue }) => {
    // The underscore is used when creating get/post requests, in case there is no payload
    try {
      const responce = await $api.get("/posts");
      return responce.data;
    } catch (e: any) {
      return rejectWithValue(`${e.responce.data.message}`);
    }
  }
);

// *get post by id
export const getPostById = createAsyncThunk(
  "posts/get_post",
  async (id, { rejectWithValue }) => {
    try {
      const responce = await $api.get("/posts/" + id);
      return responce.data;
    } catch (e: any) {
      return rejectWithValue(`${e.responce.data.message}`);
    }
  }
);
