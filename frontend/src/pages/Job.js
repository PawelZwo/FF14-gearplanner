// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function Job() {
  const { data, isPending, error } = useFetch("http://127.0.0.1:8000/api/job/");

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
        <h3>Jobs</h3>

        {isPending && (
          <>
            <Spinner animation="border" variant="dark" />
            <br />
            Loading data...
          </>
        )}

        {data && (
          <ul>
            {data.map((job) => {
              return <li key={job.id}>{job.name}</li>;
            })}
          </ul>
        )}

        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Job;
