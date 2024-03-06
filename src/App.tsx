import React from 'react';
import './App.css';

const TeamCards = ['Card 1', 'Card 2', 'Card 3'];

function HeadingIntro() {
  return <h1>Welcome to March Madness!</h1>;
}

function TeamList() {
  return (
    <div>
      <h2>#1: {TeamCards[0]}</h2>
      <h2>#2: {TeamCards[1]}</h2>
      <h2>#3: {TeamCards[2]}</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingIntro />
        <TeamList />
      </header>
    </div>
  );
}

export default App;
