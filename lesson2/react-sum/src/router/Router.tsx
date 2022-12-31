import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Home } from "../components/pages/Home";
// import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home">
        {homeRoutes.map((route) => (
          <Route
            key={route.path}
            path={`${route.path}`}
            element={<HeaderLayout>{route.children}</HeaderLayout>}
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />ï
    </Routes>
  );
};
