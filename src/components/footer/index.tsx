import { FC, ReactElement } from "react"
import { Box, Stack, Grid, Link as MuiLink, Typography, Avatar, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/state";
import Copyright from "./copyright.tsx";
import Banner from "./banner.tsx";
import Categorylink from "./categorylink.tsx";

interface IData {
  data: {
    name: string;
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
  }
}

const FooterLogo: FC<IData> = ({ data }) => {
  const { name, login, avatar_url, following, followers } = data;
  return (
    <Container>
      <Grid container direction="row">
        <Grid item sx={{ xs: { justifyContent: "center" } }} md={6} >
          <Stack spacing={1} display="flex" justifyContent="center" alignItems="center" p={2}>
            <Avatar srcSet={avatar_url} sx={{ height: "80px", width: "80px" }} />
            <Typography>
              {name} ({login})
            </Typography>
            <Typography variant="subtitle2" color="secondary.dark">
              followers {followers} | following {following}
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              {` Copyright ${new Date().getFullYear()} by ${login}. All Rights Reserved.`}
            </Typography>
            <Typography variant="subtitle1" >
              <MuiLink color="text.primary">
                Terms
              </MuiLink>
              <MuiLink ml={2} color="text.primary">
                Privacy
              </MuiLink>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Categorylink />
        </Grid>
      </Grid >
    </Container>
  )
}

const Footer: FC = (): ReactElement => {
  const { userInfo: { data: { name, bio, login, avatar_url, followers, following }, isLoading
  } } = useSelector((state: RootState) => state.repo);

  return (
    <Box>
      <Banner data={{ bio, isLoading }} />
      <FooterLogo data={{ name, login, avatar_url, following, followers }} />
      <Copyright />
    </Box >
  );
};

export default Footer;

