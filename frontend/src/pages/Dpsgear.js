// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Project's components
import Loading from "../components/Loading";
import CategoryTableColumn from "../components/CategoryTableColumn";

function Dpsgear() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/gear/?category__in=Maiming,Striking,Slaying,Casting,Aiming,Scouting"
  );

  return (
    <>
      <h3>DPS gear</h3>
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
          <CategoryTableColumn data={data} category="Maiming" />
          <CategoryTableColumn data={data} category="Striking" />
          <CategoryTableColumn data={data} category="Slaying" />
          <CategoryTableColumn data={data} category="Casting" />
          <CategoryTableColumn data={data} category="Aiming" />
          <CategoryTableColumn data={data} category="Scouting" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <div>Nothing to see here... 🤷‍♂️</div>}
    </>
  );
}
export default Dpsgear;
