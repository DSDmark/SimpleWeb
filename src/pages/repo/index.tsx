import { Cards, Pagination } from "@/components"
import { AppDispatch, RootState } from "@/state";
import { getRepoInfo } from "@/state/repo";
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

interface IPageData {
  username: string;
  page: number;
  perPage: number;
}

const Repo = () => {
  const { userInfo: { data: { login, public_repos } } } = useSelector((state: RootState) => state.repo);
  const dispatch: AppDispatch = useDispatch();
  const [state, setState] = useState<IPageData>({
    username: login,
    page: 1,
    perPage: 5,
  });

  const fetchData = useCallback(() => {
    dispatch(getRepoInfo(state));
  }, [dispatch, state])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <Cards />
      <Pagination totalEntries={public_repos} setPageData={setState} />
    </>
  )
}

export default Repo
