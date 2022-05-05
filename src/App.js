import "./App.css";
import { Button } from "./components/button/Button";
import { Card } from "./components/card/Card";
import { Flex } from "./components/flex/Flex";

function App() {
  return (
    <div className='App'>
      {/* <Button buttonType='success'>Submit</Button>
      <Button buttonType='warning'>Edit</Button>
      <Button buttonType='alert'>Cancel</Button> */}

      <Card>Hello World</Card>
    </div>
  );
}

export default App;
