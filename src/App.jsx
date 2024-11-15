import { createMemoryRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
// components
import { Layout } from "@components/layout/Layout";
// pages
import { EezyPage } from "@pages/EezyPage";
import { LoginPage } from "@pages/LoginPage";
import { SqueezePage } from "@pages/SqueezePage";
import { UserSqueezyPage } from "@pages/UserSqueezyPage";
import { SearchPage } from "@pages/SearchPage";
import { AccountPage } from "@pages/AccountPage";
import { SqueezingPage } from "@pages/SqueezingPage";
import { EezingPage } from "@pages/EezingPage";

const router = createMemoryRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/squeeze",
    element: (
      <Layout>
        <SqueezePage />
      </Layout>
    ),
  },
  {
    path : "/squeeze/squeezing",
    element: (
      <Layout>
        <SqueezingPage />
      </Layout>
    ),
  },
  {
    path: "/eezy",
    element: (
      <Layout>
        <EezyPage />
      </Layout>
    ),
  },
  {
    path: "/eezy/eezying",
    element : (
      <Layout>
        <EezingPage />
      </Layout>
    )
  },
  {
    path: "/user",
    element: (
      <Layout>
        <UserSqueezyPage />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        <SearchPage />
      </Layout>
    ),
  },
  {
    path: "/account",
    element: (
      <Layout>
        <AccountPage />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
