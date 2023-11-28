// React-Bootstrap imports
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import Loading from "../components/Loading";

function Cost() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/cost/"
  );

  return (
    <>
      <div>
        <Image
          src="/media/current_patch_banner.jpg"
          alt="Current patch banner"
          rounded
          fluid
          style={{ marginBottom: "2vh" }}
        />
      </div>
      <div>
        <h3>Gear costs types</h3>

        {isPending && <Loading />}

        {data && data.length !== 0 && (
          <ul>
            {data.map((cost) => {
              return <li key={cost.id}>{cost.name}</li>;
            })}
          </ul>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {data && data.length === 0 && <div>Nothing to see here... 🤷‍♂️</div>}
      </div>
    </>
  );
}
export default Cost;
