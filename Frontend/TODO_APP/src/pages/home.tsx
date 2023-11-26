import { useEffect, useState } from "react";
import Form, { FormType } from "../components/form";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../services/toItemService";
import { TaskItem } from "../models/taskItem";
import TaskList from "../components/taskList";

export default function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [editTask, setEditTask] = useState<TaskItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleTaskSubmit = async (task: TaskItem) => {
    if (editTask) {
      await updateTask(
        task.id!,
        task.title!,
        task.description!,
        task.priority!,
        task.isCompleted!
      );
      await getTasks();
    } else {
      await createTask(
        task.title!,
        task.description!,
        task.priority!,
        task.isCompleted!
      );
      await getTasks();
    }
  };

  const handleEditTask = (task: TaskItem) => {
    setEditTask(task);
    setShowForm(true);
  };

  const handleDeleteTask = async (taskId: number) => {
    await deleteTask(taskId);
    await getTasks();
  };

  const getTasks = async () => {
    const { data, code } = await getAllTask();
    if (code !== 200) {
      alert("Error");
      return;
    }
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (


    
    <div className=" ">
      <h2 className=" flex justify-center items-center text-4xl mb-8 text-gray-600">Task App</h2>
      <div className=" justify-center flex">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl mb-8 "
          onClick={() => {
            setEditTask(null);
            setShowForm(true);
          }}
        >
          Create Task
        </button>
        <div>
          {editTask ? (
            <Form
              onSubmit={handleTaskSubmit}
              task={editTask}
              formType={FormType.UPDATE}
              isOpen={showForm}
              setIsOpen={setShowForm}
            />
          ) : (
            <Form
              onSubmit={handleTaskSubmit}
              isOpen={showForm}
              setIsOpen={setShowForm}
            />
          )}
        </div>
      </div>
      <div className=" justify-center flex items-center bg-gradient-to-r from-cyan-100 to-blue-200 py-8 ">
      <TaskList
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
      </div>

   
    </div>
    
  );
}
