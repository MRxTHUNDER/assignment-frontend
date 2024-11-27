import React from "react";

const ApiManagement = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8">
        {/* API Management Title */}
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300 text-center mb-6">
          API Management
        </h1>

        {/* API Key Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4">Your API Key:</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value="38ac1320-471e-4d3b-9f88-a719c2121dea"
              readOnly
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Regenerate API Key
            </button>
          </div>
        </div>

        {/* API Documentation Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">API Documentation</h2>

          {/* API Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Send Email API
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This API allows you to send emails using your generated API key. Attachments are
                also supported.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-600 dark:text-gray-400">Endpoint:</h4>
                <p className="text-sm text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 mt-2">
                  POST /api/send_email
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-600 dark:text-gray-400">Headers:</h4>
                <ul className="text-sm text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 mt-2">
                  <li>API-Key: your_api_key_here</li>
                  <li>Content-Type: multipart/form-data</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-600 dark:text-gray-400">Parameters:</h4>
                <ul className="text-sm text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 mt-2 list-disc pl-5">
                  <li><strong>to_email</strong> (string, required): Recipient email address</li>
                  <li><strong>from_name</strong> (string, required): Sender name</li>
                  <li><strong>from_email</strong> (string, required): Sender email address</li>
                  <li><strong>reply_to</strong> (string, required): Reply-to email address</li>
                  <li><strong>subject</strong> (string, required): Email subject</li>
                  <li><strong>message</strong> (string, required): Email body</li>
                  <li><strong>message_type</strong> (string, required): Message type (plain/html)</li>
                  <li><strong>tracking</strong> (boolean, optional): Enable tracking (true/false)</li>
                  <li><strong>attachments</strong> (file, optional): Email attachments</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-600 dark:text-gray-400">Example Request:</h4>
                <div className="text-sm text-gray-800 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-2 mt-2">
                  <pre className="whitespace-pre-line">
                    POST /api/send_email{"\n"}
                    Headers:{"\n"} API-Key: your_api_key_here{"\n"}
                    Content-Type: multipart/form-data{"\n"}
                    {"\n"}
                    Body:{"\n"} to_email=recipient@example.com{"\n"} from_name=Sender Name{"\n"} from_email=sender@example.com{"\n"} subject=Hello{"\n"} message=This is a test email{"\n"}
                  </pre>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Example Response</h2>
                <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-300">
                  <pre className="whitespace-pre-line">
                    {"{"}
                    {"\n"}  "success": "Email sent successfully",{"\n"}
                    "credits_deducted": 0.3{"\n"}
                    {"}"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiManagement;
