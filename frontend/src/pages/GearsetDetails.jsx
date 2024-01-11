// React-Router
import { Link, useParams } from "react-router-dom";

// React-Bootstrap
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// import Stack from "react-bootstrap/Stack";
// import Table from "react-bootstrap/Table";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// Project's small components
import Loading from "../small_components/Loading";
import PageTitle from "../small_components/PageTitle";

// Custom hooks
import { useFetchGet } from "../hooks/useFetchGet";

export default function GearsetDetails() {
  const { gearsetSlug } = useParams();

  const { data, isPending, error } = useFetchGet(
    `api/gearsets/details/${gearsetSlug}`
  );

  return (
    <>
      {data && <PageTitle pageName={data.gearset_name} />}
      {isPending && <Loading />}

      {error && (
        <>
          <Alert variant="danger">{error}</Alert>

          <Link to="/gearset/">
            <Button size="sm" type="button" variant="secondary">
              Back
            </Button>
          </Link>
        </>
      )}

      {data && (
        <>
          <ul>
            <li>{data.uuid}</li>
            <li>{data.slug}</li>
            <li>{data.job_name}</li>
          </ul>
        </>
      )}
    </>
  );
}
