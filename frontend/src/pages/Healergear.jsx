// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";
import CategoryTableColumn from "../components/CategoryTableColumn";
import PageTitle from "../components/PageTitle";

function Healergear() {
  const { data, isPending, error } = useFetch(
    "http://192.168.0.73:8000/api/gear/?category__in=Healing"
  );

  return (
    <>
      <PageTitle />
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
          <CategoryTableColumn data={data} category="Healing" filtered/>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default Healergear;
