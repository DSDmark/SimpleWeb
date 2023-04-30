import { FC, ReactElement } from "react"
import { Box, Stack, List, ListItemText, ListItem, Grid, Link as MuiLink, Skeleton, Typography, styled, Avatar, ListItemButton, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/state";
import Copyright from "./copyright";
import { blueGrey } from "@mui/material/colors";

const FooterImgText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: blueGrey[300],
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("md")]: {
    letterSpacing: theme.spacing(1),
    width: "90%",
  },
  letterSpacing: theme.spacing(2),
  fontWeight: 800,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
  textTransform: "uppercase",
}))

const MuiImg = styled("img")({
  width: "100%",
  height: "400px",
})

const Footer: FC = (): ReactElement => {
  const { userInfo: { name, bio, login, avatar_url }, isLoading } = useSelector((state: RootState) => state.repo);
  return (
    <Box
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} width="100%">
          <Box position="relative" display="flex" justifyContent="center" alignItems="center">
            <MuiImg src='https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp' />
            <FooterImgText>
              {isLoading ?
                bio : <Skeleton height="300px" width="50vw" />
              }
            </FooterImgText>
          </Box>
        </Grid>
        <Container>
          <Grid container item xs={12} justifyContent="center">
            <Grid item xs={12} md={6} >
              <Box >
                <Stack spacing={1} p={2}>
                  <Avatar srcSet={avatar_url} sx={{ height: "80px", width: "80px" }} />
                  <Typography>
                    {name} ({login})
                  </Typography>
                  <Typography variant="subtitle1">
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
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" alignItems="flex-start" justifyContent="space-around">
                <List>
                  <ListItem>
                    <ListItemText>
                      Product
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      shop
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      mirch
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemText>
                      Company
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      jobs
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      caraer
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemText>
                      Social
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      github
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      facebook
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Copyright />
    </Box >
  );
};

export default Footer;

