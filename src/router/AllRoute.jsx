import { createBrowserRouter } from "react-router-dom";
import Home from "../assets/pages/Home/Home";
import ErrorPage from "../assets/pages/Home/ErrorPage";
import MainLayout from "../mainLayout/MainLayout";
import Donation from "../assets/pages/Home/Donation";
import Statistics from "../assets/pages/Home/Statistics";
import DonationDetails from "../assets/pages/DonationDetails";

const AllRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json'),
            },
            {
                path: "/donations",
                element: <Donation></Donation>,
            },
            
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/:id",
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json'),
            },
        ]
    },
]);

export default AllRoute;