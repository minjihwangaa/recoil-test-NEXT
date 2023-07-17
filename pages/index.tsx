"use client";

import Todos from "@/src/app/components/Todos";
import { common } from "@/src/common/api";

import {
  countNum,
  fetchApi,
  fetchUserDetails,
  fetchUserDetailsSF,
  postUserDetailsSF,
  totalTodos,
} from "@/state/selectors/TotalTodos";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

const UserInfoGetParameter = (selectNum: any) => {
  const userLoadable = useRecoilValueLoadable(
    fetchUserDetailsSF(selectNum.num)
  ); // parameter + 비동기
  console.log(userLoadable, "userinfoget");
  if (selectNum.num) {
    switch (userLoadable.state) {
      case "hasValue":
        return <div>{userLoadable.contents.title}</div>;
      case "loading":
        return <div>Loading..</div>;
      case "hasError":
        return <div style={{ color: "red" }}>Error..</div>;
    }
  } else {
    return "숫자를 선택하세요";
  }
};

const PostInfoParameter = () => {
  const param = {
    id: 101,
    title: "BMW Pencil",
  };
  const userLoadable = useRecoilValueLoadable(postUserDetailsSF(param)); // parameter + 비동기
  console.log(userLoadable);
  switch (userLoadable.state) {
    case "hasValue":
      return <div>{userLoadable.contents.title}</div>;
    case "loading":
      return <div>Loading..</div>;
    case "hasError":
      return <div style={{ color: "red" }}>Error..</div>;
  }
};

export default function Index() {
  const totalTodoState = useRecoilValue(totalTodos); // 상태값 읽기 전용
  const [count, setCount] = useRecoilState(countNum); // 상태값 읽기 및 수정
  const Numarray = [1, 2, 3, 4];
  const [selectNum, setSelectNum] = useState(null || 0);
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    const data = fetchApi();
    data.then((res) => {
      console.log(res);
      setUserDetail(res.data.products);
    });
  }, []);
  return (
    <>
      <h1>add todo with nextjs + typescript</h1>
      <Todos />
      <h3>Total Todos: {totalTodoState}</h3>
      <div className="text-red-500" onClick={() => setCount(count + 2)}>
        {count}
      </div>
      <ul className="flex flex-col">
        {userDetail?.map((el: any) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      <div>
        {Numarray?.map((el, idx) => (
          <span
            key={idx}
            style={{
              color: "blue",
              fontSize: "32px",
            }}
            onClick={() => setSelectNum(el)}
          >
            {el}
          </span>
        ))}
      </div>
      <UserInfoGetParameter num={selectNum} />
      <PostInfoParameter />
    </>
  );
}
