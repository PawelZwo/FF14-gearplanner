// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import CategoryTableColumn from "../components/CategoryTableColumn";

// Project's small components
import Loading from "../components/small_components/Loading";
import PageTitle from "../components/small_components/PageTitle";

function Tankgear() {
  const { data, isPending, error } = useFetch(
    "http://192.168.0.73:8000/api/gear/?category__in=Fending"
  );

  return (
    <>
      <PageTitle />
      <h3>Tank gear</h3>
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
          <CategoryTableColumn data={data} category="Fending" filtered />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default Tankgear;
