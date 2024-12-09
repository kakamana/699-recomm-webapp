export default function AnswerOutput({ answer }: { answer: string }) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg w-full">
        <h2 className="text-xl font-semibold mb-2">Answer</h2>
        <p>{answer || "No answer available yet."}</p>
      </div>
    );
  }
  