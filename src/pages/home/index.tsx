import { styled } from '@mui/material/styles';
import videoBg from "/videos/background.mp4"
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Button, Link as MuiLink, Grid, Typography, useMediaQuery, Stack, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/state';
import Typewriter from 'typewriter-effect';

const VideoBackground = styled('div')({
  position: "relative",
  width: "100%",
  minHeight: "600px",
  '& video': {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const VideoText = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontWeight: 800,
  fontFamily: "serif",
  opacity: .9,
  color: theme.palette.text.primary,
  textAlign: "center",
  [theme.breakpoints.down('sm')]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: "70%",
  },
}));


const Home = () => {
  const { userInfo: { isLoading, data: { name, login, avatar_url, bio, hireable, blog } } } = useSelector((state: RootState) => state.repo)
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  return (
    <Box sx={{ position: "relative" }}>
      <VideoBackground >
        <video controls={false} autoPlay={true} loop={true}>
          <source src={videoBg} type="video/mp4" />
        </video>
      </VideoBackground>
      <VideoText container spacing={2} direction="column">
        {isLoading ?
          <>
            <Grid item >
              <Avatar src={avatar_url} sx={{
                height: isMobile ? "100px" : "150px", width: "auto",
              }} />
            </Grid>
            <Grid item>
              <Typography variant={isMobile ? "h5" : "h4"}>
                <Typewriter
                  options={{
                    strings: [name, `(${login})`],
                    autoStart: true,
                    loop: true,
                    cursor: " 👾",
                  }}
                />
              </Typography>
            </Grid>
            <Grid item width="50%">
              <Typography variant='body1'>
                <Typewriter
                  options={{
                    strings: bio,
                    autoStart: true,
                    loop: false,
                    cursor: "😈",
                  }}
                />
              </Typography>
            </Grid>
            <Grid item width="50%" >
              <Stack spacing={2}>
                <MuiLink component={RouterLink} to={blog}>
                  <Button variant="contained">
                    blog link
                  </Button>
                </MuiLink>
                <Button disabled variant="outlined" sx={{ color: "white" }}>
                  hireable: {hireable ? "✅" : "🔴"}
                </Button>
              </Stack>
            </Grid>
          </>
          : <Skeleton height={500} width="100%" />}
      </VideoText>
    </Box>
  )
}

export default Home
