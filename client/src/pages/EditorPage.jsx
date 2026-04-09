import { useParams } from "react-router-dom";

function EditorPage() {
  const { roomId } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Editor Page</h1>
      <p className="mt-4 text-gray-400">Room ID:</p>
      <p className="text-lg text-green-400">{roomId}</p>
    </div>
  );
}

export default EditorPage;