import { ReactNode } from "react"
import { AxiosResponse } from "axios"
import { PaletteMode } from "@mui/material";

export interface IUser {
  data: {
    name: string;
    avatar_url: string;
    bio: string;
    blog: string;
    public_repos: number;
    company: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    hireable: boolean;
    id: number;
    location: string;
    login: string;
    repos_url: string;
    starred_url: string;
    twitter_username: string | null;
    url: string;
  },
  isLoading: boolean;
}

export interface IRepo {
  data: {
    topics: string[];
    language: string;
    url: string;
    downloads_url: string;
    forks_count: number;
    html_url: string;
    id: number;
    name: string;
    description: string;
    open_issues_count: number;
    stargazers_count: number;
    default_branch: string;
  },
  isLoading: boolean;
}

export interface IPagination {
  data: {
    currentPage: number,
    itemsPerPage: number,
  },
  isLoading: boolean;
}

export interface ISavei {
  name: string
  bio: string
  profile: string
  repos: string
  img: string
}

export interface INavbar {
  name: string;
  location: string;
}

export interface IPageData {
  username: string;
  page: number;
  perPage: number;
}

export interface IFollowing {
  data: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  },
  isLoading: boolean;
}

export interface IFollowers {
  data: {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
  },
  isLoading: boolean;
}

export interface IRepoState {
  userInfo: IUser,
  preferredTheme: PaletteMode,
  repoInfo: IRepo,
  pagination: IPagination,
  login_followers: IFollowers,
  login_following: IFollowing,
}

export interface IRepoServices {
  getUserInfo(username?: string): Promise<AxiosResponse<any>>;
}

export interface IProps {
  children: ReactNode;
}
