import './App.css';
import Todo from './todo'

export const getBaseURL = () =>
  window?.env?.REACT_APP_API_URL ?? process.env.REACT_APP_API_URL

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
