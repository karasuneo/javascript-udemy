import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Routes>
            {homeRoutes.map((route) => (
              <Route key={route.path} path={`${url}${route.path}`}>
                {route.children}
              </Route>
            ))}
          </Routes>
        )}
      />
    </Routes>
  );
});
