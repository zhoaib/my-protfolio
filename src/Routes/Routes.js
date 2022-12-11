import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import ColorCanvas from "../Pages/ColorCanvas/ColorCanvas";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import KenaKati from "../Pages/KetaKati/KenaKati";
import LetTheMusicPlay from "../Pages/LetTheMusicPlay/LetTheMusicPlay";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/colorcanvas',
                element: <ColorCanvas></ColorCanvas>
            },
            {
                path: '/music',
                element: <LetTheMusicPlay></LetTheMusicPlay>
            },
            {
                path: '/kenakati',
                element: <KenaKati></KenaKati>
            }

        ]
    }
])