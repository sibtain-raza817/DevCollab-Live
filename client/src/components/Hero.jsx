import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateRoom } from "../utils/generateRoom.js";

function Hero() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleCreateRoom = () => {
    const id = generateRoom();
    navigate(`/editor/${id}`);
  };

  const handleJoinRoom = () => {
    if (!roomId) {
      alert("Enter Room ID");
      return;
    }
    navigate(`/editor/${roomId}`);
  };

  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Collaborate on Code <br />
            <span className="text-blue-500">In Real-Time</span>
          </h1>

          <p className="text-gray-400 mb-8">
            Code together, learn faster, and build projects with your friends.
          </p>

          <div className="bg-gray-800 p-5 rounded-xl shadow-lg space-y-4 max-w-md">

            <button
              onClick={handleCreateRoom}
              className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
            >
              🚀 Create Room
            </button>

            <p className="text-center text-gray-400 text-sm">OR</p>

            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleJoinRoom}
              className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
            >
              Join Room
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          {/* 👉 ADD YOUR IMAGE HERE */}
          <img
            src="/images/hero-coll.jpg"
            alt="Hero"
            className="w-full max-w-md rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;