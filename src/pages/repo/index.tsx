import Cards from "@/components/cards"
import { AppDispatch, RootState } from "@/state";
import { getRepo } from "@/state/repo";
import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Repo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { userInfo: { login } } = useSelector((state: RootState) => state.repo);

  const fetchData = useCallback(() => {

    dispatch(getRepo());
  }, [dispatch, getRepo])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <Cards />
  )
}

export default Repo
