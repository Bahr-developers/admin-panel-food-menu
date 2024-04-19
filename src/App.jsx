import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Food from "./pages/Food";
import Drink from "./pages/Drink";
import Salads from "./pages/Salads";
import Sweets from "./pages/Sweets";
import ErrorPage from "./pages/ErrorPage";
import Profil from "./pages/Profil";
import AddCategory from "./pages/Category";
import Addlanguage from "./pages/Language";
import AddTranslete from "./pages/Translete";
import AddPraduct from "./pages/Praduct";

import "react-lazy-load-image-component/src/effects/blur.css";
import RootLayouts from "./layouts/RootLayouts";

function App() {
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path=":restaurantId" element={<RootLayouts />}>
          <Route index element={<Food />} />
          <Route path="drink" element={<Drink />} />
          <Route path="salads" element={<Salads />} />
          <Route path="sweets" element={<Sweets />} />
          <Route path="profil" element={<Profil />} />
          <Route path="add-language" element={<Addlanguage />} />
          <Route path="add-translate" element={<AddTranslete />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-praduct" element={<AddPraduct />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
