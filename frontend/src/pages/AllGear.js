// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function AllGear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/"
  );

  return (
    <>
    <h3>All gear</h3>
      {isPending && (
        <>
          <Spinner animation="border" variant="dark" />
          <br />
          Loading data...
        </>
      )}

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
