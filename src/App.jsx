import React from 'react';
import './App.css';
import Component from './components/Component';

function App() {
  const data = Component();

  return (
    <div>
      {
       imageData.map((element) => (
        <div key={element.id} className="column">
          <img src={element.img} alt={`Lake ${element.id}`} />
        </div>
      ))}
    </div>
  );
}

export default App;

