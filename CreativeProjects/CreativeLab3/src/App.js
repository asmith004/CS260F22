import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Baking from "./pages/Baking";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <BrowserRouter basename="/CreativeProjects/CreativeLab3/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Aboutme" element={<Aboutme />} />
          <Route path="Baking" element={<Baking />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
