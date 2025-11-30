import Image from "next/image";
import Link from "next/link";

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
    // Mock Campaign Detail Data (In a real app, fetch based on params.id)
    const campaign = {
        id: params.id,
        title: "Reforest Borneo",
        status: "Active",
        location: "East Kalimantan, Indonesia",
        plantingDate: "2024-12-15",
        raised: 15000000,
        target: 50000000,
        trees: 1500,
        donors: [
            { id: 1, name: "John Doe", amount: 500000, trees: 50, date: "2024-11-28" },
            { id: 2, name: "Jane Smith", amount: 250000, trees: 25, date: "2024-11-27" },
            { id: 3, name: "Anonymous", amount: 100000, trees: 10, date: "2024-11-26" },
            { id: 4, name: "Tech Corp", amount: 5000000, trees: 500, date: "2024-11-25" },
        ],
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link href="/dashboard/admin" className="hover:text-leaf-600">Kampanye</Link>
                <i className="bx bx-chevron-right"></i>
                <span>{campaign.title}</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{campaign.title}</h1>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><i className="bx bx-map"></i> {campaign.location}</span>
                        <span className="flex items-center gap-1"><i className="bx bx-calendar"></i> Planting: {campaign.plantingDate}</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-bold">{campaign.status}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                        <i className="bx bx-edit"></i> Edit
                    </button>
                    <button className="px-4 py-2 bg-leaf-600 hover:bg-leaf-700 text-white rounded-lg text-sm font-medium flex items-center gap-2">
                        <i className="bx bx-plus"></i> Tambah Pembaruan
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Total Donasi</h3>
                    <p className="text-3xl font-bold text-gray-800">Rp {campaign.raised.toLocaleString()}</p>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                        <div
                            className="bg-leaf-500 h-2 rounded-full"
                            style={{ width: `${(campaign.raised / campaign.target) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        {Math.round((campaign.raised / campaign.target) * 100)}% dari Target Rp {campaign.target.toLocaleString()}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Akumulasi Pohon</h3>
                    <p className="text-3xl font-bold text-gray-800">{campaign.trees}</p>
                    <p className="text-xs text-leaf-600 mt-1 flex items-center gap-1">
                        <i className="bx bx-up-arrow-alt"></i> +120 Minggu ini
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Total Donatur</h3>
                    <p className="text-3xl font-bold text-gray-800">{campaign.donors.length}</p>
                </div>
            </div>

            {/* Donation Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-bold text-gray-800">History Donatur</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                            <tr>
                                <th className="px-6 py-3 font-medium">Nama</th>
                                <th className="px-6 py-3 font-medium">Jumlah</th>
                                <th className="px-6 py-3 font-medium">Benih</th>
                                <th className="px-6 py-3 font-medium">Tanggal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {campaign.donors.map((donor) => (
                                <tr key={donor.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{donor.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">Rp {donor.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{donor.trees} 🌲</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{donor.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
