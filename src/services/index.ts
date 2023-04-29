import { http, IRepoServices } from "@/utils"

const BASE_URL = import.meta.env.VITE_BASE_URL

class RepoServices implements IRepoServices {
  getUserInfo(username?: string) {
    if (username) {
      return http.get(BASE_URL + username);
    } else {
      username = "DSDmark";
      return http.get(BASE_URL + username);
    }
  }
}

export default new RepoServices;
