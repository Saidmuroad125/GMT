import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Katolg from "./pages/Katolg"
import Karzinka from "./pages/Karzinka"
import Tavar from "./pages/Tavar"
import Home from "./pages/Home"
import Location from "./components/Location"
import { Lake } from "./pages/Lake"


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/katolg" element={<Katolg/>} />
        <Route path="/karzinka" element={<Karzinka/>} />
        <Route path="/tavar" element={<Tavar/>} />
        <Route path="/Lake" element={<Lake/>} />
        <Route path="/location" element={<Location/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App