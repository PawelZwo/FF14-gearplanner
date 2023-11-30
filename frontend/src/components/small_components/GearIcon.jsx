// React-bootstrap imports
import Image from "react-bootstrap/Image";

export default function GearIcon({ icon_path, piece_name, on_details }) {
  return (
    <Image
      src={`https://lds-img.finalfantasyxiv.com/itemicon/${icon_path}`}
      width={on_details ? "100" : "30"}
      height={on_details ? "100" : "30"}
      className="d-inline-block align-top"
      alt={`${piece_name} icon`}
      style={on_details && { marginRight: "0.5rem" }}
    />
  );
}
