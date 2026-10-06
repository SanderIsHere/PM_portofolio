import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi proses API register selama 1 detik
    setTimeout(() => {
      setIsLoading(false);
      alert("Pendaftaran akun berhasil! Silakan isi form pengajuan.");
      // Setelah berhasil, arahkan user ke halaman utama (Form Pengajuan)
      navigate("/");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-12">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Buat Akun <span className="text-yellow-500">Mitra</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Daftar untuk memulai pengajuan franchise Anda
        </p>
      </div>

      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Alamat Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="mitra@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            minLength="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Minimal 6 karakter"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors mt-2"
        >
          {isLoading ? "Memproses..." : "Daftar Akun"}
        </button>
      </form>

      <div className="text-center mt-6 text-sm text-gray-600">
        Sudah punya akun?{" "}
        {/* Anggap saja link ke login, untuk prototype kita biarkan mengarah ke # */}
        <a href="#" className="font-bold text-yellow-600 hover:text-yellow-700">
          Masuk di sini
        </a>
      </div>
    </div>
  );
};

export default SignUp;
