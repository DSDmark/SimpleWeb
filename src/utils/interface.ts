import { ReactNode } from "react"
import { AxiosResponse } from "axios"
import { PaletteMode } from "@mui/material";

export interface IUser {
  name: string;
  avatar_url: string;
  bio: string;
  blog: string;
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
}

export interface IRepo {
  owner: { avatar_url: string };
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
}

export interface INavbar {
  name: string;
  location: string;
}

export interface ISavei {
  name: string
  bio: string
  profile: string
  repos: string
  img: string
}


export interface IRepoState {
  userInfo: IUser,
  isLoading: boolean,
  preferredTheme: PaletteMode,
  repoInfo: IRepo[],
  // email: string,
  // avatar: string,
  // github: string,
  // followers: string,
  // following: string,
  // location: string,
  // bio: string,
  // company: string,
}

export interface IRepoServices {
  getUserInfo(username?: string): Promise<AxiosResponse<any>>;
}

export interface IProps {
  children: ReactNode;
}

