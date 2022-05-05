import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/button/Button";

function App() {
  return (
    <div className='App'>
      <Button color='purple' buttonType='success'>
        hello world
      </Button>
    </div>
  );
}

export default App;
