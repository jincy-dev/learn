import { useDispatch, useSelector } from "react-redux";
import { selectList, selectText } from "../redux/slice/selectors";
import { addList, addText } from "../redux/slice/list";

type Props = {};

const List = (props: Props) => {
  const list = useSelector(selectList);
  const text = useSelector(selectText);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>List</h4>
      <input
        type="text"
        value={text}
        placeholder="enter list"
        onChange={(e) => dispatch(addText(e.target.value))}
      />
      <button onClick={() => dispatch(addList(text))}>Apply</button>
      <h6>
        {list.map((item) => (
          <h1>{item}</h1>
        ))}
      </h6>
    </div>
  );
};

export default List;
