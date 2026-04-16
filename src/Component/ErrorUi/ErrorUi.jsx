import React from 'react';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

const ErrorUi = ({ 
  errorCode = "404", 
  title = "Oops! Page not found", 
  message = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
}) => {
  
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-lg">
        {/* Animated Icon Container */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-red-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
            <AlertTriangle size={64} className="text-red-500 mx-auto" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-black text-gray-200 absolute left-1/2 -translate-x-1/2 -top-10 -z-10 select-none">
          {errorCode}
        </h1>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-10 leading-relaxed">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all active:scale-95 shadow-lg shadow-indigo-200"
          >
            <Home size={18} />
            Back to Home
          </button>
          
          <button 
            onClick={handleRefresh}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all active:scale-95 shadow-sm"
          >
            <RefreshCcw size={18} />
            Try Again
          </button>
        </div>

        {/* Footer Link */}
        <p className="mt-12 text-sm text-gray-400">
          Think this is a mistake? <a href="/contact" className="text-indigo-600 underline underline-offset-4">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default ErrorUi;