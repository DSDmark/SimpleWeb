import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { createAppTheme, IProps } from "@/utils/";
import { RootState } from "@/state";
import GetUserName from "./Dilog"

const MainLayout = ({ children }: IProps) => {
  const { preferredTheme } = useSelector((state: RootState) => state.repo);
  const theme = createAppTheme(preferredTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GetUserName />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
