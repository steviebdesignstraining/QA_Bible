import React from 'react';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">HTTP Methods</h1>
      <p className="mb-6">HTTP methods define actions performed on resources in REST APIs.</p>
      <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 p-4 mb-6">
        <p className="font-semibold">🟦 Info:</p>
        <p>Core methods: GET (read), POST (create), PUT (update), DELETE (remove)</p>
      </div>
    </div>
  );
}