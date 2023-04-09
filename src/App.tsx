import React, { useState } from 'react';
import 'animate.css';
import './App.css';
import AnimatedText from './components/AnimatedText';

function App() {
  const [text, setText] = useState('안녕하세요');

  const changeText = () => {
    setText('반갑습니다');
  }

  return (
    <div className="App">
      <AnimatedText text={text} />
      <button onClick={changeText}>
        텍스트 변경
      </button>
    </div >
  );
}

export default App;
