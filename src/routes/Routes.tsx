import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Header, Footer } from "@/components"
import { Following, Followers, Repo, Home, NotFound } from "@/pages"

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/repo" element={<Repo />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Following />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesLayout
