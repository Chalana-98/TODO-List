import React, { useState, useEffect } from "react";

interface TaskFormProps {
  onSubmit: (
    title: string,
    description: string,
    dueDate: string,
    priority: string
  ) => void;
  initialTitle?: string;
  initialDescription?: string;
  initialDueDate?: string;
  initialPriority?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
  initialDueDate = "",
  initialPriority = "High",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [priority, setPriority] = useState(initialPriority);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setDueDate(initialDueDate);
    setPriority(initialPriority);
  }, [initialTitle, initialDescription, initialDueDate, initialPriority]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, dueDate, priority);
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("High");
  };

  return (
    <form
      className="max-w-md mx-auto bg-gradient-to-r from-gray-100 to-blue-50 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="dueDate" className="mb-1">
          Due Date:
        </label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="priority" className="mb-1">
          Priority:
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl"
        >
          <option value="high">High</option>
          
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <button
        type="submit"
        className=" bg-sky-900 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
