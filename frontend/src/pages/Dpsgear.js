// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";

function Dpsgear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/?category__in=Maiming,Striking,Slaying,Casting,Aiming,Scouting"
  );

  return (
    <>
      <h3>DPS gear</h3>
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
export default Dpsgear;
