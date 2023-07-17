import { atom } from "recoil";

export interface todoStateProps {
  id: number;
  text: string;
}

export const todoState = atom<todoStateProps[]>({
  key: "todoState",
  default: [],
});

export const countState = atom({
  key: "countState",
  default: 0,
});
