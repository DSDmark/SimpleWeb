import React from 'react'
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Link,
  Avatar,
  useMediaQuery,
} from '@mui/material'

interface props {
  name: string
  bio: string
  profile: string
  repos: string
  img: string
}

export default function Home({ name, bio, profile, repos, img }: props) {
  let isLargeScreen = useMediaQuery('(min-width:450px')
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <Avatar alt={name} src={img} sx={{ width: 100, height: 100 }} />
        <Typography
          variant={isLargeScreen ? 'h1' : 'h2'}
          textTransform="uppercase">
          {name}
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          textTransform="capitalize"
          paragraph>
          {bio}
        </Typography>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Button variant="outlined" color="error">
            <Link underline="none" color="inherit" href={profile}>
              Profile
            </Link>
          </Button>
          <Button variant="contained">
            <Link underline="none" color="inherit" href={repos}>
              repositary
            </Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
