import { createSlice } from "@reduxjs/toolkit"
import { PostsData } from '../DummyData';

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: PostsData },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(
        (post) => post.id !== action.payload.id
      )
    },
  }
})

export default postSlice.reducer;
export const { addPost, deletePost } = postSlice.actions;
