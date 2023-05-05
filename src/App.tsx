import { MainLayout } from "./components/"
import { Provider } from "react-redux"
import { store } from "./state";
import RoutesLayout from "@/routes/Routes"

function App() {

  return (
    <Provider store={store} >
      <MainLayout>
        <RoutesLayout />
      </MainLayout>
    </Provider>
  )
}

export default App
