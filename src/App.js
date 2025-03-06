import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Score from "./components/Score";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem("highScore") || 0
  );

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  }, [score, highScore]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <h1 className="text-6xl font-bold animate-breathing mb-10">
        Retro Snake
      </h1>
      <Score score={score} highScore={highScore} />
      <GameBoard setScore={setScore} score={score} />
    </div>
  );
}

export default App;
