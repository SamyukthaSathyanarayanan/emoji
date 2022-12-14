import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "๐": "Woman Dancing",
    "๐จโ๐ฉโ๐งโ๐ฆ": "Family: Man, Woman, Girl, Boy",
    "๐ค": "Crossed Fingers",
    "๐ต๏ธ": "Detective",
    "๐ป": "Ghost",
    "๐ช": "Flexed Biceps",
    "๐ฅต": "Hot Face",
    "๐ฅณ": "Partying Face",
    "๐ฒ": "Astonished Face",
    "๐ซ": "Tired Face",
    "๐ก": "Angry",
    "๐ฅฑ": "Yawning Face",
    "๐ญ": "Crying",
    "โ": "Raised Fist",
    "๐": "Nail Polish",
    "๐ช": "Diya Lamp",
    "๐คฟ": "Diving Mask",
    "๐ช": "Yo-Yo",
    "๐ช": "Magic Wand",
    "๐ฅ ": "Fortune Cookie"
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
    <div className="App">
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
            style={{
              fontSize: "3rem",
              cursor: "pointer",
              padding: "1rem"
            }}
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
