// React-Bootstrap imports
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's small components
import Loading from "../small_components/Loading";
import PageTitle from "../small_components/PageTitle";

function Race() {
  const { data, isPending, error } = useFetch("api/race/");

  return (
    <>
      <PageTitle pageName="Races" />

      <div>
        <h3>Races on Eitherys</h3>
        <p>
          Those are their base stats. Mostly, those are{" "}
          <strong>irrevelant</strong>. If you want to min-max hard - they
          aren't.
        </p>

        {isPending && <Loading />}

        {data && data.length !== 0 && (
          <div
            style={{
              marginTop: "2vh",
              display: "inline-flex",
              gap: "1.25rem",
              textWrap: "wrap",
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
                  className="mtb0"
                >
                  <thead>
                    <tr>
                      <th>
                        <strong>{race.race_name}</strong>
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
