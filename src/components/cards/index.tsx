import { Container, Paper, Card, CardMedia, CardActions, CardContent, IconButton, Typography, CardHeader, Avatar, Grid, Stack, Chip, Skeleton } from "@mui/material"
import timg from "/images/footer-hero.webp"
import { ArrowForwardOutlined, DownloadOutlined, GitHub } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { RootState } from "@/state"

const Cards = () => {
  const { repoInfo, userInfo: { data: { avatar_url } } } = useSelector((state: RootState) => state.repo)
  return (
    <Container>
      {repoInfo.isLoading ? (
        <Grid container mt={1} mb={2} alignItems="start" rowSpacing={4} columnSpacing={4}>
          {Object.values(repoInfo.data).map((items: any) => {
            const { topics, language, url, default_branch, forks_count, html_url, id, name, description, open_issues_count, stargazers_count } = items;
            return (
              <Grid item key={id}>
                <Card component={Paper} elevation={5} sx={{ width: { md: 350, sm: "100%", xl: 500 }, height: "auto" }}>
                  <CardHeader avatar={<Avatar src={avatar_url} />} title={name} subheader={`issue:${open_issues_count} | fork:${forks_count} | stars:${stargazers_count}`} />
                  <CardMedia component="img" height="194" image={timg} />
                  <CardContent >
                    <Typography variant="body1" color="text.secondary">
                      {description}
                    </Typography>
                    <Stack maxWidth="7rem" mt={1}>
                      <Chip label={language} color="success" />
                    </Stack>
                    <Stack rowGap={2} columnGap={2} mt={2} direction="row" flexWrap="wrap">
                      {topics?.map((topic: string) => (
                        <Chip key={window.crypto.randomUUID()} label={topic} color="primary" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <IconButton LinkComponent="a" href={html_url}>
                      <GitHub />
                    </IconButton>
                    <IconButton LinkComponent="a" href={url + "/zipball/" + default_branch}>
                      <DownloadOutlined />
                    </IconButton>
                    <IconButton LinkComponent="a" href={url}>
                      <ArrowForwardOutlined />
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

export default Cards
