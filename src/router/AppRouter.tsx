import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Login from "../pages/Login.tsx";
import type { RouteObject } from "react-router";

// AppRouter 컴포넌트x , 함수 O
// 매개변수 자리에 onClick이 들어오는데, 얘는 매개변수니까
// 타입스크립트에 의거하여 타입을 명시해줘야 함
export const AppRouter = (onClick: VoidFunction) => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout onClick={onClick}/>,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
            ],
        },
        { path: "/auth/login", element: <Login /> },
    ];

    return createBrowserRouter(routes);
};
