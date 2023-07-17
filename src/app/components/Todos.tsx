import { todoState, todoStateProps } from "@/state/atoms/statesAtom";
import React, { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useRecoilState<todoStateProps[]>(todoState);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="flex">
      <input type="text" className="border" onChange={handleInputChange} />
      <div className="space-x-2">
        <button onClick={addTodo}>add todo</button>
        <button onClick={clearTodos}>clear todos</button>
      </div>

      {todos?.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </div>
  );
}
