import { todoState } from "@/state/atoms/statesAtom";
import React from "react";
import { useSetRecoilState } from "recoil";

interface TodoProps {
  text: string;
  id: number;
}
export default function Todo(props: TodoProps) {
  const { text, id } = props;
  const setTodos = useSetRecoilState(todoState);
  const deleteTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>x</button>
    </div>
  );
}
