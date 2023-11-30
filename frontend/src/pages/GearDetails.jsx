// React-bootstrap imports
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Stack from "react-bootstrap/Stack";

// Project's components
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";
import FinalFantasyDataBaseLink from "../components/FinalFantasyDataBaseLink";

// Custom hooks
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function GearDetails() {
  const { gearId } = useParams();

  const { data, isPending, error } = useFetch(
    `http://192.168.0.73:8000/api/gear/${Number(gearId)}`
  );

  return (
    <>
      <PageTitle />

      <div>
        {data && (
          <>
            <Stack direction="horizontal" style={{ marginBottom: "1rem" }}>
              <Image
                src={data.ff14_db_icon}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt={`${data.gear_name} icon`}
                style={{ marginRight: "1rem" }}
              />
              <h3>
                <FinalFantasyDataBaseLink
                  item_index={data.ff14_db_index}
                  gear_name={data.gear_name}
                />
              </h3>
            </Stack>
            <div style={{ marginLeft: "90px" }}>COSTAMCOSTAMXC</div>
          </>
        )}

        {isPending && <Loading />}

        {error && <Alert variant="danger">{error}</Alert>}

        {data && data.length === 1 && <h4>Nothing to see here... 🤷‍♂️</h4>}
      </div>
    </>
  );
}
