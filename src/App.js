import React, {lazy , Suspense} from "react"
import ReactDOM from "react-dom/client"
// componenets 
import Header from './components/Header'
import Body from './components/Body'
// import About from './components/About'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
// router
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom"

// Chunking / Code Splitting / Dynmaic Import / Dynmaic Bundling / Lazy Loading  / onDemand Loading

const About = lazy(()=> import('./components/About'))

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '',
                element: <Body />
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>...Loading</h1>}><About /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)