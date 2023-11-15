// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function JobList() {
  const { data, isPending, error } = useFetch("http://127.0.0.1:8000/api/job/");

  return (
    <div className="job-list">
      <h2>Best-in-slot gearsets</h2>
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
  );
}

export default JobList;
