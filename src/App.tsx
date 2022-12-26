import React, { useState, useLayoutEffect, useRef } from 'react'
import axios from 'axios'
import { NavBar, Home, Cards, Footer } from './components'

type User = {
 name: string
 location: string
 bio: string
 html_url: string
 login: string
 repos_url: string
 avatra: string
}

type GetData = {
 gitData: User[]
}

export default function App() {
 let hostname = useRef<string>('DSDmark')
 const [gitData, setData] = useState<any>([])
 const apiCall = async (name: string) => {
  try {
   const url = `https://api.github.com/users/${name}`
   const { data } = await axios.get<GetData>(`${url}`)
   setData(data)
   console.log(data)
  } catch (err) {
   if (axios.isAxiosError(err)) {
    console.log('error massage:', err.message)
    return err.message
   }
   console.log('unexpected error: ', err)
   return 'An unexpected error occurred'
  }
 }

 useLayoutEffect(() => {
  hostname.current =
   prompt('Please enter your github Username') ?? 'DSDmark'
  if (hostname.current) apiCall(hostname.current)
 }, [])

 return (
  <>
   <NavBar name={gitData.login} location={gitData.location} />
   <main>
    <Home
     name={gitData.login}
     bio={gitData.bio}
     profile={gitData.html_url}
     repos={gitData.repos_url}
     img={gitData.avatar_url}
    />
    <Cards hostname={gitData.login} />
   </main>
   <Footer hostname={gitData.login} />
  </>
 )
}
