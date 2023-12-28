// React-Router
import { Link, useParams } from "react-router-dom";

// React-Bootstrap
import Alert from "react-bootstrap/Alert";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Project's small components
import Loading from "../small_components/Loading";
import PageTitle from "../small_components/PageTitle";
import GearIcon from "../small_components/GearIcon";
import FinalFantasyDataBaseLink from "../small_components/FinalFantasyDataBaseLink";

// Custom hooks
import { useFetchGet } from "../hooks/useFetchGet";

export default function GearDetails() {
  const { gearSlug } = useParams();

  const { data, isPending, error } = useFetchGet(
    `api/gears/details/${gearSlug}`
  );

  return (
    <>
      {data && <PageTitle pageName={data.gear_name} />}
      {isPending && <Loading />}

      {error && (
        <>
          <Alert variant="danger">{error}</Alert>

          <Link to="/gear/">
            <Button size="sm" type="button" variant="secondary">
              Back
            </Button>
          </Link>
        </>
      )}

      {data && data.length === 1 && (
        <>
          <h4>Nothing to see here... 🤷‍♂️</h4>
          <Link to="/gear/">
            <Button size="sm" type="button" variant="secondary">
              Back
            </Button>
          </Link>
        </>
      )}

      {data && (
        <>
          <Row>
            <Stack direction="horizontal" className="mb10" gap={2}>
              <GearIcon
                icon_path={data.ff14_db_icon}
                piece_name={data.gear_name}
                on_details
              />
              <h3>{data.gear_name}</h3>
            </Stack>
          </Row>

          <Row>
            <Col sm={7}>
              <div className="mb20" style={{ marginLeft: "115px" }}>
                <div className="strong20 mb10">
                  <strong>{data.item_level}</strong> ilvl{" "}
                  <strong>{data.cost_name}</strong>
                </div>

                <div className="strong20 mb10">
                  Requires level <strong>{data.required_level}</strong> to
                  equip.
                </div>

                <div className="strong20 mb10">
                  Added in patch: <strong>{data.added_in_patch}</strong>
                </div>

                <div className="strong20 mb10">
                  Acquisition:
                  <br />
                  <strong>{data.acquisition}</strong>
                </div>

                <div className="strong20 mb10">
                  Can be equipped by: <br />
                  {data.job.map((item) => (
                    <div className="mt5" key={item.job_name}>
                      <strong>{item.job_name} </strong>
                    </div>
                  ))}
                </div>
                <div className="mt20">
                  <Link to={`/gear?category=${data.category}`}>
                    <Button
                      size="sm"
                      type="button"
                      variant="secondary"
                      className="mr10"
                    >
                      Back
                    </Button>
                  </Link>
                  <FinalFantasyDataBaseLink item_index={data.ff14_db_index} />
                </div>
              </div>
            </Col>

            <Col sm={4}>
              <Table borderless striped responsive="sm" variant="dark">
                <tbody>
                  {data.physical_dmg !== 0 && (
                    <tr>
                      <td>Physical damage</td>
                      <td>
                        <strong>{data.physical_dmg}</strong>
                      </td>
                    </tr>
                  )}
                  {data.magical_dmg !== 0 && (
                    <tr>
                      <td>Magical damage</td>
                      <td>
                        <strong>{data.magical_dmg}</strong>
                      </td>
                    </tr>
                  )}
                  {data.auto_attack !== "0.00" && (
                    <tr>
                      <td>Auto attack</td>
                      <td>
                        <strong>{data.auto_attack}</strong>
                      </td>
                    </tr>
                  )}
                  {data.delay !== "0.00" && (
                    <tr>
                      <td>Delay</td>
                      <td>
                        <strong>{data.delay}</strong> (s)
                      </td>
                    </tr>
                  )}
                  {data.block_strength !== 0 && (
                    <tr>
                      <td>Block strength</td>
                      <td>
                        <strong>{data.block_strength}</strong>
                      </td>
                    </tr>
                  )}
                  {data.block_rate !== 0 && (
                    <tr>
                      <td>Block rate</td>
                      <td>
                        <strong>{data.block_rate}</strong>
                      </td>
                    </tr>
                  )}
                  {data.defense !== 0 && (
                    <tr>
                      <td>Defense</td>
                      <td>
                        <strong>{data.defense}</strong>
                      </td>
                    </tr>
                  )}
                  {data.magic_defense !== 0 && (
                    <tr>
                      <td>Magic defense</td>
                      <td>
                        <strong>{data.magic_defense}</strong>
                      </td>
                    </tr>
                  )}
                  {data.vitality !== 0 && (
                    <tr>
                      <td>Vitality</td>
                      <td>
                        <strong>{data.vitality}</strong>
                      </td>
                    </tr>
                  )}
                  {data.strength !== 0 && (
                    <tr>
                      <td>Strength</td>
                      <td>
                        <strong>{data.strength}</strong>
                      </td>
                    </tr>
                  )}
                  {data.dexterity !== 0 && (
                    <tr>
                      <td>Dexterity</td>
                      <td>
                        <strong>{data.dexterity}</strong>
                      </td>
                    </tr>
                  )}
                  {data.intelligence !== 0 && (
                    <tr>
                      <td>Intelligence</td>
                      <td>
                        <strong>{data.intelligence}</strong>
                      </td>
                    </tr>
                  )}
                  {data.mind !== 0 && (
                    <tr>
                      <td>Mind</td>
                      <td>
                        <strong>{data.mind}</strong>
                      </td>
                    </tr>
                  )}
                  {data.piety !== 0 && (
                    <tr>
                      <td>Piety</td>
                      <td>
                        <strong>{data.piety}</strong>
                      </td>
                    </tr>
                  )}
                  {data.critical_rate !== 0 && (
                    <tr>
                      <td>Critical rate</td>
                      <td>
                        <strong>{data.critical_rate}</strong>
                      </td>
                    </tr>
                  )}
                  {data.direct_hit !== 0 && (
                    <tr>
                      <td>Direct hit</td>
                      <td>
                        <strong>{data.direct_hit}</strong>
                      </td>
                    </tr>
                  )}
                  {data.determination !== 0 && (
                    <tr>
                      <td>Determination</td>
                      <td>
                        <strong>{data.determination}</strong>
                      </td>
                    </tr>
                  )}
                  {data.skill_speed !== 0 && (
                    <tr>
                      <td>Skill speed</td>
                      <td>
                        <strong>{data.skill_speed}</strong>
                      </td>
                    </tr>
                  )}
                  {data.spell_speed !== 0 && (
                    <tr>
                      <td>Spell speed</td>
                      <td>
                        <strong>{data.spell_speed}</strong>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}
