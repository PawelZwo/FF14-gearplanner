// React-Bootstrap
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

// React-Icons
import { TbStatusChange } from "react-icons/tb";

// React-Router
import { Link } from "react-router-dom";

// Custom functions
import toTitleCase from "../custom_functions/toTitleCase";

export default function RoleTableColumn({ data, roleCol, title, is_home }) {
  // data: Object          - data coming from API in the parent element
  // roleCol: String       - role for which data will be filtered
  // title: String         - what will be shown as table header
  // is_home: Boolean      - can be passed down to tell the component that it will be viewed on Home Page.

  return (
    <Table
      borderless
      hover
      responsive="sm"
      variant="dark"
      style={{ padding: "0px" }}
      className="mtb0"
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
          .map(({ id, job_name }) => {
            return (
              <tr key={id}>
                <td>
                  <img
                    src={`/media/job_icons/${toTitleCase(job_name).replace(
                      /\s/g,
                      ""
                    )}.png`}
                    width="25"
                    height="25"
                    className="d-inline-block align-top"
                    alt={`${job_name} job icon`}
                    style={{ marginRight: "5px" }}
                  />

                  {!is_home && (
                    <>
                      <Link
                        to={
                          "https://eu.finalfantasyxiv.com/jobguide/" +
                          job_name.replace(/\s/g, "").toLowerCase() +
                          "/"
                        }
                        className="job-link"
                        target="_blank"
                      >
                        {job_name}
                      </Link>{" "}
                      {(job_name === "Paladin" ||
                        job_name === "Reaper" ||
                        job_name === "Bard" ||
                        job_name === "Red Mage") && (
                        <Badge pill bg="success">
                          <TbStatusChange />
                        </Badge>
                      )}
                    </>
                  )}

                  {is_home && job_name}
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
