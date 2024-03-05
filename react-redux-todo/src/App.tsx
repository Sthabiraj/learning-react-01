import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  const deleteTodoHandler = (id: number) => {
    dispatch(removeTodo(id));
  };

  const todos = useSelector((state: any) => state.todos);

  return (
    <div className="flex h-full w-full justify-center mt-5">
      <div className="flex flex-col gap-8 w-1/2">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
            value={input}
            onChange={inputHandler}
          />
          <button
            className="btn btn-active btn-secondary"
            onClick={addTodoHandler}
          >
            Add Todo
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {todos.map((todo: any) => (
            <div className="bg-neutral-content rounded-lg flex justify-between items-center px-2 py-2">
              <input
                type="text"
                value={todo.text}
                className="bg-transparent text-black"
              />
              <button
                className="btn btn-error"
                onClick={() => deleteTodoHandler(todo.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
