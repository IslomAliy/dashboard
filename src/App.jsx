import Folders from "./components/Folders";
import Menu from "./components/Menu";
import Table from "./components/Table";
import TodoProjectsWrapper from "./components/TodoProjectsWrapper";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Folders/>
      <TodoProjectsWrapper/>
      <Table/>
    </div>
  );
}

export default App;
