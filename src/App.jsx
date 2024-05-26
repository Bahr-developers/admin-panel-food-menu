import { Routes, Route, useNavigate } from "react-router-dom";

import { Provider } from "react-redux";

import { useEffect, lazy, Suspense } from "react";

import { store } from "./redux/store";

// layouts
import RootLayouts from "./layouts/RootLayouts";

// blur css
import "react-lazy-load-image-component/src/effects/blur.css";
import Loading from "./components/Loading";

// Lazy load components
const SignIn = lazy(() => import("./pages/SignIn"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Profil = lazy(() => import("./pages/Profil"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const Home = lazy(() => import("./pages/Home"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

function App() {
  const navigate = useNavigate();

  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  const restaurantId = localStorage.getItem("id");

  useEffect(() => {
    if (!restaurantId) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path=":restaurantId" element={<RootLayouts />}>
              <Route index element={<Home />} />
              <Route path=":categoryId" element={<CategoriesPage />} />
              <Route path="profile" element={<Profil />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
