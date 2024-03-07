import React from 'react';
import './App.css';
import teamCards from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function HeadingIntro() {
  return (
    <div>
      <h1>Welcome to March Madness!</h1>
      <p>
        This website is simple. It is simply a list of all the college football
        teams, along with its school mascot and location (city, state
        abbreviation). Each school is spaced out for your reading convenience.
        Keep in mind that there is not specific order of how the schools are
        listed. If you have any questions, feel free to call at 601-601-6001.
        Happy scrolling!
      </p>
    </div>
  );
}

function Team(props: TeamProps) {
  const { school, name, city, state } = props;

  return (
    <div>
      <h2>School: {school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {city + ', ' + state}</h3>
      <br />
    </div>
  );
}

function TeamList() {
  return (
    <div>
      {teamCards.teams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
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
