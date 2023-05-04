import { Home, Header, MainLayout, Footer } from "./components/"
import { Provider } from "react-redux"
import { store } from "./state";

function App() {

  return (
    <>
      <Provider store={store} >
        <MainLayout>
          <Header />
          <Home />
          <Footer />
        </MainLayout>
      </Provider>
    </>
  )
}

export default App
