import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import HomePage from "../Component/HomePage/HomePage";
import TimeLine from "../Component/TimeLine/TimeLine";
import ErrorUi from "../Component/ErrorUi/ErrorUi";
import StatsPage from "../Component/StatsPage/StatsPage";
import FriendDetail from "../Component/FriendDetail/FriendDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "timeline",
        element: <TimeLine />,
      },
      {
        path: "stats",
        element: <StatsPage />,
      },
      {
        path: "friends/:id",
        element: <FriendDetail />,
      },
      {
        path: "*",
        element: <ErrorUi />,
      },
    ],
    errorElement: <ErrorUi />,
  },
]);
