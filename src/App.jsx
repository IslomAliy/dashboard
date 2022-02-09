import Folders from "./components/Folders";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Folders/>
      <Todo/>
      <Projects/>
    </div>
  );
}

export default App;
