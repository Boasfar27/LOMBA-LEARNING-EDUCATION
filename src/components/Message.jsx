import React, { useState } from 'react';

function Message({ user }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Kirim pesan ke server atau API (misalnya, menggunakan axios)
    console.log(message);
    setMessage('');
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="font-semibold">Pesan untuk {user}</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full mt-2"
        rows="4"
        placeholder={`Tulis pesan untuk ${user}`}
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 mt-2 rounded">Kirim Pesan</button>
    </div>
  );
}

export default Message;
