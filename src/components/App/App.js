import Game from "../Game";
import Header from "../Header";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="main-container">
        <div className="game-wrapper">
          <Game />
        </div>
      </div>
    </div>
  );
}

export default App;
