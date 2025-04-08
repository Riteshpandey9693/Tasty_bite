import { useRouteError, Link } from "react-router-dom";
import { IMG_ERROR_URL } from "./utils/constants";

const Error = () => {
	const { status, statusText } = useRouteError();

	return (
		<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
			{/* Error Text Section */}
			<div className="text-center md:text-left md:w-1/2 space-y-6">
				<h1 className="text-6xl font-extrabold text-orange-500">Oops!</h1>
				<h2 className="text-3xl font-semibold text-gray-800">Something went wrong.</h2>
				<p className="text-xl text-gray-600">
					Error {status} - {statusText}
				</p>
				<Link
					to="/"
					className="inline-block mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
				>
					← Go back to Home
				</Link>
			</div>

			{/* Error Image Section */}
			<div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
				<img
				 src={IMG_ERROR_URL}
				 alt="Error Illustration"
				 className="max-w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default Error;
