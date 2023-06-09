import { DetailCard, Pagination } from "@/components"
import { AppDispatch, RootState } from "@/state"
import { getFollowingInfo } from "@/state/repo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { IPageData } from "@/utils/interface";

const Following = () => {
  const { userInfo: { data: { login, following } }, login_following } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();

  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 5,
  });
  const fetchData = useCallback(() => {
    dispatch(getFollowingInfo(state));
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <DetailCard login_data={login_following} />
      <Pagination totalEntries={following} setPageData={setState} />
    </>
  )
}

export default Following
