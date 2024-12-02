import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../../pages/auth/login/login-page";
import { RegisterPage } from "../../pages/auth/register";
import { CartPage } from "../../pages/cart/cart-page";
import { CatalogPage } from "../../pages/catalog/catalog-page";
import { RootPage } from "../../pages/root";
import { store } from "../../shared/store";
import { RootLayout } from "../../widgets/layouts/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <RootPage />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "auth",
        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);

export const Provider = () => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};
