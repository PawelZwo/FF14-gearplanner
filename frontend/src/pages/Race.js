// React-Bootstrap imports
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import Loading from "../components/Loading";

function Race() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/race/"
  );

  console.log(data);

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

        {data && (
          <div style={{ marginTop: "2vh", display: "inline-flex", gap: "2vw" }}>
            {data.map((race) => {
              return (
                <Table
                  key={race.id}
                  bordered
                  striped
                  responsive="sm"
                  variant="dark"
                >
                  <thead>
                    <tr>
                      <th>{race.name}</th>
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

        {error && <div>{error}</div>}
      </div>
    </>
  );
}

export default Race;
