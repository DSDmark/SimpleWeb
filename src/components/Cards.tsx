import React, { useState, useEffect } from 'react'
import {
 Box,
 Container,
 Typography,
 Button,
 Card,
 Grid,
 Link,
 CardMedia,
 CardActions,
 CardContent,
} from '@mui/material'
import axios from 'axios'

export default function Cards({ hostname }: any) {
 const [repoData, setData] = useState<any>(null)

 const callApis = async () => {
  try {
   const url = `https://api.github.com/users/${hostname}/repos`
   const {data} = await axios.get(url)
   setData(data)
  } catch (err) {
   console.log(err)
  }
 }

 useEffect(() => {
  if (hostname) {
    setTimeout(()=>{
   callApis()
    },9000)
  }
 }, [hostname])

 return (
  <Box sx={{ pt: 8, pb: 6 }}>
   <Container sx={{ textAlign: 'center' }}>
    <Grid container spacing={4}>
     {!repoData?<h1>Data is loading...</h1>:
       repoData.map((e:any, i:number) => (
      <Grid item xs={12} md={6} key={i}>
       <Card
        sx={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'left',
         textAlign: 'left',
         gap: 2,
         flexDirection: 'column',
        }}>
        <CardMedia
         component="img"
         image="https://github.githubassets.com/images/modules/site/social-cards/campaign-social.png"
         alt="random"
        />
        <CardContent>
         <Typography variant="h6">{e.full_name}</Typography>
         <Typography variant="subtitle1">{e.description}</Typography>
        </CardContent>
        <CardActions>
         <Link href={e.html_url} color="inherit" underline="none">
          <Button variant="outlined" color="error">
           Link
          </Button>
         </Link>
        </CardActions>
       </Card>
      </Grid>
     ))}
    </Grid>
   </Container>
  </Box>
 )
}
