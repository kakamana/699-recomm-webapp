import { useState } from "react";

export default function QueryInput({ onSubmit }: { onSubmit: (query: string, numPosts: number) => void }) {
  const [query, setQuery] = useState("");
  const [numPosts, setNumPosts] = useState(3); // Default value for numPosts

  const handleSubmit = () => {
    onSubmit(query, numPosts);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-4">Query</h2>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 text-black bg-white rounded mb-4 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows={4}
        placeholder="Enter your query..."
      ></textarea>
      <div className="flex items-center justify-between mb-4">
        <label className="text-white font-medium">
          Number of Posts:
          <input
            type="number"
            value={numPosts}
            onChange={(e) => setNumPosts(Number(e.target.value))}
            className="ml-2 p-2 w-16 text-black bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            min="1"
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Ask
      </button>
    </div>
  );
}
