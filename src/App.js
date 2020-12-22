import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "😊": "smiling",
  "😔": "sad",
  "😴": "sleepy",
  "🤤": "hungry",
  "😅": "awkward",
  "🤫": "shushing face",
  "😏": "smirking face",
  "😌": "relieved face",
  "😷": "face with mask",
  "😕": "confused",
  "😵": "dizzy face",
  "😰": "anxious face",
  "🥵": "hot face",
  "🥶": "cold face",
  "😨": "fearful face",
  "🤯": "exploding head",
  "😦": "frowning face",
  "😲": "astonished face",
  "🤡": "clown face",
  "🥳": "partying face",
  "🤪": "goofy, excited face",
  "🥴": "woozy,drunk face",
  "🤧": "sneezing face",
  "😭": "loud crying face",
  "😫": "fed up face",
  "🥱": "yawning face",
  "🤭": "blushing face",
  "🤔": "thinking face"
};

export default function App() {
  var [userinput, setuserinput] = useState("");
  var [meaning, setmeaning] = useState("");

  function emojiclickhandler(emoji) {
    var userinput = event.target.value;

    var meaning = emojipedia[emoji];

    setmeaning(meaning);

    console.log(meaning);
    if (meaning === undefined) {
      meaning = "sorry! we do not have that in our database";
    }
    setmeaning(meaning);
  }

  var emojisweknow = Object.keys(emojipedia);

  function inputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojipedia[userinput];
    console.log(meaning);
    // console.log(input); //for console
    setuserinput(userinput);
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <h2>Enter emoji or click on the emoji for its meaning</h2>

      <input onChange={inputhandler} />
      <h3>{userinput}</h3>

      <div style={{ fontSize: "1.8rem", fontWeight: "bolder" }}>
        <i>meaning </i>: <span className="meaning">{meaning}</span>
      </div>

      <h3>
        <div style={{ paddingBottom: "1rem", fontSize: "x-large" }}>
          Emojis we know :
        </div>

        {emojisweknow.map((emoji) => (
          <span
            className="emoji"
            key={emoji}
            style={{ cursor: "pointer", display: "center" }}
            onClick={() => emojiclickhandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </h3>
      <footer>
        Created by <a href="shindearyan.netlify.app">Aryan shinde</a>
      </footer>
    </div>
  );
}
