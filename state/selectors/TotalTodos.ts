import { selector, selectorFamily } from "recoil";
import { countState, todoState } from "../atoms/statesAtom";
import axios from "axios";
import { common } from "@/src/common/api";

export const fetchApi = async () => {
  try {
    const response = await axios.get(common.jsonDummy + "products");
    console.log(response, "fetchapi");
    const { data } = response;
    console.log(response);

    return response; //return response는 500에러 발생, js 코드에서는 괜찮았는데 뇌피셜 비동기처리 타입 정의?캐스팅? 부분이 문제인것같기도함
  } catch (error) {
    throw error;
  }
};

export const totalTodos = selector({
  // get the state
  key: "totalTodos",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos.length;
  },
});

export const countNum = selector({
  key: "countNum",
  get: ({ get }) => {
    const getNum = get(countState);
    return getNum;
  },
  set: ({ set }, newValue) => {
    newValue = Number(newValue);
    set(countState, newValue / 2);
  },
});

export const fetchUserDetails = selector({
  key: "fetchUserDetails",
  get: () => {
    //get the asyncronous data
    fetchApi();
    // try {
    //   const response = await axios.get(common.jsonDummy + "products");
    //   const { data } = response;
    //   return data; //return response는 500에러 발생, js 코드에서는 괜찮았는데 뇌피셜 비동기처리 타입 정의?캐스팅? 부분이 문제인것같기도함
    // } catch (error) {
    //   throw error;
    // }
  },
});

export const fetchUserDetailsSF = selectorFamily({
  key: "userDetailsSelector",
  get: (userId: number) => async () => {
    // get the asyncronous data with parameter
    if (!userId) {
      return;
    }
    const response = await axios.get(common.jsonDummy + "products/" + userId);
    return response.data;
  },
});

export const postUserDetailsSF = selectorFamily({
  key: "userDetailsSelector",
  get: (param) => async () => {
    // post the asyncronous data with parameter
    if (!param) {
      return;
    }
    const response = await axios.post(common.jsonDummy + "products/add", param);
    return response.data;
  },
});
