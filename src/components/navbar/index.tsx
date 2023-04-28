import { Skeleton, AppBar, Grid, Box, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, getData } from "@/state/repo"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import { useCallback, useEffect, useState } from "react";
import { RootState, AppDispatch } from "@/state";

const Navbar = () => {
  const [themeMode, setMode] = useState("dark");
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, userInfo: { name, login, location, avatar_url } } = useSelector((state: RootState) => state.repo)

  useEffect(() => {
    dispatch(getData());
  }, [dispatch])

  const handleThemeDispatch = useCallback(() => {
    setMode(prev => prev === "dark" ? "light" : "dark");
    dispatch(setTheme(themeMode));
  }, [dispatch, themeMode]);


  return (
    <>
      <AppBar position="static">
        <Toolbar >
          <Grid container columnSpacing={2}>
            <Grid item >
              {isLoading ? <img style={{ borderRadius: "50%" }} src={avatar_url} height={40} /> :
                <Skeleton variant="circular" height={40} width={40} />
              }
            </Grid>
            <Grid item>
              {isLoading ? <>
                <Typography color="inherit" noWrap>
                  {name} ({login})
                </Typography>
                <Typography color="inherit" noWrap>
                  {location}
                </Typography>
              </> :
                <Skeleton variant="text" height={60} width={100} />
              }
            </Grid>
            <Grid item ml="auto">
              <Box onClick={handleThemeDispatch} display="flex" alignItems="center" justifyContent="space-between">
                {themeMode === "light" ? <Brightness7Icon /> : <TsunamiIcon />}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar; 
