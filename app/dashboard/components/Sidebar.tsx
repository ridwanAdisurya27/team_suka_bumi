"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ show = false }) {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const pathname = usePathname();

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? "text-leaf-900 bg-leaf-200 rounded-full"
      : "text-leaf-900 rounded-full";
  };

  return (
    <div
      className={`flex flex-col ${
        isTextVisible ? "w-60" : "w-20"
      } transition-all duration-300`}
    >
      <div className="flex flex-row p-4 width-full items-center justify-between">
        {/* Toggle button */}
        <button
          onClick={toggleTextVisibility}
          className="p-2 rounded-full hover:bg-leaf-100 transition-colors flex items-center justify-between"
          title={isTextVisible ? "Hide text" : "Show text"}
        >
          <span className="material-symbols-rounded text-leaf-900">
            {isTextVisible
              ? "keyboard_double_arrow_left"
              : "keyboard_double_arrow_right"}
          </span>
        </button>
        {isTextVisible && <span className="retext text-3xl mr-4">Resapling</span>}
      </div>
      {/* Navigation menu */}
      <ul className={`p-4 h-screen menu ${!isTextVisible ? "px-2" : ""}`}>
        <li className="space-y-2">
          <Link
            className={`${isActive("/dashboard")} flex items-center ${
              !isTextVisible ? "justify-center" : "space-x-3"
            } p-2 hover:bg-leaf-100 transition-colors`}
            href="/dashboard"
            onClick={() => {}}
            title="Dashboard"
          >
            <span className="material-symbols-rounded">dashboard</span>
            {isTextVisible && <span>Dashboard</span>}
          </Link>

          <Link
            className={`${isActive("/dashboard/campaign")} flex items-center ${
              !isTextVisible ? "justify-center" : "space-x-3"
            } p-2 hover:bg-leaf-100 transition-colors`}
            href="/dashboard/campaign"
            onClick={() => {}}
            title="Kampanye"
          >
            <span className="material-symbols-rounded">volunteer_activism</span>
            {isTextVisible && <span>Kampanye</span>}
          </Link>

          <Link
            className={`${isActive(
              "/dashboard/leaderboard"
            )} flex items-center ${
              !isTextVisible ? "justify-center" : "space-x-3"
            } p-2 hover:bg-leaf-100 transition-colors`}
            href="/dashboard/leaderboard"
            onClick={() => {}}
            title="LeaderBoard"
          >
            <span className="material-symbols-rounded">leaderboard</span>
            {isTextVisible && <span>LeaderBoard</span>}
          </Link>

          <Link
            className={`${isActive("/dashboard/upgrade")} flex items-center ${
              !isTextVisible ? "justify-center" : "space-x-3"
            } p-2 hover:bg-leaf-100 transition-colors`}
            href="/dashboard/upgrade"
            onClick={() => {}}
            title="Upgrade"
          >
            <span className="material-symbols-rounded">
              keyboard_double_arrow_up
            </span>
            {isTextVisible && <span>Upgrade</span>}
          </Link>

          <Link
            className={`${isActive("/dashboard/admin")} flex items-center ${
              !isTextVisible ? "justify-center" : "space-x-3"
            } p-2 hover:bg-leaf-100 transition-colors`}
            href="/dashboard/admin"
            onClick={() => {}}
            title="Admin"
          >
            <span className="material-symbols-rounded">person</span>
            {isTextVisible && <span>Admin</span>}
          </Link>

          {show && (
            <>
              <Link
                className={`${isActive(
                  "/dashboard/admin/data"
                )} flex items-center ${
                  !isTextVisible ? "justify-center" : "space-x-3"
                } p-2 hover:bg-leaf-100 transition-colors`}
                href="/dashboard/admin/data"
                onClick={() => {}}
                title="Data"
              >
                <span className="material-symbols-rounded">
                  subdirectory_arrow_right
                </span>
                {isTextVisible && <span>Data</span>}
              </Link>

              <Link
                className={`${isActive(
                  "/dashboard/admin/campaign"
                )} flex items-center ${
                  !isTextVisible ? "justify-center" : "space-x-3"
                } p-2 hover:bg-leaf-100 transition-colors`}
                href="/dashboard/admin/campaign"
                onClick={() => {}}
                title="Campaign"
              >
                <span className="material-symbols-rounded">
                  subdirectory_arrow_right
                </span>
                {isTextVisible && <span>Campaign</span>}
              </Link>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
