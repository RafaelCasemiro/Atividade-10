import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const local = createBrowserRouter([{
  path: "/",
  element: <Home />,
},
]);

export default function App() {

  return (
    <div> 
       <RouterProvider router={local}/>
    </div>

  )


}
