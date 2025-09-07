import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./compononents/Root/Root";
import ErrorPage from "./compononents/ErrorPage/ErrorPage";
import Home from "./compononents/Home/Home";
import Dashboard from "./compononents/Dashboard/Dashboard";
import BookDetail from "./compononents/BookDetail/BookDetail";
import ListedBooks from "./compononents/ListedBooks/ListedBooks";
import { ToastContainer, toast } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json"), // worst way to load data
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
