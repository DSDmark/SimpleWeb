import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { IRepoState } from "../utils";
import RepoServices from "../services";
import { IPageData } from "@/utils/interface";

const initialState: IRepoState = {
  userInfo: {
    data: {
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
      public_repos: 0,
      login: "",
      repos_url: "",
      starred_url: "",
      twitter_username: null,
      url: "",
    },
    isLoading: false,
  },
  repoInfo: {
    data: {
      topics: [],
      language: "",
      url: "",
      downloads_url: "",
      forks_count: 0,
      html_url: "",
      id: 0,
      name: "",
      description: "",
      open_issues_count: 0,
      stargazers_count: 0,
      default_branch: "",
    },
    isLoading: false,
  },
  pagination: {
    data: {
      currentPage: 1,
      itemsPerPage: 6,
    },
    isLoading: false,
  },
  login_followers: {
    data: {
      id: 0,
      login: "",
      html_url: "",
      avatar_url: "",
    },
    isLoading: false,
  },
  login_following: {
    data: {
      id: 0,
      login: "",
      html_url: "",
      avatar_url: "",
    },
    isLoading: false,
  },
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

export const getRepoInfo = createAsyncThunk("getRepoInfo", async (params: IPageData) => {
  let res: AxiosResponse;
  try {
    if (params.username) {
      res = await RepoServices.getRepo(params)
      return res.data;

    } else {
      params.username = "DSDmark";
      res = await RepoServices.getRepo(params)
      return res.data;
    }
  } catch (err) {
    params.username = "DSDmark"
    res = await RepoServices.getRepo(params);
    return res.data;
  }
})

export const getFollowerInfo = createAsyncThunk("getFollowerInfo", async (params: IPageData) => {
  let res: AxiosResponse;
  try {
    if (params.username) {
      res = await RepoServices.getFollowers(params)
      return res.data;

    } else {
      params.username = "DSDmark";
      res = await RepoServices.getFollowers(params)
      return res.data;
    }
  } catch (err) {
    params.username = "DSDmark"
    res = await RepoServices.getFollowers(params);
    return res.data;
  }
})

export const getFollowingInfo = createAsyncThunk("getFollowingInfo", async (params: IPageData) => {
  let res: AxiosResponse;
  try {
    if (params.username) {
      res = await RepoServices.getFollowing(params)
      return res.data;

    } else {
      params.username = "DSDmark";
      res = await RepoServices.getFollowing(params)
      return res.data;
    }
  } catch (err) {
    params.username = "DSDmark"
    res = await RepoServices.getFollowing(params);
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
    setPageValue: (state, action) => {
      state.pagination.data.itemsPerPage = action.payload.perPage
      state.pagination.data.currentPage = action.payload.page
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      return {
        ...state, userInfo: { data: { ...action.payload }, isLoading: true }
      }
    }),
      builder.addCase(getUser.pending, (state) => {
        state.userInfo.isLoading = false;
      }),
      builder.addCase(getUser.rejected, (state) => {
        state.userInfo.isLoading = false;
      }),
      builder.addCase(getRepoInfo.fulfilled, (state, action) => {
        return { ...state, repoInfo: { data: { ...action.payload }, isLoading: true } }
      }),
      builder.addCase(getRepoInfo.pending, (state) => {
        state.repoInfo.isLoading = false;
      }),
      builder.addCase(getRepoInfo.rejected, (state) => {
        state.repoInfo.isLoading = false;
      }),
      builder.addCase(getFollowerInfo.fulfilled, (state, action) => {
        return { ...state, login_followers: { data: { ...action.payload }, isLoading: true } }
      }),
      builder.addCase(getFollowerInfo.pending, (state) => {
        state.login_followers.isLoading = false;
      }),
      builder.addCase(getFollowerInfo.rejected, (state) => {
        state.login_followers.isLoading = false;
      }),
      builder.addCase(getFollowingInfo.fulfilled, (state, action) => {
        return { ...state, login_following: { data: { ...action.payload }, isLoading: true } }
      }),
      builder.addCase(getFollowingInfo.pending, (state) => {
        state.login_following.isLoading = false;
      }),
      builder.addCase(getFollowingInfo.rejected, (state) => {
        state.login_following.isLoading = false;
      })
  }
})

export const { setTheme, setPageValue } = repoSlice.actions

export default repoSlice.reducer

