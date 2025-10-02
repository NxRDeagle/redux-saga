import { Routes as Switch, Route } from "react-router";
import App from "./pages/App";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { MAIN_ROUTE, NOT_FOUND_ROUTE, PEOPLE_DETAILS_ROUTE } from "./constants";

export const routes = [
  {
    id: MAIN_ROUTE,
    path: "/",
    exact: true,
    element: <App />,
  },
  {
    id: PEOPLE_DETAILS_ROUTE,
    path: "/people/:id",
    exact: true,
    element: <Details />,
  },
  {
    id: NOT_FOUND_ROUTE,
    path: "*",
    exact: true,
    element: <NotFound />,
  },
];

export const getRouteConfig = (id) => {
  const searchRoute = routes.find((route) => route.id === id);
  if (searchRoute) {
    const { component, ...rest } = searchRoute;
    return rest;
  }
};

function Routes() {
  return (
    <Switch>
      {routes.map((route) => {
        const { id, ...props } = route;
        return <Route key={id} {...props} />;
      })}
    </Switch>
  );
}

export default Routes;
