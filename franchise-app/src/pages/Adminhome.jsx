import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Adminhome = () => {
  const [pengajuan, setPengajuan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Meniru pemanggilan API (GET) saat halaman pertama kali dibuka
  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        // Data tiruan dari database
        const mockData = [
          {
            id: "FR-001",
            nama: "Budi Santoso",
            lokasi: "Jakarta Selatan",
            status: "Submitted",
          },
          {
            id: "FR-002",
            nama: "Siti Aminah",
            lokasi: "Medan",
            status: "Document Approved",
          },
          {
            id: "FR-003",
            nama: "Andi Wijaya",
            lokasi: "Surabaya",
            status: "Needs Revision",
          },
        ];
        setPengajuan(mockData);
        setIsLoading(false);
      }, 1000); // loading 1 detik
    };

    fetchData();
  }, []);

  // Fungsi pembantu untuk memberi warna pada status
  const getStatusColor = (status) => {
    switch (status) {
      case "Submitted":
        return "bg-gray-100 text-gray-700";
      case "Document Approved":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "Needs Revision":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="bg-gray-500 p-8 rounded-xl shadow-sm border border-gray-100 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Verifikasi Dokumen (Admin BD)
        </h1>
        {!isLoading && (
          <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full">
            {pengajuan.length} Total Pengajuan
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-gray-500 font-semibold">
          Memuat data dari server...
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-yellow-400">
                <th className="p-4 font-semibold text-gray-700">
                  ID Pengajuan
                </th>
                <th className="p-4 font-semibold text-gray-700">Calon Mitra</th>
                <th className="p-4 font-semibold text-gray-700">Lokasi</th>
                <th className="p-4 font-semibold text-gray-700">Status</th>
                <th className="p-4 font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengajuan.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-mono text-sm text-gray-600">
                    {item.id}
                  </td>
                  <td className="p-4 font-medium text-gray-800">{item.nama}</td>
                  <td className="p-4 text-gray-600">{item.lokasi}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <Link
                      to="/admin/review"
                      className="inline-block text-sm bg-white border border-gray-300 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 px-3 py-1 rounded transition-colors font-semibold"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Adminhome;
