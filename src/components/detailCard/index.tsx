import { Container, Paper, Card, CardMedia, CardActions, IconButton, CardHeader, Avatar, Grid, Skeleton } from "@mui/material"
import { GitHub } from "@mui/icons-material"

const DetailCard = ({ login_data }: any) => {
  const { isLoading, data } = login_data;

  console.log(login_data)
  return (
    <Container>
      {isLoading ? (
        <Grid container mt={1} mb={2} alignItems="start" rowSpacing={4} columnSpacing={4}>
          {Object.values(data).map((items: any) => {
            const { id, html_url, avatar_url, login } = items
            return (
              <Grid item key={id}>
                <Card component={Paper} elevation={5} sx={{ width: { md: 350, sm: 200, xl: 500 } }}>
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

