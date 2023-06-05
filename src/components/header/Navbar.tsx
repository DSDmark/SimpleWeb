import { Link as MuiLink, Skeleton, AppBar, Grid, Box, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/state/repo"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import { useCallback, useState } from "react";
import { RootState, AppDispatch } from "@/state";

const Navbar = () => {
  const [themeMode, setMode] = useState("dark");
  const dispatch: AppDispatch = useDispatch();
  const { userInfo: { isLoading, data: { name, login, location, avatar_url, url } }, preferredTheme } = useSelector((state: RootState) => state.repo)

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
              <MuiLink component={RouterLink} to={url} >
                {isLoading ? <img style={{ borderRadius: "50%" }} src={avatar_url} height={40} /> :
                  <Skeleton variant="circular" height={40} width={40} />
                }
              </MuiLink>
            </Grid>
            <Grid item>
              <MuiLink component={RouterLink} to={url} >
                {isLoading ? <>
                  <Typography color="text.primary" noWrap>
                    {name} ({login})
                  </Typography>
                  <Typography color="text.primary" noWrap>
                    {location}
                  </Typography>
                </> :
                  <Skeleton variant="text" height={60} width={100} />
                }
              </MuiLink>
            </Grid>
            <Grid item ml="auto">
              <Box onClick={handleThemeDispatch} display="flex" alignItems="center" justifyContent="space-between">
                {preferredTheme === "light" ? <Brightness7Icon /> : <TsunamiIcon />}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar; 
