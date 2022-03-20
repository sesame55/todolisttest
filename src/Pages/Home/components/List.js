import Item from "./Item";

const List = ({ ListData, deleteData, submittingStates }) => {
  console.log("ListData", ListData);
  return (
    <div className="list">
      {ListData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStates={submittingStates}
          ></Item>
        );
      })}
    </div>
  );
};
export default List;
/* 使用解構的方式，效果同 item.note 等，
可進一步設定 const {note='' , data=2021} = item 等預設資料
使傳入空資料時避免出現 undefine 等容易出現 bug 的情況*/
/* <Item note={note}></Item>
第一個note 是 Item.js 內的 note 
，來自const Item = ({ note, date, time }) => {}，慣例是前後寫一樣比較好記，
初學者如果無法區分可以先把命名分開，
但注意只能連同 Item.js 一起改第一個 note 
，因為第一個是自己命名，第二個是 item 本來的內容
*/
