import React, { useState } from "react";
import Form from "./Form";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);

  const handleTaskSubmit = (
    title: string,
    description: string,
    dueDate: string,
    priority: string
  ) => {
    if (editTask) {
      // Edit existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editTask.id
          ? { ...task, title, description, dueDate, priority }
          : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
    } else {
      // Create new task
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditTask(task);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className=" mx-auto px-4 py-20 bg-gradient-to-r from-cyan-100 to-blue-200  ">
      <h1 className="text-3xl font-bold mb-6 flex items-center justify-center text-gray-600 ">TODO APP</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          {editTask ? (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 flex text-gray-600 ">Edit Task</h2>
              <Form
                onSubmit={handleTaskSubmit}
                initialTitle={editTask.title}
                initialDescription={editTask.description}
                initialDueDate={editTask.dueDate}
                initialPriority={editTask.priority}
              />
            </div>
          ) : (
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2 flex justify-center item bg-center text-gray-600">Create Task</h2>
              <Form onSubmit={handleTaskSubmit} />
            </div>
          )}
        </div>

        <div className=" ">
          <h2 className="text-xl font-semibold mb-2 flex items-center justify-center text-gray-600">Todo</h2>
          <div className="grid gap-4 px-20 ">
            {tasks.map((task) => (
              <div key={task.id} className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                <p className="mb-2">{task.description}</p>
                <p className="mb-2">Due Date: {task.dueDate}</p>
                <p className="mb-2">Priority: {task.priority}</p>
                <button
                  onClick={() => handleEditTask(task)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
