import React, { useState } from 'react';

const generateQuestion = () => {
  const positions = ['UTG', 'MP', 'CO', 'BTN', 'SB', 'BB'];
  const actions = ['加注', '弃牌', '跟注', '全下'];
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return {
    position: random(positions),
    action: random(actions),
    explanation: '根据 GTO 理论，这是最优解之一。'
  };
};

export default function App() {
  const [question, setQuestion] = useState(generateQuestion());

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>德州扑克 GTO 训练器</h1>
      <p><strong>位置：</strong>{question.position}</p>
      <p><strong>推荐行动：</strong>{question.action}</p>
      <p><strong>解释：</strong>{question.explanation}</p>
      <button onClick={() => setQuestion(generateQuestion())}>下一题</button>
    </div>
  );
}
