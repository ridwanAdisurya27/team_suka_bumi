import React, { useState, useEffect } from "react";

export function History() {
  const [change, setChange] = useState<number>(0);

  useEffect(() => {
    if (HistoryItems.length > 0) {
      const lastItem = HistoryItems[HistoryItems.length - 1];
      setChange(lastItem.amount);
    }
  }, []);

  useEffect(() => {
    console.log("Change updated:", change);
  }, [change]);

  return (
    <div className="w-full card card-xs bg-white p-2">
      <span className="text-xl font-bold p-2">History</span>
      {HistoryItems.map((item, index) => (
        <div key={index}>
          <div className="rounded-xl w-full flex flex-row items-center justify-center hover:bg-base-300 transition duration-150 p-2">
            <p>{item.date} | </p>
            <div className="px-4 flex-1 flex flex-col justify-start items-start">
              <span className="font-semibold">Campaign: {item.campaign}</span>
              <div className="w-full flex justify-between items-center mt-1">
                <span>Rp. {item.amount.toLocaleString()}</span>
                {change > item.amount ? (
                  <div className="badge my-1 badge-error">{item.change}</div>
                ) : (
                  <div className="badge my-1 badge-success !bg-leaf-700 !text-white">
                    {item.change}
                  </div>
                )}
              </div>
            </div>
          </div>
          {index !== HistoryItems.length - 1 && (
            <div className="h-[0.5] rounded mx-4 bg-base-300"></div>
          )}
        </div>
      ))}
    </div>
  );
}

const HistoryItems = [
  {
    name: "Raul Her",
    amount: 150000,
    change: "+5%",
    date: "2025-01-03",
    campaign: "Penanaman Pohon Mangrove",
  },
  {
    name: "Raul Her",
    amount: 170000,
    change: "+8%",
    date: "2025-01-05",
    campaign: "Gerakan 1000 Pohon Kota Hijau",
  },
  {
    name: "Raul Her",
    amount: 90000,
    change: "-2%",
    date: "2025-01-08",
    campaign: "Reforestasi Gunung Bromo",
  },
  {
    name: "Raul Her",
    amount: 220000,
    change: "+12%",
    date: "2025-01-10",
    campaign: "Hutan Kota untuk Masa Depan",
  },
];

export default History;
