import { useEffect, useState } from "react";
import "./index.css";
import EmojiList from "./components/EmojiList";

function App() {
  const [counts, setCounts] = useState(
    JSON.parse(localStorage.getItem("counts")) || [0, 0, 0],
  );

  const [emojis] = useState(["😂", "😁", "🥰"]);

  const [result, setResult] = useState("");

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(counts));
  }, [counts]);

  const showResult = () => {
    const max = Math.max(...counts);
    const winnerIndex = counts.indexOf(max);

    setResult(emojis[winnerIndex]);
  };

  const addCount = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;

    setCounts(newCounts);
  };

  const clear = () => {
    localStorage.removeItem("counts");

    setCounts([0, 0, 0]);
    setResult("");
  };

  return (
    <div className="container">
      <h1>Голосування за найкращий смайлик</h1>
      <EmojiList emojis={emojis} counts={counts} addCount={addCount} />
      <button className="firstBtn" onClick={showResult}>
        Показати результати
      </button>
      <button onClick={clear}>Очистити результати</button>
      <p className="winner">Переможець:</p>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
