// React-Bootstrap
import Image from "react-bootstrap/Image";

export default function GearIcon({ icon_path, piece_name, on_details }) {
  return (
    <Image
      src={`https://xivapi.com/i/${icon_path}_hr1.png`}
      width={on_details ? "100" : "30"}
      height={on_details ? "100" : "30"}
      className={`d-inline-block align-top ${on_details && "mr5"}`}
      alt={`${piece_name} icon`}
    />
  );
}
