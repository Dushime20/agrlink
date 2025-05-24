import React, { useState } from "react";
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import MainApp from "./mai.jsx";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen  h-[100vh]">
      {/* Sidebar - hidden on mobile by default, toggled by button */}
      <aside
        className={`
          fixed md:sticky inset-y-0 left-0 z-30 w-48
          transform  md:translate-x-0 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SideBar />
      </aside>

      {/* Overlay to close sidebar on mobile when open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main content area */}
      <main className="flex flex-col flex-1 min-h-screen md:min-h-full">
        {/* Header with menu toggle button on mobile */}
        <header className="flex items-center justify-between bg-white  p-4 md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            className="text-gray-700 focus:outline-none focus:ring"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Header />
        </header>

        {/* Header for desktop */}
        <header className="hidden md:flex flex-shrink-0 ">
          <Header />
        </header>

        {/* Main app content */}
        <section className="flex-1 overflow-auto p-4">
          <MainApp />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
