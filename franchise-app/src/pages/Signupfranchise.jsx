import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const pengajuan = {
        id: `FR-${String(Date.now()).slice(-4)}`,
        nama: formData.get("nama"),
        email: formData.get("email"),
        telepon: formData.get("telepon"),
        lokasi: formData.get("lokasi") || "",
        konsep: formData.get("konsep"),
        status: "Submitted",
      };
      const pengajuanTersimpan = JSON.parse(
        localStorage.getItem("pengajuanFranchise") || "[]",
      );

      localStorage.setItem(
        "pengajuanFranchise",
        JSON.stringify([...pengajuanTersimpan, pengajuan]),
      );
      setIsLoading(false);
      alert("Pengajuan franchise berhasil dikirim ke Admin BD.");
      navigate("/admin");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-black p-8 rounded-xl shadow-sm border border-gray-100 mt-12">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-black">
          Pengajuan <span className="text-yellow-500">Franchise</span>
        </h1>
        <p className="text-sm text-white mt-2">
          Isi data berikut untuk mengirim pengajuan kepada Admin BD
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            name="nama"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Nama calon mitra"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Alamat Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Rencana Lokasi Usaha
          </label>
          <input
            name="lokasi"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Contoh: Jakarta Selatan"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Konsep atau Jenis Franchise
          </label>
          <textarea
            name="konsep"
            required
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Contoh: franchise minuman dan makanan ringan"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nomor Telepon
          </label>
          <input
            name="telepon"
            type="tel"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="08xxxxxxxxxx"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors mt-2"
        >
          {isLoading ? "Mengirim Pengajuan..." : "Kirim Pengajuan Franchise"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
