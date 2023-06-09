import { http, IRepoServices } from "@/utils"

const BASE_URL = import.meta.env.VITE_BASE_URL

interface IParams {
  username?: string;
  page?: number;
  perPage?: number;
}

class RepoServices implements IRepoServices {
  getUserInfo(username: string) {
    return http.get(BASE_URL + username);
  }
  getRepo(params: IParams) {
    const { username, page, perPage } = params;
    return http.get(BASE_URL + username + `/repos?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }
  getFollowers(params: IParams) {
    const { username, page, perPage } = params;
    return http.get(BASE_URL + username + `/followers?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }
  getFollowing(params: IParams) {
    const { username, page, perPage } = params;
    return http.get(BASE_URL + username + `/following?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }
  getEvents(params: IParams) {
    const { username, page, perPage } = params;
    return http.get(BASE_URL + username + `/received_events?type=owner&sort=stars&direction=asc&page=${page}&per_page=${perPage}`)
  }
}

export default new RepoServices;
