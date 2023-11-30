// React-bootstrap imports
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";

// Project's small components
import GearIcon from "./small_components/GearIcon";

// React-router imports
import { NavLink } from "react-router-dom";

export default function CategoryTableColumn({ data, category, filtered }) {
  // data: Object       - data coming from API in the parent element
  // category: String   - category for which data will be filtered
  // filtered: Boolean  - if true, then <thead> won't be displayed

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
                      <GearIcon
                        icon_path={gearPiece.ff14_db_icon}
                        piece_name={gearPiece.gear_name}
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
