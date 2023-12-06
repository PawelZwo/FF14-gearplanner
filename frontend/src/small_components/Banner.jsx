// React-Bootstrap
import Image from "react-bootstrap/Image";
import { Outlet } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="mb20">
        <Image
          src="/media/current_patch_banner.jpg"
          alt="Current patch banner"
          height="150"
          rounded
          fluid
        />
      </div>
      <div className="mb20">
        <Outlet />
      </div>
    </>
  );
}
