import React from 'react';

function Notification({ message }) {
  return (
    <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-4">
      <p>{message}</p>
    </div>
  );
}

export default Notification;
