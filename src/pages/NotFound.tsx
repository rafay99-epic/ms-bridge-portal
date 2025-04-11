import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-lg w-full space-y-6">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Page not found
        </p>
        <p className="text-lg text-gray-500 mb-6">
          We couldn't find the page you were looking for. It might have been
          moved, or the URL might be incorrect.
        </p>
        <div>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Return to Home
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          If you believe this is a mistake, please{" "}
          <a href="/contact" className="text-blue-500 underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
