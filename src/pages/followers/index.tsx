import { Pagination } from "@/components"
import { AppDispatch, RootState } from "@/state"
import { getFollowerInfo } from "@/state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "@/utils/interface";

const Followers = () => {
  const { userInfo: { login, followers } } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 5,
  });

  console.log(state)
  const fetchData = useCallback(() => {
    dispatch(getFollowerInfo(state));
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <div>Following</div>
      <Pagination totalEntries={followers} setPageData={setState} />
    </>
  )
}

export default Followers
