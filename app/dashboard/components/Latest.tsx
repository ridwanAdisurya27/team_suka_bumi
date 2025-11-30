import React, { PureComponent } from "react";

export class Latest extends PureComponent {
  render() {
    return (
      <div className="w-full card card-xs bg-white shadow-sm p-4">
        <span className="text font-bold">Donasi Terbaru</span>
        <div className="flex items-center gap-2">
          {LeaderBoardItem[0].amount > 30000 ? (
            <>
              <i className="bx bxs-up-arrow bx-sm text-leaf-700"></i>
            </>
          ) : (
            <>
              <i className="bx bxs-down-arrow"></i>
            </>
          )}
          <p className="text-4xl font-bold">Rp. {LeaderBoardItem[0].amount}</p>
          <div className="badge my-1 badge-success !bg-leaf-700 !text-white">
            {LeaderBoardItem[0].change}
          </div>
        </div>
      </div>
    );
  }
}

const LeaderBoardItem = [
  {
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Smith",
    amount: 100000,
    change: "+10%",
  },
];

export default Latest;
