import { http, IRepoServices } from "@/utils"

const BASE_URL = import.meta.env.VITE_BASE_URL

class RepoServices implements IRepoServices {
  getUserInfo(username: string) {
    return http.get(BASE_URL + username);
  }
  get(username: string) {
    return http.get(BASE_URL + username + "/followers?per_page=3")
  }
  getFollowers(username: string) {
    return http.get(BASE_URL + username + "/followers?per_page=3")
  }
}

export default new RepoServices;
