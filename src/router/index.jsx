import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Organization from "../pages/Organization";
import ElevatorServices from "../pages/ElevatorServices";
import PlumbingServices from "../pages/PlumbingServices";
import Contact from "../pages/Contact";
import Legal from "../pages/Legal";
import Privacy from "../pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "organisation", element: <Organization /> },
      { path: "ascenseurs", element: <ElevatorServices /> },
      { path: "plomberie", element: <PlumbingServices /> },
      { path: "contact", element: <Contact /> },
      { path: "mentions-legales", element: <Legal /> },
      { path: "confidentialite", element: <Privacy /> },
    ],
  },
]);

export default router;
