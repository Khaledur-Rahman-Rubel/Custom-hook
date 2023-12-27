import useFetch from "./useFetch";

const AddData = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      <h1>Add data</h1>
      {data &&
        data.map((todo) => {
          return (
            <p key={todo.id}>
              {todo.title}
              <br />
              {todo.userId}
            </p>
          );
        })}
      {isLoading && "data loding"}
      {error && error}
    </div>
  );
};

export default AddData;
