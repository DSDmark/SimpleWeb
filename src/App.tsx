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
  const [gitData, setData] = useState<any>(null);
  const apiCall = async (name: string) => {
    try {
      const url = `https://api.github.com/users/${name}`
      const { data } = await axios.get<GetData>(`${url}`)
      setData(data)
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        // The URL returned a 404 error, which means that no data was found.
        // You can set the default data here. For example:
        const url = `https://api.github.com/users/DSDmark`
        const { data } = await axios.get<GetData>(`${url}`)
        setData(data)
      } else {
        console.log(err)
      }
    }
  }

  useLayoutEffect(() => {
    hostname.current =
      prompt('Please enter your github Username') ?? 'DSDmark';

    hostname.current = hostname.current.replace(/[^a-zA-Z0-9]/g, '');
    if (hostname.current) apiCall(hostname.current)
  }, [])

  return (
    <>
      {!gitData ? <h1>Data is loading...</h1> :
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
        </>}
    </>
  )
}
