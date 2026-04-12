function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center border-b border-gray-700">

      <h1 className="text-xl font-bold text-blue-500">
        DevCollab
      </h1>

      <div className="space-x-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-blue-400"
        >
          Home
        </button>

        <button
          onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-blue-400"
        >
          About
        </button>
      </div>

    </nav>
  );
}

export default Navbar;