import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <div>Hello ! about</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
