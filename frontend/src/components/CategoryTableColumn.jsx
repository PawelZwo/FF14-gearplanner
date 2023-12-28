// React-Bootstrap
import Table from "react-bootstrap/Table";
import Stack from "react-bootstrap/Stack";

// Project's small components
import GearIcon from "../small_components/GearIcon";

// React-Router
import { NavLink } from "react-router-dom";

export default function CategoryTableColumn({ data, category }) {
  // data: Object       - data coming from the parent element
  // category: String   - by what category will the data be filtered

  if (data.filter((item) => item.category === category).length === 0) {
    return null;
  }

  return (
    <Table
      borderless
      hover
      responsive="sm"
      variant="dark"
      className="mtb0"
      style={{ padding: "0px" }}
    >
      <thead>
        <tr>
          <th>
            <strong>{category}</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter((item) => item.category === category)
          .map((gearPiece) => {
            return (
              <tr key={gearPiece.slug}>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <GearIcon
                      icon_path={gearPiece.xiv_api_icon}
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
      </tbody>
    </Table>
  );
}
