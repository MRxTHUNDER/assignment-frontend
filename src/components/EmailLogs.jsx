import React, { useState } from "react";

const EmailLogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 5;

  // Sample data
  const emailLogs = [
    {
      recipient: "stewardstark0@gmail.com",
      from: "help@coinbase.com",
      subject: "Account Lookup",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:06:15",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "help@coinbase.com",
      subject: "Account Lookup",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:05:29",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "help@coinbase.com",
      subject: "Account Lookup",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:05:14",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "help@coinbase.com",
      subject: "Account Lookup",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:04:36",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "support@coinbase.com",
      subject: "sss",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:02:38",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "help@coinbase.com",
      subject: "test",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 03:01:58",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "support@coinbase.com",
      subject: "test",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 02:56:09",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "help@coinbase.com",
      subject: "test",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-24 02:55:52",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "support@river.com",
      subject: "Selling",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-19 16:18:16",
    },
    {
      recipient: "sanchitagarwal020@gmail.com",
      from: "support@riotgames.com",
      subject: "Selling",
      tracking: "Disabled",
      status: "Failed",
      timestamp: "2024-09-19 16:17:41",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(emailLogs.length / logsPerPage);
  const currentLogs = emailLogs.slice(
    (currentPage - 1) * logsPerPage,
    currentPage * logsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">
          Email Logs
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  Recipient Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  From Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  Subject
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  Tracking
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-200 border-b">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody>
              {currentLogs.map((log, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-700"
                  } hover:bg-blue-50 dark:hover:bg-blue-700`}
                >
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                    {log.recipient}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                    {log.from}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                    {log.subject}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                    {log.tracking}
                  </td>
                  <td className="px-4 py-2 text-sm text-red-500 dark:text-red-400 border-b">
                    {log.status === "Failed" ? "❌" : "✅"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b">
                    {log.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg shadow hover:bg-green-300 dark:hover:bg-green-500 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg shadow hover:bg-green-300 dark:hover:bg-green-500 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailLogs;
