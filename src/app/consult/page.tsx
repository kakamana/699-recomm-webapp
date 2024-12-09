"use client";

import { useState } from "react";
import QueryInput from "@/components/consult/QueryInput";

export default function ConsultPage() {
  const [recommendations, setRecommendations] = useState([]); // Store recommendations
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current recommendation

  const fetchData = async (query: string, numPosts: number) => {
    const response = await fetch(`http://localhost:8000/recommend/${numPosts}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    const data = await response.json();
    setRecommendations(data.recommendations || []);
    setCurrentIndex(0); // Reset to the first recommendation
  };

  const handleNext = () => {
    if (currentIndex < recommendations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center p-4">OSINT Agent</h1>
      <div className="flex-grow flex flex-col space-y-6 w-full max-w-screen-lg mx-auto p-6">
        <QueryInput onSubmit={fetchData} />
        {recommendations.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Recommendation</h2>
            <p>{recommendations[currentIndex].text}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                &lt; Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === recommendations.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Next &gt;
              </button>
            </div>
            <div className="mt-4">
              <Rating />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex items-center">
      <p className="mr-2">Rate this post:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
