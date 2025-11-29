import Image from "next/image";

export default function CampaignUpdatesPage() {
    // Mock Updates Data
    const updates = [
        {
            id: 1,
            campaign: "Reforest Borneo",
            organizer: "Green Earth Foundation",
            date: "2024-11-28",
            title: "Phase 1 Planting Complete!",
            content: "We have successfully planted 5,000 seedlings in the designated area. Thanks to all donors for your support! The local community has been incredibly helpful in clearing the land and preparing the soil.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
            tags: ["Milestone", "Planting"],
        },
        {
            id: 2,
            campaign: "Urban Green Jakarta",
            organizer: "EcoWarriors Jakarta",
            date: "2024-11-20",
            title: "Site Preparation Underway",
            content: "Our team is currently at the site preparing for the upcoming planting event next weekend. We are clearing debris and marking the spots for the new trees.",
            image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&q=80&w=800",
            tags: ["Preparation"],
        },
        {
            id: 3,
            campaign: "Save Sumatra Tigers",
            organizer: "Wildlife Protection",
            date: "2024-11-15",
            title: "New Partnership Announced",
            content: "We are thrilled to announce a new partnership with the local forestry department to expand our conservation area. This will allow us to plant an additional 2,000 trees this year.",
            image: "https://images.unsplash.com/photo-1596356453261-0d265ae2520d?auto=format&fit=crop&q=80&w=800",
            tags: ["Partnership", "Expansion"],
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Campaign Updates</h1>
                <p className="text-gray-500">See the impact of your donations in real-time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {updates.map((update) => (
                    <div key={update.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48 w-full">
                            <Image
                                src={""}
                                alt={update.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-leaf-700 rounded-full">
                                    {update.campaign}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
                                <i className="bx bx-calendar"></i>
                                <span>{update.date}</span>
                                <span className="mx-1">•</span>
                                <span>{update.organizer}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{update.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{update.content}</p>
                            <div className="flex flex-wrap gap-2">
                                {update.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
