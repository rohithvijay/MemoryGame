import { createBrowserRouter } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";
import { RouterProvider } from "react-router-dom";
import Instruction from "./instruction";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/game",
      element: <Game />,
    },
    {
      path: "/instruction",
      element: <Instruction />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
