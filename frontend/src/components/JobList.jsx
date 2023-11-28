// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";
import Loading from "../components/Loading";

function JobList() {
  const { data, isPending, error } = useFetch("http://127.0.0.1:8000/api/job/");

  return (
    <>
      <h3>Best-in-slot gearsets</h3>
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
          <RoleTableColumn data={data} roleCol="tank" title="Tanks" is_home />
          <RoleTableColumn
            data={data}
            roleCol="healer"
            title="Healers"
            is_home
          />
          <RoleTableColumn
            data={data}
            roleCol="melee"
            title="Melee Dps"
            is_home
          />
          <RoleTableColumn
            data={data}
            roleCol="ranged"
            title="Ranged Dps"
            is_home
          />
          <RoleTableColumn
            data={data}
            roleCol="caster"
            title="Caster Dps"
            is_home
          />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <div>Nothing to see here... 🤷‍♂️</div>}
    </>
  );
}

export default JobList;
