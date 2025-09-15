'use client';

import React from 'react';

export const Committee: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Committee Members</h2>
        <ul className="space-y-4">
          {['Alice', 'Bob', 'Charlie'].map((member) => (
            <li key={member} className="bg-gray-800 p-4 rounded">
              {member}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
