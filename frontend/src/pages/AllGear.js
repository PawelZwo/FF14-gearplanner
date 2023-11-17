// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import Loading from "../components/Loading";

function AllGear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/"
  );

  return (
    <>
      <h3>All gear</h3>
      {isPending && <Loading />}

      {data && (
        <ul>
          {data.map((gear) => {
            return <li key={gear.id}>{gear.name}</li>;
          })}
        </ul>
      )}

      {error && <div>{error}</div>}
    </>
  );
}
export default AllGear;
