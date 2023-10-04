import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../redux/selectors";
import { fetchTodos } from "../redux/slices/todos";
import LoadingComponent from "../components/Loading";
import Error from "../components/error";
import Todo from "../components/todo";
function Todos() {
  const dispatch = useDispatch();
  const { Loading, Todos, error } = useSelector(todosSelector);
  useEffect(() => {
    !Todos ? dispatch(fetchTodos()) : null;
  }, []);
  if (error) return <Error message={"Failed to fetch todos"} />;
  return (
    <>
      {Loading
        ? [...Array(15)].map((x, ind) => <Todo key={ind + 1} skeleton={true} />)
        : Todos && Todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </>
  );
}

export default Todos;
