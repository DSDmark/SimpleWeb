import { Container, Paper, Card, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { RootState } from "@/state"
import { useSelector } from "react-redux"

const DetailCard = () => {
  const login_followers = useSelector((state: RootState) => state.repo.login_followers);

  return (
    <Container>
      {login_followers.isLoading ? (
        <Grid container mt={1} mb={2} alignItems="start" rowSpacing={4} columnSpacing={4}>
          {Object.values(login_followers).map((items) => {
            const { id, html_url, avatar_url, login } = items
            return (
              <Grid item key={id}>
                <Card component={Paper} elevation={5} sx={{ maxWidth: { md: 350, sm: "auto", xl: 500 } }}>
                  <CardHeader avatar={<Avatar src={avatar_url} />} title={login} />
                  <CardMedia component="img" height="194" image={avatar_url} />
                  <CardActions>
                    <IconButton LinkComponent="a" href={html_url}>
                      <GitHub />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>

      ) : <Skeleton height="50vh" />}
    </Container>
  )
}

export default DetailCard

