import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Contact } from "../contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
   
      {
        path: "contact/:id",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
