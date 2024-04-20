import { Routes, Route } from "react-router-dom";

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

function App() {
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

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
