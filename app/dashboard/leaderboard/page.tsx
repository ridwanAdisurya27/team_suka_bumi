import Image from "next/image";

export default function LeaderboardPage() {
  // Mock Leaderboard Data
  const leaderboard = [
    { rank: 1, name: "Green Earth Foundation", trees: 1250, avatar: "https://ui-avatars.com/api/?name=Green+Earth&background=random" },
    { rank: 2, name: "EcoWarriors Jakarta", trees: 980, avatar: "https://ui-avatars.com/api/?name=Eco+Warriors&background=random" },
    { rank: 3, name: "Sarah Johnson", trees: 850, avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random" },
    { rank: 4, name: "PT. Suka Bumi Indah", trees: 720, avatar: "https://ui-avatars.com/api/?name=Suka+Bumi&background=random" },
    { rank: 5, name: "Budi Santoso", trees: 650, avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=random" },
    { rank: 6, name: "Rina Melati", trees: 500, avatar: "https://ui-avatars.com/api/?name=Rina+Melati&background=random" },
    { rank: 7, name: "Tech for Good", trees: 450, avatar: "https://ui-avatars.com/api/?name=Tech+Good&background=random" },
    { rank: 8, name: "Andi Wijaya", trees: 300, avatar: "https://ui-avatars.com/api/?name=Andi+Wijaya&background=random" },
    { rank: 9, name: "Community Care", trees: 280, avatar: "https://ui-avatars.com/api/?name=Community+Care&background=random" },
    { rank: 10, name: "Dewi Lestari", trees: 250, avatar: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=random" },
    { rank: 11, name: "Nature Lovers", trees: 200, avatar: "https://ui-avatars.com/api/?name=Nature+Lovers&background=random" },
    { rank: 12, name: "Ridwan Adisurya", trees: 145, avatar: "https://ui-avatars.com/api/?name=Ridwan+Adisurya&background=6fbf68&color=fff", isUser: true },
    { rank: 13, name: "Global Green", trees: 120, avatar: "https://ui-avatars.com/api/?name=Global+Green&background=random" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Leaderboard</h1>
          <p className="text-gray-500">Top contributors making the world greener.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50">
            Global
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50">
            This Month
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
              <tr>
                <th className="px-6 py-4 font-medium w-20 text-center">Rank</th>
                <th className="px-6 py-4 font-medium">Donor / Campaign</th>
                <th className="px-6 py-4 font-medium text-right">Trees Donated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leaderboard.map((item) => (
                <tr
                  key={item.rank}
                  className={`transition-colors ${item.isUser ? 'bg-leaf-50 hover:bg-leaf-100' : 'hover:bg-gray-50'}`}
                >
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold
                        ${item.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                          item.rank === 2 ? 'bg-gray-100 text-gray-700' :
                            item.rank === 3 ? 'bg-orange-100 text-orange-700' :
                              'text-gray-500'}`}
                    >
                      {item.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={""}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className={`font-medium ${item.isUser ? 'text-leaf-800' : 'text-gray-800'}`}>
                          {item.name} {item.isUser && "(You)"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-bold text-gray-800">{item.trees}</span> 🌲
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
