import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Type a new task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Type a description for the task"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Check if the title and description fields are empty.
          if (!title.trim() || !description.trim()) {
            return alert("please Add title or description");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-600 text-white px-4 py-2 rounded-md font-medium"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
