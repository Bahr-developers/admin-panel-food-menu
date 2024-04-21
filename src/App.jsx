import { Routes, Route, useNavigate } from "react-router-dom";

// pages
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";
import Profil from "./pages/Profil";
import CategoriesPage from "./pages/CategoriesPage";
import Home from "./pages/Home";

// layouts
import RootLayouts from "./layouts/RootLayouts";

// blur css
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEffect } from "react";

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
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path=":restaurantId" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path=":categoryId" element={<CategoriesPage />} />
          <Route path="profile" element={<Profil />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
