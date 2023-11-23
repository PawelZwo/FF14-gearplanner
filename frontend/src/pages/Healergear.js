// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";

function Healergear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/?category__in=Healing"
  );

  return (
    <>
      <h3>Healer gear</h3>
      {isPending && <Loading />}

      {data && (
        <ul>
          {data.map((gear) => {
            return <li key={gear.id}>{gear.name}</li>;
          })}
        </ul>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
}
export default Healergear;
