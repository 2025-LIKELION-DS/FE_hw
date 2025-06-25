import { useState } from "react"; // 
import { TableCell, CommonButton, DeleteButton, OffRow   } from '../styles/GlobalStyles';

export default function Word({ word: w }) { 
  const [word, setWord] = useState(w); 
  const [isShow, setIsShow] = useState(false); 
  const [isDone, setIsDone] = useState(word.isDone);  

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
    if (window.confirm("삭제 하시겠습니까?")) { 
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE", // 
      }).then((res) => {
        if (res.ok) { 
          setWord({ 
            ...word,
            id: 0,
          }); 
        }
      });
    }
  }

  if (word.id === 0) { 
    return null;
  }

  return (
    <OffRow className={isDone ? "off" : ""}>
      <TableCell>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </TableCell>
      <TableCell>{word.eng}</TableCell>
      <TableCell>{isShow ? word.kor : ""}</TableCell>
      <TableCell>
        <CommonButton onClick={toggleShow}>
          {isShow ? "뜻 숨기기" : "뜻 보기"}
        </CommonButton>
        <DeleteButton onClick={del} className="btn_del">
          삭제
        </DeleteButton>
      </TableCell>
    </OffRow>
  );
}