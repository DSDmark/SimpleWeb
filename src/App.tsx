import { Home, Navbar, MainLayout } from "./components/"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./state"

function App() {

  return (
    <>
      <Provider store={store} >
        <MainLayout>
          <Navbar />
          <Home />
          <Footer />
        </MainLayout>
      </Provider>
    </>
  )
}

export default App
