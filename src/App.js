import './App.css';
import TaskCreateContainer from './components/Form/TaskCreateContainer';
import ToDoListContainer from './components/ToDoList/ToDoListContainer';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>ToDo App Title</h1>
      </header>
      <main>
        <div className="ContentWrapper">
          <TaskCreateContainer />
          <ToDoListContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
