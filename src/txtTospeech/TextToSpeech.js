import React, { useState, useRef } from 'react';
import "../styles/TxttoSpeech.css"


const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef(new SpeechSynthesisUtterance());

  const voices = synth.getVoices();
  const femaleVoice = voices.find((voice) => voice.name.includes('Female'));
  if (femaleVoice) {
    utteranceRef.current.voice = femaleVoice;
  }

  const handleStart = () => {
    synth.cancel();
    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.rate = speed;
    synth.speak(utteranceRef.current);
  };

  const handlePause = () => {
    if (synth.paused) {
      synth.resume(); // If paused, resume
    } else {
      synth.pause(); // If not paused, pause
    }
  };

  const handleStop = () => {
    synth.cancel();
  };

  const handleSpeedChange = (e) => {
    const newSpeed = parseFloat(e.target.value);
    setSpeed(newSpeed);

    if (utteranceRef.current) {
      utteranceRef.current.rate = newSpeed;
      synth.cancel(); // Cancel and restart with the new speed
      synth.speak(utteranceRef.current);
    }
  };

  return (
    <div  className='txt-to-speech'>
      <h1>
         Text To Speech Converter
    </h1>
    <div className="text-to-speech-container">
      <textarea
       style={{ resize: "none" }}
      //  rows={5}
      //  columns={1}
        className="txt-to-speechtext-input"
        placeholder="Enter text here...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="speed-control">
        <label htmlFor="speed">Speed:</label>
        <input
        
        type="range"
          id="speed"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={handleSpeedChange}
        />
        <span>{speed.toFixed(1)}</span>
      </div>
      <div className="txt-to-speechbutton-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
    </div>
  );
};

export default TextToSpeech;
