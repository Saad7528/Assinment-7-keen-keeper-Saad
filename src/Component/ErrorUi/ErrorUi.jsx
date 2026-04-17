import React from 'react';
import { Link } from 'react-router';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

const ErrorUi = ({
  errorCode = '404',
  title = 'Page not found',
  message = 'This page does not exist.',
  compact = false,
}) => {
  return (
    <div className={compact ? 'min-h-[40vh] flex items-center justify-center px-4 py-8' : 'min-h-screen flex items-center justify-center px-4 bg-gray-50'}>
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow border">
            <AlertTriangle size={48} className="text-red-500" />
          </div>
        </div>

        <p className="text-6xl font-bold text-gray-200 mb-2">{errorCode}</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 mb-8">{message}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn bg-[#275345] text-white border-0">
            <Home size={18} /> Home
          </Link>
          <button type="button" className="btn btn-outline" onClick={() => window.location.reload()}>
            <RefreshCcw size={18} /> Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorUi;
