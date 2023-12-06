// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import RoleTableColumn from "../components/RoleTableColumn";
import Loading from "../small_components/Loading";
import ErrorMessage from "../small_components/ErrorMessage";

function JobList() {
  const { data, isPending, error } = useFetch("api/job/");

  return (
    <>
      <h4>Best-in-slot gearsets</h4>
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

      {error && <ErrorMessage error={error} variant="danger" />}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}

export default JobList;
