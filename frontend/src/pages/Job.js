// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";

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
        <p>You can view job's guide by clicking on it.</p>
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
              is_home={false}
            />
            <RoleTableColumn
              data={data}
              roleCol="healer"
              title="Healers"
              is_home={false}
            />
            <RoleTableColumn
              data={data}
              roleCol="melee"
              title="Melee Dps"
              is_home={false}
            />
            <RoleTableColumn
              data={data}
              roleCol="ranged"
              title="Ranged Dps"
              is_home={false}
            />
            <RoleTableColumn
              data={data}
              roleCol="caster"
              title="Caster Dps"
              is_home={false}
            />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </>
  );
}

export default Job;
