import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <h1 className="text-6xl font-bold animate-breathing mb-10">
        Retro Snake
      </h1>
      <GameBoard />
    </div>
  );
}

export default App;
