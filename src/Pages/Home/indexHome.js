import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./indexHome.scss";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  console.log(data);
  setData(data);
}
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ data }),
    // 加{}是因為數據宣告方式有{}
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStates = useRef(false);
  //維持在最新狀態的值，但不影響渲染，只要不是按F5就永遠是false
  //用來判斷是否該做

  useEffect(() => {
    // 不是在送資料狀態就返回，預防重新執行後清空內容
    // 如果是true就不會執行
    if (!submittingStates.current) {
      return;
    }

    fetchSetData(data).then((data) => (submittingStates.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} submittingStates={submittingStates} />
      <List
        ListData={data}
        deleteData={setData}
        submittingStates={submittingStates}
      />
    </div>
  );
};
export default Home;
