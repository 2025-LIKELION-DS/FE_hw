import React, { useRef, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { InputArea, InputLabel, StyledInput, StyledSelect, CommonButton } from '../styles/GlobalStyles';

export default function CreateWord() { 
  const days = useFetch("http://localhost:3001/days"); 
  const navigate = useNavigate(); 
  const [isLoading, setIsLoading] = useState(false); 

  function onSubmit(e) { 
    e.preventDefault(); 

    if (!isLoading && dayRef.current && engRef.current && korRef.current) { // [cite: 199]
      setIsLoading(true); 

      const day = dayRef.current.value;
      const eng = engRef.current.value; 
      const kor = korRef.current.value; 

      fetch(`http://localhost:3001/words/`, {
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
          alert("생성이 완료 되었습니다"); 
          navigate(`/day/${day}`); 
          setIsLoading(false); 
        }
      });
    }
  }

  const engRef = useRef(null); 
  const korRef = useRef(null); 
  const dayRef = useRef(null); 

  return ( 
    <form onSubmit={onSubmit}>
      <InputArea>
        <InputLabel>Eng</InputLabel>
        <StyledInput type="text" placeholder="computer" ref={engRef} />
      </InputArea>
      <InputArea>
        <InputLabel>Kor</InputLabel>
        <StyledInput type="text" placeholder="컴퓨터" ref={korRef} />
      </InputArea>
      <InputArea>
        <InputLabel>Day</InputLabel>
        <StyledSelect ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </StyledSelect>
      </InputArea>
      <CommonButton
        style={{ opacity: isLoading ? 0.3 : 1 }}> 
        {isLoading ? "Saving..." : "저장"}
      </CommonButton>
    </form>
  );
}