import React, { useState } from "react";

const Sendouts = () => {
  const [messagePreview, setMessagePreview] = useState("Your message preview will appear here...");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">
          Sendouts
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Form */}
          <form className="space-y-6">
            {/* From Name */}
            <div>
              <label
                htmlFor="fromName"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                From Name:
              </label>
              <input
                type="text"
                id="fromName"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* From Email */}
            <div>
              <label
                htmlFor="fromEmail"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                From Email:
              </label>
              <div className="flex items-center mt-1">
                <input
                  type="text"
                  id="fromEmail"
                  placeholder="Enter your email prefix (e.g., user)"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-l-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-r-lg">
                  @tenebris.monster
                </span>
              </div>
            </div>

            {/* Reply-To */}
            <div>
              <label
                htmlFor="replyTo"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Reply-To:
              </label>
              <input
                type="email"
                id="replyTo"
                placeholder="Enter reply-to email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter email subject"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Message:
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                onChange={(e) => setMessagePreview(e.target.value)}
              ></textarea>
            </div>

            {/* Select Letter */}
            <div>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Select Letter
              </button>
            </div>

            {/* Message Type */}
            <div>
              <label
                htmlFor="messageType"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Message Type:
              </label>
              <select
                id="messageType"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Plain Text</option>
                <option>HTML</option>
              </select>
            </div>

            {/* Enable Tracking */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableTracking"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-700 rounded"
              />
              <label
                htmlFor="enableTracking"
                className="ml-2 block text-sm text-gray-600 dark:text-gray-300"
              >
                Enable Tracking
              </label>
            </div>

            {/* Send Email Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                Send Email
              </button>
            </div>
          </form>

          {/* Right Section - Message Preview */}
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300 mb-4">
              Message Preview
            </h2>
            <div className="h-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 text-gray-700 dark:text-gray-200 overflow-auto">
              {messagePreview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendouts;
