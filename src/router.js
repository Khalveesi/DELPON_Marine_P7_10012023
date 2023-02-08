import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home/index.js";
import About from "./pages/About/index.js";
import Logement from "./pages/Logement/index.js";
import NotFound from "./pages/NotFound/index.js";
import DefaultLayout from "./layouts/DefaultLayout/index.js";
import logements from "./datas/logements.json";

export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => {
                    return {
                        logements,
                    };
                },
            },
            {
                path: "/logement/:id",
                element: <Logement />,
                loader: ({ params }) => {
                    const logement = logements.find(
                        (logement) => logement.id === params.id
                    );
                    if (!logement) {
                        return redirect("/404");
                    }
                    return {
                        logement,
                    };
                },
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
