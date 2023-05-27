import { FC } from "react";
import { Box, Grid, Skeleton, Typography, styled } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import bannerImg from "/images/footer-hero.webp";

interface IData {
  data: {
    bio: string;
    isLoading: boolean;
  }
}

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
  position: "relative",
  width: "100%",
  height: "500px",
  '&::before &::after': {
    content: `" "`,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: ' 100%',
    background: ' linear-gradient(to top, transparent, #ffffff)',
    transformOrigin: 'bottom left',
    zIndex: 1,
  },

  '&:: before': {
    left: 0,
    transform: 'skewY(3deg)',
  },
  ' &:: after': {
    right: 0,
    transform: ' skewY(-3deg)',
  },
  clipPath: ' polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)',
})

const Banner: FC<IData> = ({ data }) => {
  const { bio, isLoading } = data;
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} width="100%">
          <Box position="relative" display="flex" justifyContent="center" alignItems="center">
            <MuiImg src={bannerImg} />
            <FooterImgText>
              {isLoading ?
                bio : <Skeleton height="300px" width="50vw" />
              }
            </FooterImgText>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Banner
