import React, { useState } from 'react';

const Support = () => {
  // State to manage form inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to manage submitted support requests
  const [requests, setRequests] = useState([]);

  // Handler to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests((prevRequests) => [...prevRequests, form]);
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Support</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Submit a Support Request</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-black text-white rounded">Submit</button>
        </form>
      </div>

      {/* <div>
        <h3 className="text-lg font-semibold mb-2">Support Requests</h3>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Subject</th>
                <th className="py-2 px-4">Message</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-4">{request.name}</td>
                  <td className="py-2 px-4">{request.email}</td>
                  <td className="py-2 px-4">{request.subject}</td>
                  <td className="py-2 px-4">{request.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Support;
