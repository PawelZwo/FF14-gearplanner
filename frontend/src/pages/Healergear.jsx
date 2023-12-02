// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import CategoryTableColumn from "../components/CategoryTableColumn";

// Project's small components
import Loading from "../small_components/Loading";
import PageTitle from "../small_components/PageTitle";

function Healergear() {
  const { data, isPending, error } = useFetch("api/gear/?category__in=Healing");

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
          <CategoryTableColumn data={data} category="Healing" filtered />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default Healergear;
