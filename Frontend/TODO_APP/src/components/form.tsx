import React, { useEffect, useState } from "react";
import { TaskItem } from "../models/taskItem";

export enum FormType {
  CREATE,
  UPDATE,
}

interface TaskFormProps {
  onSubmit: (task: TaskItem) => void;
  task?: TaskItem;
  formType?: FormType;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const taskDefaultValues = {
  id: null,
  title: "",
  description: "",
  priority: 0,
  isCompleted: false,
};

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  task = taskDefaultValues,
  formType = FormType.CREATE,
  isOpen = false,
  setIsOpen,
}) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setIsCompleted(task.isCompleted);
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskItem = {
      title,
      description,
      priority,
      id: task.id,
      isCompleted,
    };
    onSubmit(newTask);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority(0);
    setIsCompleted(false);
  };

  return (
    <div className="mb-4">
      <div
        className={isOpen ? "relative z-10" : "hidden relative z-10"}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <h3
                    className="font-semibold leading-6 text-gray-900 text-xl"
                    id="modal-title"
                  >
                    {formType == FormType.CREATE ? "Create" : "Update"}
                  </h3>

                  <form className="mx-auto mt-2">
                    <div className="flex flex-col">
                      <label htmlFor="title" className="mb-1">
                        Title:
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title!}
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
                        value={description!}
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
                        value={priority!}
                        onChange={(e) => setPriority(Number(e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded-xl"
                      >
                        <option value={2}>High</option>

                        <option value={1}>Medium</option>
                        <option value={0}>Low</option>
                      </select>
                    </div>

                    <div className="flex flex-row">
                      <label htmlFor="isCompleted">Completed</label>
                      <input
                        type="checkbox"
                        id="isCompleted"
                        checked={isCompleted!}
                        onChange={() => {
                          setIsCompleted(!isCompleted);
                        }}
                        className="border border-gray-300 ms-2"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
