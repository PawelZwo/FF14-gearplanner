// React-bootstrap imports
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

// React-router imports
import { NavLink } from "react-router-dom";

export default function CategoryTableColumn({ data, category, filtered }) {
  // data: Object       - data coming from API in the parent element
  // category: String   - category for which data will be filtered

  return (
    <Table
      borderless
      hover
      responsive="sm"
      variant="dark"
      style={{ marginBottom: "0px", marginTop: "0px", padding: "0px" }}
    >
      {!filtered && (
        <thead>
          <tr>
            <th>
              <strong>{category}</strong>
            </th>
          </tr>
        </thead>
      )}

      <tbody>
        {category &&
          data
            .filter((gear) => gear.category === category)
            .map((gearPiece) => {
              return (
                <tr key={gearPiece.slug}>
                  <td>
                    <Stack direction="horizontal" gap={2}>
                      <Image
                        src={`https://lds-img.finalfantasyxiv.com/itemicon/${gearPiece.ff14_db_icon}`}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={`${gearPiece.gear_name} icon`}
                      />
                      <NavLink
                        className="gear_details_link"
                        to={`/gear/${gearPiece.slug}`}
                      >
                        {gearPiece.gear_name}
                      </NavLink>
                    </Stack>
                  </td>
                </tr>
              );
            })}

        {!category &&
          data.map((gearPiece) => {
            return (
              <tr key={gearPiece.slug}>
                <td>
                  <NavLink
                    className="gear_details_link"
                    to={`/gear/${gearPiece.slug}`}
                  >
                    {gearPiece.gear_name}
                  </NavLink>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
