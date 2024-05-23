import React from "react"
import ReactDOM from "react-dom/client"
// componenets 
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenuPage'
// router
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom"

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
                element: <About />
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