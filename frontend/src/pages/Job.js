// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

function Job() {
  const { data, isPending, error } = useFetch("http://127.0.0.1:8000/api/job/");

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
        <h3>Jobs</h3>

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
            <Table borderless responsive="md">
              <thead>
                <tr>
                  <th>
                    <img
                      src="/media/TankRole.png"
                      width="25"
                      height="25"
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
                    return <tr key={id}>{name}</tr>;
                  })}
              </tbody>
            </Table>

            {/* Healer jobs */}
            <Table borderless responsive="md">
              <thead>
                <tr>
                  <th>
                    <img
                      src="/media/HealerRole.png"
                      width="25"
                      height="25"
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
                    return <tr key={id}>{name}</tr>;
                  })}
              </tbody>
            </Table>

            {/* Melee jobs */}
            <Table borderless responsive="md">
              <thead>
                <tr>
                  <th>
                    <img
                      src="/media/DPSRole.png"
                      width="25"
                      height="25"
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
                    return <tr key={id}>{name}</tr>;
                  })}
              </tbody>
            </Table>

            {/* Ranged jobs */}
            <Table borderless responsive="md">
              <thead>
                <tr>
                  <th>
                    <img
                      src="/media/DPSRole.png"
                      width="25"
                      height="25"
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
                    return <tr key={id}>{name}</tr>;
                  })}
              </tbody>
            </Table>

            {/* Caster jobs */}
            <Table borderless responsive="md">
              <thead>
                <tr>
                  <th>
                    <img
                      src="/media/DPSRole.png"
                      width="25"
                      height="25"
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
                    return <tr key={id}>{name}</tr>;
                  })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}

export default Job;
