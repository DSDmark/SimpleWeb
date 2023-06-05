import { AppDispatch, RootState } from "@/state";
import { setPageValue } from "@/state/repo";
import { Pagination as MuiPagination, Stack, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IPageData {
  username: string;
  page: number;
  perPage: number;
}

interface IProps {
  totalEntries: number;
  setPageData: Dispatch<SetStateAction<IPageData>>,
}

const Pagination = ({ totalEntries, setPageData }: IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { pagination: { data: { currentPage, itemsPerPage } }, userInfo: { data: { login } } } = useSelector((state: RootState) => state.repo)
  const [page, setPage] = useState<number>(1);
  let totalPages = Math.ceil(totalEntries / itemsPerPage)

  //@ts-ignore
  const handlePage = (event, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    let data = {
      username: login,
      page: page,
      perPage: 5,
    }

    setPageData((prev: IPageData) => ({ ...prev, page, perPage: 5 }));
    dispatch(setPageValue(data))

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
