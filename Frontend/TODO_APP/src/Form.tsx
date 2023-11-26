import React, { useState, useEffect } from "react";

interface TaskFormProps {
  onSubmit: (
    title: string,
    description: string,
    priority: number,
    id?: number
  ) => void;
  initialId?: number;
  initialTitle?: string;
  initialDescription?: string;
  initialDueDate?: string;
  initialPriority?: number;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialId = 0,
  initialTitle = "",
  initialDescription = "",
  initialDueDate = "",
  initialPriority = 0,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [priority, setPriority] = useState(initialPriority);

  useEffect(() => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setPriority(initialPriority);
  }, [initialTitle, initialDescription, initialDueDate, initialPriority]);

  const handleSubmit = (e: React.FormEvent) => {
    console.log("initial id in form ==> ", initialId);
    e.preventDefault();
    onSubmit(title, description, priority, initialId);
    setTitle("");
    setDescription("");
    setPriority(0);
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
        <label htmlFor="priority" className="mb-1">
          Priority:
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-xl"
        >
          <option value={2}>High</option>

          <option value={1}>Medium</option>
          <option value={0}>Low</option>
        </select>
      </div>

      <button
        type="submit"
        className=" bg-sky-900 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
