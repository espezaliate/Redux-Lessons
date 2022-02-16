import "./App.css";
import BankPage from "./BankPage";
import Counter from "./Counter";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Counter />
          <BankPage />
        </div>
      </header>
    </div>
  );
}

export default App;
