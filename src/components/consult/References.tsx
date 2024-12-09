export default function References({ references }: { references: Array<{ title: string; content: string }> }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full">
      <h2 className="text-xl font-semibold mb-2">References</h2>
      <div className="space-y-4">
        {references.length > 0 ? (
          references.map((ref, index) => (
            <div key={index}>
              <h3 className="font-bold">{ref.title}</h3>
              <p>{ref.content}</p>
            </div>
          ))
        ) : (
          <p>No references available yet.</p>
        )}
      </div>
    </div>
  );
}
