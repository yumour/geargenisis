import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContent from "../components/PageContent";
import DefaultLayout from "../layouts/DefaultLayout";
import About from "../pages/About";
import Category from "../pages/Category";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Search from "../pages/Search";
import Product from "../pages/Product";
import Products from "../components/Products";
import CustomDemandsPage from "../components/custom";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: (
        <DefaultLayout>
          <ErrorPage />
        </DefaultLayout>
      ),
      children: [
        {
          path: "products/:productId",
          element: (
            <DefaultLayout>
              <PageContent>
                <Product />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "products/categories/:categoryId",
          element: (
            <DefaultLayout>
              <PageContent>
                <Category />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "products/search",
          element: (
            <DefaultLayout>
              <PageContent>
                <Search />
              </PageContent>
            </DefaultLayout>
          ),
        },
         {path: "products",
        element: (
          <DefaultLayout>
            <PageContent>
              <Products />
            </PageContent>
          </DefaultLayout>
        )},
        {
          path: "about",
          element: (
            <DefaultLayout>
              <PageContent>
                <About />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "cart",
          element: (
            <DefaultLayout>
              <PageContent>
                <Cart />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "custom",
          element: (
            <DefaultLayout>
              <PageContent>
                <CustomDemandsPage />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "",
          element: (
            <DefaultLayout>
              <PageContent >
                <Home />
              </PageContent>
            </DefaultLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
