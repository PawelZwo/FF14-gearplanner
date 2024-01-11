// React-router
import { NavLink } from "react-router-dom";

// Custom hooks
import { useFetchGet } from "../hooks/useFetchGet";

// React-Bootstrap
// import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";

// Project's small components
import PageTitle from "../small_components/PageTitle";
import Loading from "../small_components/Loading";
import ErrorMessage from "../small_components/ErrorMessage";

export default function Gear() {
  const { data, isPending, error } = useFetchGet("api/gearsets/list/");

  return (
    <>
      <PageTitle pageName="All gearsets" />

      {/* {data && console.log(data)} */}

      {isPending && <Loading />}

      {data && (
        <ul>
          {data.map((gearset) => (
            <li key={gearset.uuid}>
              <NavLink
                className="gear_details_link"
                to={`/gearset/details/${gearset.slug}`}
              >
                {gearset.gearset_name} ({gearset.job_name})
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {error && <ErrorMessage error={error} variant="danger" />}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
