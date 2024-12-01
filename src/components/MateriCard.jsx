import React from 'react';
import { Link } from 'react-router-dom';

function MateriCard({ title, description, id }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link to={`/materi/${id}`} className="text-blue-500 mt-2 inline-block">Lihat Materi</Link>
    </div>
  );
}

export default MateriCard;
