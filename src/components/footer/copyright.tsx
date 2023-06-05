import { RootState } from "@/state";
import { Box, styled, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

const FooterStyle = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
}))

const Copyright = () => {
  const { userInfo: { data: { login }, isLoading } } = useSelector((state: RootState) => state.repo)
  return (
    <FooterStyle> © {` Copyright ${new Date().getFullYear()}`} by {isLoading ? login : <Skeleton height="40px" width="50px" />}. All Rights Reserved.</FooterStyle>
  )
}

export default Copyright
