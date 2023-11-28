// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";
import CategoryTableColumn from "../components/CategoryTableColumn";

function AllGear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/"
  );

  return (
    <>
      <h3>All gear</h3>
      {isPending && <Loading />}

      {data && data.length !== 0 && (
        <div
          style={{
            marginTop: "1vh",
            display: "inline-flex",
            gap: "1vw",
            flexWrap: "wrap",
          }}
        >
          <CategoryTableColumn data={data} category="Fending" />
          <CategoryTableColumn data={data} category="Healing" />
          <CategoryTableColumn data={data} category="Maiming" />
          <CategoryTableColumn data={data} category="Striking" />
          <CategoryTableColumn data={data} category="Slaying" />
          <CategoryTableColumn data={data} category="Casting" />
          <CategoryTableColumn data={data} category="Aiming" />
          <CategoryTableColumn data={data} category="Scouting" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default AllGear;
