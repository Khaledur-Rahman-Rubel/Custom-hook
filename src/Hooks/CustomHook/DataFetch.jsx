import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const todoElement =
    data &&
    data.map((user) => {
      //if todos is true then map work
      return <p key={user.id}>{user.name}</p>;
    });

  return (
    <div>
      <h1>DataFatch</h1>
      {todoElement}
      {isLoading && "Data is loading"}
      {/* if data is loding then it will be give message */}
      {error && error}{" "}
      {/* if get any error then error will work and it will give error message  */}
    </div>
  );
};

export default DataFetch;
