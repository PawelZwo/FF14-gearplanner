// React-Bootstrap components
import Image from "react-bootstrap/Image";
import { Outlet } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div style={{ marginBottom: "2vh" }}>
        <Image
          src="/media/current_patch_banner.jpg"
          alt="Current patch banner"
          height="150"
          rounded
          fluid
        />
      </div>
      <div style={{ marginBottom: "2vh" }}>
        <Outlet />
      </div>
    </>
  );
}
