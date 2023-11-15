// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function Race() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/race/"
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
        <h3>Races on Eitherys</h3>

        {isPending && (
          <>
            <Spinner animation="border" variant="dark" />
            <br />
            Loading data...
          </>
        )}

        {data && (
          <ul>
            {data.map((race) => {
              return <li key={race.id}>{race.name}</li>;
            })}
          </ul>
        )}

        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Race;
