import { useState } from "react";

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
        method: "DELETE",
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

  return (
  <div style={{ marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '0.5rem' }}>
    <input
      type="checkbox"
      checked={isDone}
      onChange={toggleDone}
      style={{ marginRight: '0.5rem' }}
    />
    <b>{word.eng}</b>
    <button onClick={toggleShow} style={{ marginLeft: '0.5rem' }}>
      {isShow ? '뜻 숨기기' : '뜻 보기'}
    </button>
    <button onClick={del} style={{ marginLeft: '0.5rem' }}>
      삭제
    </button>
    {isShow && <p style={{ marginTop: '0.5rem' }}>{word.kor}</p>}
  </div>
);

}