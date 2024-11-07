"use client";

import { useState } from "react";
import List from "./List";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Funktion til at håndtere tilføjelse af nye opgaver
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Funktion til at markere opgaver som færdige
  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ToDoApp</h1>
      <form onSubmit={addTask} className="mb-4">
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task" className="border rounded p-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add
        </button>
      </form>
      <List tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default ToDoApp;
