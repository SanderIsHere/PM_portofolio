// src/pages/AdminReview.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminReview = () => {
  const navigate = useNavigate();
  const [catatan, setCatatan] = useState("");

  const handleAction = (actionType) => {
    if (actionType === "revisi" && catatan === "") {
      alert("Mohon isi catatan revisi terlebih dahulu!");
      return;
    }
    alert(`Status berhasil diupdate: ${actionType.toUpperCase()}`);
    navigate("/admin"); // Kembali ke dashboard admin setelah selesai
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
      <div className="flex justify-between items-center border-b-2 border-yellow-400 pb-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Review Dokumen Mitra
          </h1>
          <p className="text-gray-500">ID: FR-001 | Budi Santoso</p>
        </div>
        <button
          onClick={() => navigate("/admin")}
          className="text-gray-500 hover:text-gray-800 font-semibold"
        >
          Kembali
        </button>
      </div>

      {/* Grid Split Screen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kolom Kiri: Tampilan Dokumen (Mockup) */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-700">Dokumen Terlampir:</h3>

          <div className="border rounded-lg p-4 bg-gray-50">
            <span className="text-sm font-semibold text-gray-500">
              1. KTP (Kartu Tanda Penduduk)
            </span>
            <div className="h-40 bg-gray-300 rounded mt-2 flex items-center justify-center text-gray-500">
              [Gambar KTP_Budi.jpg]
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <span className="text-sm font-semibold text-gray-500">
              2. Foto Lokasi Usaha
            </span>
            <div className="h-40 bg-gray-300 rounded mt-2 flex items-center justify-center text-gray-500">
              [Gambar Lokasi.jpg]
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Form Evaluasi */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Aksi & Keputusan</h3>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Catatan Internal / Pesan Revisi:
            </label>
            <textarea
              rows="5"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
              placeholder="Contoh: Foto KTP buram, mohon upload ulang yang lebih jelas..."
            ></textarea>
          </div>

          <div className="space-y-3 mt-6">
            <button
              onClick={() => handleAction("approved")}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Approve & Lanjut ke Survei
            </button>

            <button
              onClick={() => handleAction("revisi")}
              className="w-full bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold py-3 rounded-lg transition-colors"
            >
              Minta Revisi Berkas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReview;
