import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-400">
      {/* 1. HERO SECTION (Bagian Atas) */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
          Bangun Kesuksesan Bisnis Anda Bersama{" "}
          <span className="text-yellow-500">FranchiseHub</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Bergabunglah dengan ratusan mitra kami di seluruh Indonesia. Sistem
          digital kami memastikan proses pendaftaran franchise Anda cepat,
          transparan, dan mudah dipantau.
        </p>

        {/* Tombol Utama Mengarah ke Sign Up */}
        <Link
          to="/signUp"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all inline-block hover:-translate-y-1"
        >
          Mulai Pendaftaran Franchise
        </Link>
        <p className="mt-4 text-sm text-gray-500 font-medium">
          Proses persetujuan kurang dari 14 hari kerja.
        </p>
      </section>

      {/* 2. SECTION KEUNGGULAN (Why Choose Us) */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Kenapa Memilih Kemitraan Kami?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ROI Cepat
              </h3>
              <p className="text-gray-600">
                Model bisnis yang sudah terbukti mendatangkan keuntungan balik
                modal (ROI) di bawah 12 bulan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                100% Digital
              </h3>
              <p className="text-gray-600">
                Lacak status pengajuan, upload dokumen, dan tanda tangan kontrak
                secara digital tanpa ribet.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-yellow-400 transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Support Penuh
              </h3>
              <p className="text-gray-600">
                Dukungan dari tim pusat mulai dari pencarian lokasi, training
                staf, hingga marketing opening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION CARA KERJA (Simple Workflow) */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          4 Langkah Menjadi Mitra
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4">
          <div className="flex-1">
            <div className="w-12 h-12 bg-yellow-400 text-gray-900 font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              1
            </div>
            <h4 className="font-bold text-gray-800">Daftar Akun</h4>
            <p className="text-sm text-gray-500 mt-2">
              Isi data diri di portal digital kami.
            </p>
          </div>
          <div className="hidden md:block text-gray-300 mt-4">➔</div>

          <div className="flex-1">
            <div className="w-12 h-12 bg-yellow-400 text-gray-900 font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              2
            </div>
            <h4 className="font-bold text-gray-800">Verifikasi & Survei</h4>
            <p className="text-sm text-gray-500 mt-2">
              Tim kami akan mengecek kelayakan lokasi.
            </p>
          </div>
          <div className="hidden md:block text-gray-300 mt-4">➔</div>

          <div className="flex-1">
            <div className="w-12 h-12 bg-yellow-400 text-gray-900 font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              3
            </div>
            <h4 className="font-bold text-gray-800">TTD Kontrak</h4>
            <p className="text-sm text-gray-500 mt-2">
              Persetujuan digital dan pembayaran DP.
            </p>
          </div>
          <div className="hidden md:block text-gray-300 mt-4">➔</div>

          <div className="flex-1">
            <div className="w-12 h-12 bg-yellow-400 text-gray-900 font-bold rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              4
            </div>
            <h4 className="font-bold text-gray-800">Grand Opening</h4>
            <p className="text-sm text-gray-500 mt-2">
              Outlet siap beroperasi dan hasilkan cuan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
