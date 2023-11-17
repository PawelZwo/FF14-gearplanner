// React-Bootstrap components
import Image from "react-bootstrap/Image";
import JobList from "./JobList";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="./media/current_patch_banner.jpg"
          alt="Current patch banner"
          rounded
          fluid
        />
      </div>
      <div>
        <JobList/>
      </div>
    </>
  );
}
