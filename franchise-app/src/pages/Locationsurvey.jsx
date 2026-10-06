// src/pages/SurveiLokasi.jsx
import { useState, useEffect } from "react";

const Locationsurvey = () => {
  const [traffic, setTraffic] = useState(0);
  const [akses, setAkses] = useState(0);
  const [visibilitas, setVisibilitas] = useState(0);
  const [score, setScore] = useState(0);

  // Efek untuk menghitung score otomatis ketika input berubah
  useEffect(() => {
    // Rumus sederhana untuk mock-up (skala 1-10 per variabel, dikali pengali agar max 100)
    const total =
      ((Number(traffic) + Number(akses) + Number(visibilitas)) / 30) * 100;
    setScore(Math.round(total));
  }, [traffic, akses, visibilitas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Survei disubmit dengan Score: ${score}. Status: ${score >= 70 ? "LAYAK" : "TIDAK LAYAK"}`,
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2 mb-6 inline-block">
        Form Evaluasi Lokasi Lapangan
      </h1>

      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500 font-semibold">Target Lokasi:</p>
        <p className="text-lg font-bold text-gray-800">
          Kawasan Sudirman (FR-001)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Slider Penilaian */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Volume Pejalan Kaki / Lalu Lintas (Traffic)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={traffic}
            onChange={(e) => setTraffic(e.target.value)}
            className="w-full accent-yellow-500"
          />
          <span className="text-sm font-bold text-gray-500">
            Nilai: {traffic}/10
          </span>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Aksesibilitas (Parkir & Transportasi)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={akses}
            onChange={(e) => setAkses(e.target.value)}
            className="w-full accent-yellow-500"
          />
          <span className="text-sm font-bold text-gray-500">
            Nilai: {akses}/10
          </span>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Visibilitas (Tingkat Keterlihatan Toko)
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={visibilitas}
            onChange={(e) => setVisibilitas(e.target.value)}
            className="w-full accent-yellow-500"
          />
          <span className="text-sm font-bold text-gray-500">
            Nilai: {visibilitas}/10
          </span>
        </div>

        {/* Kalkulasi Score */}
        <div
          className={`p-4 rounded-lg border-2 text-center mt-8 transition-colors ${score >= 70 ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`}
        >
          <p className="text-sm font-semibold text-gray-600 mb-1">
            Feasibility Score (Sistem):
          </p>
          <h2
            className={`text-4xl font-bold ${score >= 70 ? "text-green-600" : "text-red-600"}`}
          >
            {score} <span className="text-xl">/ 100</span>
          </h2>
          <p className="text-sm mt-2 font-bold">
            {score >= 70
              ? "✅ Lolos Standar Minimal (>= 70)"
              : "❌ Tidak Lolos Standar Minimal (< 70)"}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors mt-4"
        >
          Kirim Laporan Survei
        </button>
      </form>
    </div>
  );
};

export default Locationsurvey;
