import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterPage } from "../../pages/auth/register";
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
        element: <div></div>,
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
            element: <div></div>,
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
