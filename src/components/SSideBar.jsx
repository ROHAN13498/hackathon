import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";

const SSideBar = () => {
  const location = useLocation();
  const SideBarRoutes = [
    {
      icon: BiSearchAlt,
      label: "Explore",
      href: "/student/explore",
      isActive: location.pathname.includes("/explore"),
    },
    {
      icon: MdOutlineSpaceDashboard,
      label: "Dashboard",
      href: "/student/dashboard",
      isActive: location.pathname.includes("/dashboard"),
    },
  ];

  return (
    <div>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700  w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 max-h-full  ">
        <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700 gap-y-4">
          {SideBarRoutes.map((route, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className={cn(
                "flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-sky-200/40  hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none hover:scale-105",
                route.isActive && "bg-sky-200/40"
              )}
              onClick={() => {
                window.location.href = route.href;
              }}
            >
              <div className="grid place-items-center mr-4">
                {<route.icon size={24} className="h-5 w-5" />}
              </div>
              {route.label}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SSideBar;
