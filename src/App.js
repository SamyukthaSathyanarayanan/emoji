import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "💃": "Woman Dancing",
    "👨‍👩‍👧‍👦": "Family: Man, Woman, Girl, Boy",
    "🤞": "Crossed Fingers",
    "🕵️": "Detective",
    "👻": "Ghost",
    "💪": "Flexed Biceps",
    "🥵": "Hot Face",
    "🥳": "Partying Face",
    "😲": "Astonished Face",
    "😫": "Tired Face",
    "😡": "Angry",
    "🥱": "Yawning Face",
    "😭": "Crying",
    "✊": "Raised Fist",
    "💅": "Nail Polish",
    "🪔": "Diya Lamp",
    "🤿": "Diving Mask",
    "🪀": "Yo-Yo",
    "🪄": "Magic Wand",
    "🥠": "Fortune Cookie"
  };

  const [meaning, setEmojiMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiinputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) meaning = "Emoji is not present in our database";

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App" style={{ margin: "4rem" }}>
      <h1>Emoji Interpreter</h1>
      <p style={{ fontSize: "1rem" }}>
        Enter or Click on the Emoji whose meaning you want to learn.
      </p>
      <input
        style={{
          padding: ".6rem"
        }}
        onChange={emojiinputHandler}
      ></input>
      <h2>Emojis we know:</h2>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      <h2>Output: </h2>
      <div
        style={{
          backgroundColor: "lightgray",
          fontSize: "1.3rem",
          padding: "1rem"
        }}
      >
        {meaning}
      </div>
    </div>
  );
}
