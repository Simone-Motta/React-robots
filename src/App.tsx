import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
//import HomePage from './pages/HomePages'
//import DetailPage from './pages/DetailPages'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePages') )
const DetailPage = lazy(() => import('./pages/DetailPages') )

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/detail/:id',
    element: < DetailPage />
  },
  {
    path: '*',  //Qualsiasi cosa ci sia scritto  
    //element: <h1>404</h1>,  //apri pagina 404 custom
    element: <Navigate to="/" />  //Fallback redirect, naviga alla pagine '/' = HomePage
  }
])

function App() {
  return <Suspense fallback={<p>Waiting for lazy load</p>}>
    <RouterProvider router={router} />
  </Suspense>
}

export default App
