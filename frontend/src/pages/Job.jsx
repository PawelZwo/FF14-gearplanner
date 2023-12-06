// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";

// Project's small components
import Loading from "../small_components/Loading";
import PageTitle from "../small_components/PageTitle";
import ErrorMessage from "../small_components/ErrorMessage";

function Job() {
  const { data, isPending, error } = useFetch("api/job/");

  return (
    <>
      <PageTitle pageName="Jobs" />

      <div>
        <h3>Jobs</h3>
        <p>View official job guide by clicking on it.</p>

        {isPending && <Loading />}

        {data && data.length !== 0 && (
          <div
            className="mt0"
            style={{
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

        {error && <ErrorMessage error={error} variant="danger" />}

        {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
      </div>
    </>
  );
}

export default Job;
