import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleCreateRoom = () => {
    const newRoomId = uuidv4();
    navigate(`/editor/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    if (!roomId) {
      alert("Please enter Room ID");
      return;
    }
    navigate(`/editor/${roomId}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[350px] space-y-5">
        
        <h1 className="text-2xl font-bold text-center">
          DevCollab Live 🚀
        </h1>

        <button
          onClick={handleCreateRoom}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 py-2 rounded-lg font-semibold"
        >
          Create New Room
        </button>

        <div className="text-center text-gray-400">OR</div>

        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleJoinRoom}
          className="w-full bg-green-600 hover:bg-green-700 transition duration-200 py-2 rounded-lg font-semibold"
        >
          Join Room
        </button>

      </div>
    </div>
  );
}

export default Home;
