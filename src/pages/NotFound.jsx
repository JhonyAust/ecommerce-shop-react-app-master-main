import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404 - Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
