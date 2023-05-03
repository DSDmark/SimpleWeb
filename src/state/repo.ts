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
  preferredTheme: "dark",
}

// fetching user data
export const getData = createAsyncThunk("getData", async (username?: string) => {
  try {

    if (username) {
      const res: AxiosResponse = await RepoServices.getUserInfo(username)
      return res.data;
    }
    else {
      let username = "DSDmark";
      const res: AxiosResponse = await RepoServices.getUserInfo(username);
      return res.data;
    }
  } catch (err) {
    console.log(err)
    let username = "DSDmark";
    const res: AxiosResponse = await RepoServices.getUserInfo(username);
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
      return { ...state, userInfo: action.payload, isLoading: true }
    }),
      builder.addCase(getData.pending, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getData.rejected, (state) => {
        state.isLoading = false;
      })
  }
})


export const { setTheme } = repoSlice.actions

export default repoSlice.reducer

