import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IRepoState } from "../utils";
import RepoServices from "../services";

const initialState: IRepoState = {
  userInfo: {
    name: "",
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    email: null,
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    hireable: false,
    id: 0,
    location: "",
    login: "",
    repos_url: "",
    starred_url: "",
    twitter_username: null,
    url: "",
  }, isLoading: false,
  preferredTheme: "light",
}

// fetching user data
export const getData = createAsyncThunk("getData", async (username?: string) => {
  if (username) {
    const res: AxiosResponse = await RepoServices.getUserInfo(username)
    return res.data;
  }
  else {
    const res: AxiosResponse = await RepoServices.getUserInfo();
    return res.data;
  }
})

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.preferredTheme = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      return { ...state, userInfo: action.payload }
    }),
      builder.addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
  }
})


export const { setTheme } = repoSlice.actions

export default repoSlice.reducer

