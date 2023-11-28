// React-Bootstrap imports
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Project's components
import Loading from "../components/Loading";

function Cost() {
  const { data, isPending, error } = useFetch(
    "http://127.0.0.1:8000/api/cost/"
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
        <h3>Gear costs types</h3>
        <p style={{ textWrap: "balance" }}>
          Since patch 6.4 Savage pieces drops have been shifted a little. In
          addition to exchanging <strong>Mythos I-III</strong> books for a piece
          of gear (except for weapons), you can now exchange{" "}
          <strong>Mythos IV</strong> books in 1:1 ratio for those pieces. Note
          that those changes are <strong>NOT</strong> retroactive!
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
            {data
              .filter(
                (costName) =>
                  costName.name !== "Exquisite Tomestone Weapon" &&
                  costName.name !== "Relic Weapon"
              )
              .map((cost) => {
                return (
                  <Table
                    key={data.id}
                    size="sm"
                    bordered
                    striped
                    responsive
                    variant="dark"
                    style={{
                      marginTop: 0,
                      marginBottom: "2vh",
                      textAlign: "center",
                    }}
                  >
                    <thead>
                      <tr>
                        <th colSpan={12}>
                          <strong>{cost.name}</strong>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Mythos I</td>
                        <td>Mythos II</td>
                        <td>Mythos III</td>
                        <td>Mythos IV</td>
                        <td>Unsung Head</td>
                        <td>Unsung Body</td>
                        <td>Unsung Legs</td>
                        <td>Unsung Hands</td>
                        <td>Unsung Feet</td>
                        <td>Unsung Acc</td>
                        <td>Tomestones</td>
                        <td>Weapon token</td>
                      </tr>
                      <tr>
                        {cost.mythos_1 !== 0 ? (
                          <td>
                            <strong>{cost.mythos_1}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.mythos_2 !== 0 ? (
                          <td>
                            <strong>{cost.mythos_2}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.mythos_3 !== 0 ? (
                          <td>
                            <strong>{cost.mythos_3}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.mythos_4 !== 0 ? (
                          <td>
                            <strong>{cost.mythos_4}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_head !== 0 ? (
                          <td>
                            <strong>{cost.unsung_head}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_body !== 0 ? (
                          <td>
                            <strong>{cost.unsung_body}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_legs !== 0 ? (
                          <td>
                            <strong>{cost.unsung_legs}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_hands !== 0 ? (
                          <td>
                            <strong>{cost.unsung_hands}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_feet !== 0 ? (
                          <td>
                            <strong>{cost.unsung_feet}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.unsung_acc !== 0 ? (
                          <td>
                            <strong>{cost.unsung_acc}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        {cost.tomestones !== 0 ? (
                          <td>
                            <strong>{cost.tomestones}</strong>
                          </td>
                        ) : (
                          <td>-</td>
                        )}
                        <td>
                          <strong>{cost.weapon_token ? "Yes" : "No"}</strong>
                        </td>
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
export default Cost;
