// React-bootstrap imports
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

// React-router imports
import { Link } from "react-router-dom";

// Custom functions
import toTitleCase from "../custom_functions/toTitleCase";

export default function RoleTableColumn({ data, roleCol, title, is_home }) {
  return (
    <Table
      borderless
      hover
      responsive="sm"
      variant="dark"
      style={{ marginBottom: "0px", marginTop: "0px", padding: "0px" }}
    >
      <thead>
        <tr>
          <th>
            <img
              src={"/media/" + title.replace(/\s/g, "") + ".png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="tank gear logo"
              style={{ marginRight: "5px" }}
            />
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((job) => job.role === roleCol)
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

                  {!is_home && (
                    <>
                      <Link
                        to={
                          "https://eu.finalfantasyxiv.com/jobguide/" +
                          name.replace(/\s/g, "").toLowerCase() +
                          "/"
                        }
                        className="job-link"
                        target="_blank"
                      >
                        {name}
                      </Link>{" "}
                      {(name === "Reaper" || name === "Sage") && (
                        <Badge pill bg="success">
                          N
                        </Badge>
                      )}
                    </>
                  )}

                  {is_home && name}
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
