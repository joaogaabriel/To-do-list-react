import { useState /*, useEffect */ } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);
  // useEffect(
  //   () => {
  //     async function fetchTask() {
  //       // CHAMAR A API
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //         { method: "GET" }
  //       );
  //       // PEGAR OS DADOS QUE ELA RETORNA
  //       const data = await response.json();
  //       // PERSISTIR NA APLICAÇÃO
  //       setTasks(data);
  //     }

  //     fetchTask();
  //   },
  //   //Quando se usa uma lisat vazia no segundo parametro de um useEffect significa que a função do primerio parametro so sera EXECUTADA UMA VEZ
  //   []
  // );

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // update task status
      if (task.id == taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // don´t update task status
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id != taskId);

    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    // atualizando a lista de state, ...tasks para adicionar tudo que ja tinha e newTask a nova task. usar um push(newTask) não é correto
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6 ">
      <div className="w-[500px] space-y-5">
        <Title>Task Manager</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
