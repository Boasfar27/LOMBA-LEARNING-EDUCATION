import React from 'react';
import { useParams } from 'react-router-dom';

function Materi() {
  const { id } = useParams(); // Mendapatkan ID materi dari URL

  return (
    <div>
      <h2 className="text-2xl font-bold">Materi Pembelajaran {id}</h2>
      <p>Ini adalah materi pembelajaran untuk ID: {id}. Anda dapat menambahkan video, dokumen, atau quiz di sini.</p>
    </div>
  );
}

export default Materi;
