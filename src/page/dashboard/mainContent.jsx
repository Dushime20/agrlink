import React from "react";
import TrackingHistory from "./TrackingHistory";
import Calender from "./Calender";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaPeopleGroup, FaPeopleRoof } from "react-icons/fa6";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const incomeData = [
  { name: "Daily", value: 1500000 },
  { name: "Monthly", value: 4500000 },
  { name: "Annual", value: 54000000 },
];

const COLORS = ["#f97316", "#3b82f6", "#22c55e"];

const MainContent = () => {
  return (
    <div className="pt-4 text-green-900 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg text-center flex flex-col justify-center">
            <h2 className="text-lg font-bold">Product Category</h2>
            <p>50</p>
          </div>
          <div className="bg-white flex gap-4 p-4 h-20 rounded-lg shadow-lg items-center justify-center">
            <div className="text-green-500 text-3xl">
              <FaShoppingCart />
            </div>
            <div>
              <h2 className="text-lg font-bold">Order</h2>
              <p>150</p>
            </div>
          </div>
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg flex gap-4 items-center justify-center">
            <div className="text-blue-500 text-3xl">
              <FaPeopleGroup />
            </div>
            <div>
              <h2 className="text-lg font-bold">Customer</h2>
              <p>100</p>
            </div>
          </div>
          <div className="bg-white p-4 h-20 rounded-lg shadow-lg flex gap-4 items-center justify-center">
            <div className="text-violet-500 text-3xl">
              <FaPeopleRoof />
            </div>
            <div>
              <h2 className="text-lg font-bold">Manager</h2>
              <p>10</p>
            </div>
          </div>
        </div>

        {/* Income Distribution & Calendar Section */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 overflow-x-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[300px]">
            <h2 className="text-xl font-bold mb-4">Income Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incomeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {incomeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 min-w-[280px]">
            <Calender />
          </div>
        </div>

        {/* User Status & Tracking History Section */}
        <div className="flex flex-col lg:flex-row gap-4 overflow-x-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">User Status</h2>
            <table className="min-w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-4 py-2">Id</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2">Rober Hoak</td>
                    <td className="px-4 py-2">Customer</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-3">
                        <MdEdit className="text-green-500 text-2xl cursor-pointer" />
                        <MdDelete className="text-red-400 text-2xl cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white w-full lg:w-1/3 p-6 rounded-lg shadow-lg min-w-[280px]">
            <TrackingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
