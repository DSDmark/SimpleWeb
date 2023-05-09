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
  },
  repoInfo: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 10,
  },
  isLoading: false,
  preferredTheme: "dark",
}

// fetching user data
export const getUser = createAsyncThunk("getUser", async (username?: string) => {
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

// fetching repo data
export const getRepo = createAsyncThunk("getRepo", async (username = "DSDmar", page = 1, perPage = 10) => {
  let data = { username, page, perPage }

  try {
    if (username) {
      const res: AxiosResponse = await RepoServices.getRepo(data)
      return res.data;
    }
    else {
      const res: AxiosResponse = await RepoServices.getRepo(data);
      return res.data;
    }
  } catch (err) {
    console.log(err)
    const res: AxiosResponse = await RepoServices.getRepo(data);
    return res.data;
  }
})

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.preferredTheme = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.pagination.itemsPerPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, userInfo: action.payload, isLoading: true }
    }),
      builder.addCase(getUser.pending, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getUser.rejected, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getRepo.fulfilled, (state, action) => {
        return { ...state, repoInfo: action.payload, isLoading: true }
      }),
      builder.addCase(getRepo.pending, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(getRepo.rejected, (state) => {
        state.isLoading = false;
      })
  }
})


export const { setTheme, setCurrentPage, setItemsPerPage } = repoSlice.actions

export default repoSlice.reducer

