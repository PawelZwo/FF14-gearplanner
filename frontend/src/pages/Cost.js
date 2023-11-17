// React-Bootstrap imports
import Image from "react-bootstrap/Image";

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

        {data && (
          <ul>
            {data.map((cost) => {
              return <li key={cost.id}>{cost.name}</li>;
            })}
          </ul>
        )}

        {error && <div>{error}</div>}
      </div>
    </>
  );
}
export default Cost;
