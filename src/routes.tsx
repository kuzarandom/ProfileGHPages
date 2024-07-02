import { createHashRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Navbar from "@/Layout/Navbar";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createHashRouter([
	{
		path: "/",
		element: <Navbar />,
		children: [
			{
				path: "home",
				element: <HomePage />,
			},
		],
	},
	{
		path: "/notfound",
		element: <NotFoundPage />,
	},
]);
