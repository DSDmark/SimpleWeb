import { AppDispatch } from "@/state";
import { RootState } from "@/state";
import { getRepo, setCurrentPage } from "@/state/repo";
import { Pagination as MuiPagination, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const { userInfo: { public_repos, login }, pagination: { itemsPerPage, currentPage } } = useSelector((state: RootState) => state.repo)
  const dispatch: AppDispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  let totalPages = Math.ceil(public_repos / itemsPerPage)

  //@ts-ignore
  const handlePage = (event, value: number) => {
    setPage(value)
  }

  useEffect(() => {

    let data = {
      username: login,
      page,
      perPage: itemsPerPage,
    }

    dispatch(setCurrentPage(page))
    dispatch(getRepo(data))

  }, [page, dispatch])


  return (
    <Stack justifyContent="center" alignItems="center" m={2}>
      <Typography variant="subtitle1" >
        Page: {currentPage}
      </Typography>
      <Typography variant="subtitle1" >
        Total Pages: {totalPages}
      </Typography>
      <MuiPagination onChange={handlePage} count={totalPages} page={page} variant="text" color="primary" />
    </Stack>
  )
}

export default Pagination
