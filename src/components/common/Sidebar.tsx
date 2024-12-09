import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <h2 className="p-4 text-lg font-bold border-b border-gray-700">Application</h2>
      <nav className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/consult">Ask Agent</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/chat">Data Feed</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
}
