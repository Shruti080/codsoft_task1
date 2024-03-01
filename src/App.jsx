import { useState } from 'react'
import {createBrowserRouter,RouterProvider, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Instructions from './components/Instructions'
import Login from './components/Login'
import Signup from './components/Signup'
import CreateQuiz from './components/CreateQuiz'
import Play from './components/Play'
import Result from './components/Result'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/Instructions.jsx",
      element:<Instructions/>
    },
    {
      path:"/Login.jsx",
      element:<Login/>
    },
    {
      path:"/Signup.jsx",
      element:<Signup/>
    },
    {
      path:"/CreateQuiz.jsx",
      element:<CreateQuiz/>
    },
    {
      path:"/Play.jsx",
      element:<Play/>
    },
    {
      path:"/Result.jsx",
      element:<Result/>
    }

  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
