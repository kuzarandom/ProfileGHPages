import { createHashRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Navbar from "@/Layout/Navbar";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createHashRouter([
	{
		path: "/",
		element: <Navbar />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
		],
	},
	{
		path: "/	",
		element: <NotFoundPage />,
	},
]);
