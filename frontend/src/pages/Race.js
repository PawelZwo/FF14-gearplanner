// React-Bootstrap imports
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import Loading from "../components/Loading";

function Race() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/race/"
  );

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
        <h3>Races on Eitherys</h3>
        <p>
          Those are their base stats. Mostly, those are irrevelant. If you want
          to min-max hard - they aren't.
        </p>

        {isPending && <Loading />}

        {data && data.length !== 0 && (
          <div
            style={{
              marginTop: "2vh",
              display: "inline-flex",
              gap: "0.75vw",
              flexWrap: "wrap",
            }}
          >
            {data.map((race) => {
              return (
                <Table
                  key={race.id}
                  bordered
                  striped
                  responsive="sm"
                  variant="dark"
                  style={{ marginTop: 0, marginBottom: 0 }}
                >
                  <thead>
                    <tr>
                      <th>
                        <strong>{race.name}</strong>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{race.base_vitality} Vit</td>
                    </tr>
                    <tr>
                      <td>{race.base_strength} Str</td>
                    </tr>
                    <tr>
                      <td>{race.base_dexterity} Dex</td>
                    </tr>
                    <tr>
                      <td>{race.base_intelligence} Int</td>
                    </tr>
                    <tr>
                      <td>{race.base_mind} Mind</td>
                    </tr>
                    <tr>
                      <td>{race.base_piety} Piety</td>
                    </tr>
                  </tbody>
                </Table>
              );
            })}
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
      </div>
    </>
  );
}

export default Race;
