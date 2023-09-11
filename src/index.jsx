import React from "react";
import { createRoot } from "react-dom/client";
import ProductsCarroussel from "./components/ProductsCarroussel";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<ProductsCarroussel />);