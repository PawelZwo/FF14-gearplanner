import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <Spinner animation="border" variant="light" />
      <br />
      Loading data...
    </>
  );
}
