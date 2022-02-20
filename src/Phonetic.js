import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic text-center">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer noopener"
          className="Phonetic-true "
          alt="audio-icon"
        >
          Listen
        </a>{" "}
        <span>🔊</span>
        {props.phonetic.text}
      </div>
    );
  } else {
    return (
      <div className="Phonetic text-center">
        <a href="#">Listen</a> <span className="Phonetic-false">🔇</span>{" "}
        {props.phonetic.text}
      </div>
    );
  }
}
