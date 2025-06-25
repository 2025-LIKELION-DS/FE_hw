import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (
      !isLoading &&
      dayRef.current &&
      engRef.current &&
      korRef.current
    ) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch("http://localhost:3001/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
                   isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다!");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }
const INPUT_AREA = styled.div`
 margin-bottom: 10px;
`;
const LABEL =styled.label`
 display: block;
  margin-bottom: 10px;
  `;
const INPUT_IN_INPUT = styled.input`
 width: 400px;
  height: 40px;
  font-size: 20px;
  padding: 0 10px;
  `;
  const SELECT = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
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
  return (
    <form onSubmit={onSubmit}>
      <INPUT_AREA>
        <LABEL>Eng</LABEL>
        <INPUT_IN_INPUT
          type="text"
          placeholder="computer"
          ref={engRef}
        />
      </INPUT_AREA>
      <INPUT_AREA >
        <LABEL>Kor</LABEL>
        <INPUT_IN_INPUT
          type="text"
          placeholder="컴퓨터"
          ref={korRef}
        />
      </INPUT_AREA>
      <INPUT_AREA >
        <LABEL>Day</LABEL>
        <SELECT ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </SELECT>
      </INPUT_AREA>
      <BUTTON
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </BUTTON>
    </form>
  );
}
