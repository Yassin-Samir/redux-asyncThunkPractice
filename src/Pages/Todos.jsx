import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../redux/selectors";
import { fetchTodos } from "../redux/slices/todos";
import LoadingComponent from "../components/Loading";
function Todos() {
  const dispatch = useDispatch();
  const { Loading, Todos } = useSelector(todosSelector);
  useEffect(() => {
    !Todos ? dispatch(fetchTodos()) : null;
  }, []);
  return Loading ? <LoadingComponent /> : <> </>;
}

export default Todos;
