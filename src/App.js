import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>NBA</h1>
      </header>
      <div className="player-cards-container">
        <BasketballPlayerCard
          name="LeBron James"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
          position="Forward"
          stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
        />
        <BasketballPlayerCard
          name="Stephen Curry"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
          position="Guard"
          stats={{ pointsPerGame: 30.1, assistsPerGame: 6.3, reboundsPerGame: 5.4 }}
        />
        <BasketballPlayerCard
          name="Kevin Durant"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png"
          position="Forward"
          stats={{ pointsPerGame: 27.2, assistsPerGame: 5.5, reboundsPerGame: 7.1 }}
        />
        <BasketballPlayerCard
          name="Giannis Antetokounmpo"
          image="https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png"
          position="Forward"
          stats={{ pointsPerGame: 29.5, assistsPerGame: 5.9, reboundsPerGame: 13.6 }}
        />
      </div>
      <footer className="App-footer">
        <p>© 2024 NBA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
