import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";

function App() {
  return (
    <div className='App'>
      <Button color='purple' buttonType='success'>
        hello world
      </Button>
      <Card></Card>
    </div>
  );
}

export default App;
