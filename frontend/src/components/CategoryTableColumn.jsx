// React-bootstrap imports
import Table from "react-bootstrap/Table";

// // React-router imports
// import { Link } from "react-router-dom";

export default function CategoryTableColumn({ data, category }) {
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
      <thead>
        <tr>
          <th>
            <strong>{category}</strong>
          </th>
        </tr>
      </thead>

      <tbody>
        {category &&
          data
            .filter((gear) => gear.category === category)
            .map((gearPiece) => {
              return (
                <tr key={gearPiece.id}>
                  <td>{gearPiece.name}</td>
                </tr>
              );
            })}

        {!category &&
          data.map((gearPiece) => {
            return (
              <tr key={gearPiece.id}>
                <td>{gearPiece.name}</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}
