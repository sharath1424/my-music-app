import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/Preview.png"
            alt="Logo"
            className="h-16 w-16 mr-4 object-contain"
          />
          <Link
            to="/"
            className="text-3xl font-bold hover:text-blue-400 transition duration-300 melody-shadow"
          >
            Melody Shadow
          </Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link
            to="/explore"
            className="hover:text-blue-400 transition duration-300"
          >
            Explore
          </Link>
          <Link
            to="/instruments"
            className="hover:text-blue-400 transition duration-300"
          >
            Instruments
          </Link>
        </div>
      </div>
    </nav>
  );
}
