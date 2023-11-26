import React from "react";
import { PRIORITY, TaskItem } from "../models/taskItem";

type TaskListProps = {
  tasks: TaskItem[];
  handleEditTask: (task: TaskItem) => void;
  handleDeleteTask: (taskId: number) => Promise<void>;
};

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleEditTask,
  handleDeleteTask,
}) => {
  const getPriorityKey = (priority: PRIORITY) => {
    const index = Object.values(PRIORITY).indexOf(
      priority! as unknown as PRIORITY
    );
    return Object.keys(PRIORITY)[Number(index)];
  };

  return (
    <div className=" w-[600px]" style={{ maxWidth: "600px" }}>
      <div className="grid gap-4 px-20 ">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="mb-2">{task.description}</p>
            <p className="mb-2">Priority: {getPriorityKey(task.priority!)}</p>
            <p className="mb-2">
              {task.isCompleted ? "Completed" : "Not Completed"}
            </p>
            <button
              onClick={() => handleEditTask(task)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl me-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id!)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl "
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
