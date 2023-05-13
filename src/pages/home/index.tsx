import { styled } from '@mui/material/styles';
import videoBg from "/videos/background.mp4"
import { Box, Grid } from '@mui/material';

const VideoBackground = styled('div')({
  width: "100%",
  marginBottom: -10,
  overflow: "hidden",
  position: "relative",
  "& video": {
    height: "auto",
    width: '100%',
  }
});

const Home = () => {
  return (
    <Box>
      <VideoBackground>
        <video controls={false} autoPlay={true} loop={true}>
          <source src={videoBg} type="video/mp4" />
        </video>
      </VideoBackground>
      <Grid container >
        <Grid item>
          csd
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
