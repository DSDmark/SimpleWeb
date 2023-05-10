import { Cards, Pagination } from "@/components"
import { AppDispatch, RootState } from "@/state";
import { getRepo } from "@/state/repo";
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Repo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { userInfo: { login } } = useSelector((state: RootState) => state.repo);

  const fetchData = useCallback(() => {

    let params = {
      username: login,
      page: 1,
      perPage: 5
    }

    dispatch(getRepo(params));
  }, [dispatch, getRepo])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <>
      <Cards />
      <Pagination />
    </>
  )
}

export default Repo
