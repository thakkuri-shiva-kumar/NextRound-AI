function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
      <h1 className="text-3xl font-bold text-blue-400">
        NextRound AI
      </h1>

      <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Start Interview
      </button>
    </nav>
  );
}

export default Navbar;
