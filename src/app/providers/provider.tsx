import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "../../pages/auth/register";
import { RootPage } from "../../pages/root";
import { store } from "../../shared/store";
import { RootLayout } from "../../widgets/layouts/root-layout";
import { LoginPage } from "../../pages/auth/login/login-page";
import { CatalogPage } from "../../pages/catalog/catalog-page";

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
        element: <div></div>,
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
