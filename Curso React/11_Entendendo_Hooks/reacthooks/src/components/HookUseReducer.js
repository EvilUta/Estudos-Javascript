import { useReducer, useState } from "react";

const numberReducer = (state, action) => {
  switch (action.type) {
    case "RANDOM":
      return Math.random();
    default:
      return state;
  }
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const HookUseReducer = () => {
  // 1 - useReducer básico
  const [number, dispatch] = useReducer(numberReducer, 0);

  // 2 - useReducer para lista de tasks
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer Outra coisa" },
    { id: 3, text: "Sei la" },
  ];

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = taskText.trim();
    if (!text) return;

    const newTask = {
      id: crypto.randomUUID(), // melhor que Math.random() p/ id
      text,
    };

    dispatchTasks({ type: "ADD", payload: newTask });
    setTaskText("");
  };

  return (
    <div>
      <h1>Hook Use Reducer</h1>

      <p>Numero: {number}</p>
      <button onClick={() => dispatch({ type: "RANDOM" })}>
        Alterar numero!
      </button>

      <hr />

      <h3>Tarefas:</h3>

      <form onSubmit={handleSubmit}>
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{" "}
            <button onClick={() => dispatchTasks({ type: "REMOVE", payload: task.id })}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseReducer;
