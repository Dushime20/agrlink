import React from "react";
import TrackingHistory from "./TrackingHistory";
import Calender from "./Calender";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";

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
    <div className="pt-4  text-green-900 bg-gray-100 min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Summary Section */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 h-16 rounded-lg shadow-lg text-center flex flex-col justify-center">
            <h2 className="text-lg font-bold">Product Category</h2>
            <p>50</p>
          </div>
          <div className="bg-white flex gap-4 p-4 h-16 rounded-lg shadow-lg items-center justify-center">
            <div className="text-green-500 text-3xl">
              <FaShoppingCart />
            </div>
            <div>
              <h2 className="text-lg font-bold">Order</h2>
              <p>150</p>
            </div>
          </div>
          <div className="bg-white p-4 h-16 rounded-lg shadow-lg text-center flex gap-4 items-center justify-center">
            <div className="text-blue-500 text-3xl">
              <FaPeopleGroup />
            </div>
            <div>
              <h2 className="text-lg font-bold">Customer</h2>
              <p>100</p>
            </div>
          </div>
          <div className="bg-white p-4 h-16 rounded-lg shadow-lg text-center flex gap-4 items-center justify-center">
          <div className="text-violet-500 text-3xl">
              <FaPeopleRoof />
            </div>
            <div>
              <h2 className="text-lg font-bold">Manager</h2>
              <p>10</p>
            </div>
          </div>
        </div>

        {/* Car Information Section */}
        <div className="mb-6 flex gap-2 overflow-x-auto overflow-y-auto sm:overflow-x-auto sm:overflow-y-auto">
          <div className="w-full bg-white p-6 rounded-lg shadow-lg">
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

          <div className="bg-white p-6 w-1/3 rounded-lg shadow-lg">
            <Calender />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="flex gap-2 overflow-x-auto overflow-y-auto sm:overflow-x-auto sm:overflow-y-auto">
          <div className="bg-white p-6 rounded-lg w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4">User Status</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>

                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Manager</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Manager</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Customer</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Customer</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Customer</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>

                  <td>Rober Hoak</td>

                  <td>Customer</td>
                  <td>
                    <div className="flex gap-3">
                      <p className="text-green-500 text-2xl">
                        <MdEdit />
                      </p>
                      <p className="text-red-400 text-2xl">
                        <MdDelete />
                      </p>
                    </div>
                  </td>
                </tr>

                {/* Additional rows */}
              </tbody>
            </table>
          </div>
          <div className="bg-white w-1/3 p-6 rounded-lg shadow-lg">
            <TrackingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
