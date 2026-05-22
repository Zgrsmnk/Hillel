import { Component } from "react";

function EmojiList({ emojis, counts, addCount }) {
  return (
    <div className="emoji">
      {emojis.map((emoji, index) => (
        <div key={index} onClick={() => addCount(index)}>
          <h1>{emoji}</h1>
          <p className="counts">{counts[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default EmojiList;
