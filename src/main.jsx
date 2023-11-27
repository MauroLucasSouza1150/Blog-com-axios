import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - Importando os elementos do router
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom"

// 2 - Importando as páginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './components/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

// 3 - criando as rotas
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id",
        element: <Post />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "posts/edit/:id",
        element: <EditPost />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*4 - inserindo o Provider */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
