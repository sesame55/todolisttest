import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStates }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // console.log(note, date, time);

  // 與輸入框{text}形成雙向綁定
  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  // 加入內容
  function addItem() {
    let newData = { id: v4(), note, date, time };
    submittingStates.current = true;
    add(function (prevData) {
      return [...prevData, newData];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="addBtn">
        新增
      </button>
    </div>
  );
};
export default Edit;
