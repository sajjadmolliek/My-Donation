import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div className="flex justify-center items-center mt-[45%] md:mt-[15%]" id="error-page">
                <div>
                    <h1 className="text-center font-bold text-4xl">Oops!</h1>
                    <p className="my-10 font-semibold text-lg">Sorry, an unexpected error has occurred.</p>
                    <p className="text-center font-medium text-base">No Data Found OR You have not donate yet</p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
            <NavLink to="/" className="btn btn-neutral">Back to Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;