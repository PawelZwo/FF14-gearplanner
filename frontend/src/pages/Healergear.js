// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";
import CategoryTableColumn from "../components/CategoryTableColumn";

function Healergear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/?category__in=Healing"
  );

  return (
    <>
      <h3>Healer gear</h3>
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
          <CategoryTableColumn data={data} category="Healing" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <div>Nothing to see here... 🤷‍♂️</div>}
    </>
  );
}
export default Healergear;
