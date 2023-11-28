// React-Bootstrap imports
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";
import Loading from "../components/Loading";

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
        <p>View official job guide by clicking on it.</p>

        {isPending && <Loading />}

        {data && data.length !== 0 && (
          <div
            style={{
              marginTop: "1vh",
              display: "inline-flex",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <RoleTableColumn data={data} roleCol="tank" title="Tanks" />
            <RoleTableColumn data={data} roleCol="healer" title="Healers" />
            <RoleTableColumn data={data} roleCol="melee" title="Melee Dps" />
            <RoleTableColumn data={data} roleCol="ranged" title="Ranged Dps" />
            <RoleTableColumn data={data} roleCol="caster" title="Caster Dps" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
      </div>
    </>
  );
}

export default Job;
