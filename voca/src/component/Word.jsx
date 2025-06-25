import { useState } from "react";
import styled from "styled-components";

const TD = styled.td`
  width: 25%;
  height: 70px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 26px;
`;

const BUTTON = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: dodgerblue;
`;

const DEL_BUTTON = styled.button`
  margin-left: 10px;
  color: white;
  background-color: firebrick;
`;
const OFF = styled.tr`
  ${(props) =>
    props.isDone &&
    `
      background: #eee;
      color: #ccc;
    `}
`;

export default function Word({ word: w }) {
  const [word, setWord] = useState(w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  if (word.id === 0) {
    return null;
  }

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ ...word, id: 0 });
        }
      });
    }
  }

  return (
    <OFF isDone={isDone}>
      <TD>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </TD>
      <TD>{word.eng}</TD>
      <TD>{isShow && word.kor}</TD>
      <TD>
        <BUTTON onClick={toggleShow}>
          뜻 {isShow ? "숨기기" : "보기"}
        </BUTTON>
        <DEL_BUTTON onClick={del}>삭제</DEL_BUTTON>
      </TD>
    </OFF>
  );

}
