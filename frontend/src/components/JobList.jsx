// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// Custom functions
import toTitleCase from "../custom_functions/toTitleCase";

function JobList() {
  const { data, isPending, error } = useFetch("http://127.0.0.1:8000/api/job/");

  return (
    <div className="job-list">
      <h2>Best-in-slot gearsets</h2>
      {isPending && (
        <>
          <Spinner animation="border" variant="dark" />
          <br />
          Loading data...
        </>
      )}

      {data && (
        <div style={{ marginTop: "1vh", display: "inline-flex", gap: "3vw" }}>
          {/* Tank jobs */}
          <Table borderless hover responsive="md" variant="dark">
            <thead>
              <tr>
                <th>
                  <img
                    src="/media/TankRole.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="tank gear logo"
                    style={{ marginRight: "5px" }}
                  />
                  Tanks
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((job) => job.role === "tank")
                .map(({ id, name }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          src={`/media/job_icons/${toTitleCase(name).replace(
                            /\s/g,
                            ""
                          )}.png`}
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                          alt={`${name} job icon`}
                          style={{ marginRight: "5px" }}
                        />
                        {name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          {/* Healer jobs */}
          <Table borderless hover responsive="md" variant="dark">
            <thead>
              <tr>
                <th>
                  <img
                    src="/media/HealerRole.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="tank gear logo"
                    style={{ marginRight: "5px" }}
                  />
                  Healers
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((job) => job.role === "healer")
                .map(({ id, name }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          src={`/media/job_icons/${toTitleCase(name).replace(
                            /\s/g,
                            ""
                          )}.png`}
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                          alt={`${name} job icon`}
                          style={{ marginRight: "5px" }}
                        />
                        {name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          {/* Melee jobs */}
          <Table borderless hover responsive="md" variant="dark">
            <thead>
              <tr>
                <th>
                  <img
                    src="/media/DPSRole.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="tank gear logo"
                    style={{ marginRight: "5px" }}
                  />
                  Melee dps
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((job) => job.role === "melee")
                .map(({ id, name }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          src={`/media/job_icons/${toTitleCase(name).replace(
                            /\s/g,
                            ""
                          )}.png`}
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                          alt={`${name} job icon`}
                          style={{ marginRight: "5px" }}
                        />
                        {name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          {/* Ranged jobs */}
          <Table borderless hover responsive="md" variant="dark">
            <thead>
              <tr>
                <th>
                  <img
                    src="/media/DPSRole.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="tank gear logo"
                    style={{ marginRight: "5px" }}
                  />
                  Ranged dps
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((job) => job.role === "ranged")
                .map(({ id, name }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          src={`/media/job_icons/${toTitleCase(name).replace(
                            /\s/g,
                            ""
                          )}.png`}
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                          alt={`${name} job icon`}
                          style={{ marginRight: "5px" }}
                        />
                        {name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          {/* Caster jobs */}
          <Table borderless hover responsive="md" variant="dark">
            <thead>
              <tr>
                <th>
                  <img
                    src="/media/DPSRole.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="tank gear logo"
                    style={{ marginRight: "5px" }}
                  />
                  Caster dps
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((job) => job.role === "caster")
                .map(({ id, name }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <img
                          src={`/media/job_icons/${toTitleCase(name).replace(
                            /\s/g,
                            ""
                          )}.png`}
                          width="25"
                          height="25"
                          className="d-inline-block align-top"
                          alt={`${name} job icon`}
                          style={{ marginRight: "5px" }}
                        />
                        {name}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export default JobList;
