import { useSelector } from "react-redux"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { createAppTheme, IProps } from "@/utils/";
import { RootState } from "@/state/"

const MainLayout = ({ children }: IProps) => {
  const { preferredTheme } = useSelector((state: RootState) => state.repo);
  const theme = createAppTheme(preferredTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MainLayout;
