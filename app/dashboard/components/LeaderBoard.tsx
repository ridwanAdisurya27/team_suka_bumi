import React, { PureComponent } from "react";

export class LeaderBoard extends PureComponent {
  render() {
    return (
      <div className="w-full card card-xs bg-white p-2">
        <span className="text-xl font-bold p-2">LeaderBoard</span>
        {LeaderBoardItem.map((item, index) => (
          <div key={index}>
            <div
              className={`rounded-t-lg w-full flex flex-row items-center justify-center transition duration-150 p-2 ${
                index == 0
                  ? `hover:bg-green-500`
                  : index == 1
                  ? `hover:bg-green-400`
                  : index == 2
                  ? `hover:bg-green-300`
                  : `hover:bg-green-100`
              }`}
            >
              <div className="text-4xl font-thin opacity-30 tabular-nums mr-4">
                {index + 1}
              </div>
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={item.image} />
                </div>
              </div>
              <div className="px-4 flex-1 flex flex-col items-start">
                <span className="">
                  {item.name} : {item.amount}
                </span>
                <div className="badge my-1 badge-success  !bg-leaf-700 !text-white">
                  {item.change}
                </div>
              </div>
            </div>
            {index != LeaderBoardItem.length - 1 && (
              <div className="h-[0.5] rounded mx-4 bg-base-300"></div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const LeaderBoardItem = [
  {
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&auto=format&fit=crop",
    name: "Aldo Pratama",
    amount: "Rp250.000",
    change: "+15%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&auto=format&fit=crop",
    name: "Rizky Andini",
    amount: "Rp180.000",
    change: "+8%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&auto=format&fit=crop",
    name: "Maya Lestari",
    amount: "Rp120.000",
    change: "+5%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&auto=format&fit=crop",
    name: "Rendi Akbar",
    amount: "Rp95.000",
    change: "+2%",
  },
];

export default LeaderBoard;
