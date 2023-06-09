import { Pagination } from "@/components"
import { AppDispatch, RootState } from "@/state"
import { getFollowerInfo } from "@/state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "@/utils/interface";
import { DetailCard } from "@/components";

const Followers = () => {
  const { userInfo: { data: { login, followers } }, login_followers } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 5,
  });

  const fetchData = useCallback(() => {
    dispatch(getFollowerInfo(state));
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <DetailCard login_data={login_followers} />
      <Pagination totalEntries={followers} setPageData={setState} />
    </>
  )
}

export default Followers
