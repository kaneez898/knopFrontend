import { Route } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/main";
import DashboardLayout from "../layout/dashboard";

export const appRoute = (
  <Route element={<App />}>
    <Route element={<MainLayout />}>
      <Route path="/"  lazy={() => import("../pages/Home")} />
      <Route path="/products" lazy={() => import("../pages/Products")} />
      <Route
        path="/products/:id"
        lazy={() => import("../pages/ProdcutDetials")}
      />
    </Route>
    <Route element={<DashboardLayout />}>
      <Route path="/admin" lazy={() => import("../pages/Admin")} />
    </Route>
  </Route>
);
