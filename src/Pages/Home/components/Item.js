const Item = ({ id, note, date, time, deleteData, submittingStates }) => {
  const deleteItem = () => {
    submittingStates.current = true;
    deleteData((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>

      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};
export default Item;
