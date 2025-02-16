import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DescriptionPage from "./pages/DescriptionPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/descriptionTask",
    element: <DescriptionPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
