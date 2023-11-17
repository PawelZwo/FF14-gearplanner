// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";

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
        <div style={{ marginTop: "1vh", display: "inline-flex", gap: "3vw" }}>
          <RoleTableColumn
            data={data}
            roleCol="tank"
            title="Tanks"
            is_home={true}
          />
          <RoleTableColumn
            data={data}
            roleCol="healer"
            title="Healers"
            is_home={true}
          />
          <RoleTableColumn
            data={data}
            roleCol="melee"
            title="Melee Dps"
            is_home={true}
          />
          <RoleTableColumn
            data={data}
            roleCol="ranged"
            title="Ranged Dps"
            is_home={true}
          />
          <RoleTableColumn
            data={data}
            roleCol="caster"
            title="Caster Dps"
            is_home={true}
          />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export default JobList;
