import Navbar from "./Navbar"
import TabMenu from "./TabsMenu"
import data from "@/data/header"

const Header = () => {
  return (
    <>
      <Navbar />
      <TabMenu data={data.nav_categories} />
    </>
  )
}

export default Header
