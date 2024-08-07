import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvier } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/books",
        element: (
            <Layout>
                <Books />
            </Layout>
        ),
    },
    {
        path: "/signup",
        element: (
            <Layout>
                <Signup />
            </Layout>
        ),
    },
    {
        path: "/reset",
        element: (
            <Layout>
                <ResetPassword />
            </Layout>
        ),
    },
    {
        path: "/login",
        element: (
            <Layout>
                <Login />
            </Layout>
        ),
    },
    {
        path: "/books/:bookId",
        element: (
            <Layout>
                <BookDetail />
            </Layout>
        ),
    },
    {
        path: "/cart",
        element: (
            <Layout>
                <Cart />
            </Layout>
        ),
    },
    {
        path : "/orders",
        element : (
            <Layout>
                <Order />
            </Layout>
        )
    }
]);

function App() {
    return (
        <BookStoreThemeProvier>
            <RouterProvider router={router} />
        </BookStoreThemeProvier>
    );
}

export default App;
