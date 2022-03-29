import { useState } from "react";

function App() {
  // Logic
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const inputHandler = (e) => setTask(e.target.value)
  const addTaskHandler = () => {
    setTasks([ ...tasks, task ])
    setTask('')
  }


  return (
    <div className="bg-slate-800 w-screen h-screen flex justify-center items-center flex-col">
      <div className="flex flex-row justify-center w-1/4">
        <input 
          className="border-0 bg-white rounded-lg m-1"
          type="text"
          placeholder="Ingresar tarea"
          value={task}
          onInput={inputHandler}
        />

        <button
          onClick={addTaskHandler}
          className="bg-purple-500 p-2 rounded-sm" 
        >
          Add
        </button>
      </div>

      <div className="mt-4 text-white">
        <h3>Tasklist</h3>
        <ul>
          {
            tasks.map(task => <li>{task}</li>)
          }
        </ul>
      </div>
      
    </div>
  );
}


export default App;
