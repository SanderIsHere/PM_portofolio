// src/layouts/RootLayout.jsx
import { Link, Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar Kuning & Putih */}
      <nav className="bg-white border-b-4 border-yellow-400 shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          Franchise<span className="text-yellow-500">Hub</span>
        </div>
        <div className="space-x-6 font-semibold text-gray-600">
          <Link to="/" className="hover:text-yellow-500 transition-colors">
            Portal Mitra
          </Link>
          <Link to="/admin" className="hover:text-yellow-500 transition-colors">
            Admin BD
          </Link>
          <Link
            to="/admin/survey"
            className="hover:text-yellow-500 transition-colors"
          >
            Survey lokasi
          </Link>
        </div>
      </nav>

      {/* Konten Halaman */}
      <main className="p-6 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
