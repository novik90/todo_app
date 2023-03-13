import Container from "./components/Container";

import "./App.css";
import Icon from "./components/Icons/Icon";

function App() {
  return (
    <div className="App">
      <Container size="large" direction="row">
        <Container size="medium">
          <Container size="small">
            <Icon name="Trash" size="24" />
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default App;
