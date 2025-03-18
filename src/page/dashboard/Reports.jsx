import React from 'react';

const Reports = () => {
  // Sample data for reports
  const reports = [
    { id: 1, title: 'Report 1', description: 'Description of Report 1', date: '2023-08-01', status: 'Resolved' },
    { id: 2, title: 'Report 2', description: 'Description of Report 2', date: '2023-08-05', status: 'Pending' },
    { id: 3, title: 'Report 3', description: 'Description of Report 3', date: '2023-08-10', status: 'In Progress' },
    // Add more report data as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">All Reports</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 ">Report ID</th>
              <th className="py-2 px-4 ">Title</th>
              <th className="py-2 px-4 ">Description</th>
              <th className="py-2 px-4 ">Date</th>
              <th className="py-2 px-4 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className="py-2 px-4  text-center">{report.id}</td>
                <td className="py-2 px-4 ">{report.title}</td>
                <td className="py-2 px-4 ">{report.description}</td>
                <td className="py-2 px-4 ">{report.date}</td>
                <td className={`py-2 px-4  ${report.status === 'Resolved' ? 'text-green-500' : report.status === 'Pending' ? 'text-yellow-500' : 'text-blue-500'}`}>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
