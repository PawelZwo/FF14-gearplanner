// React-Bootstrap
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";

export default function Loading() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Spinner animation="border" variant="light" />
      Loading data...
    </Stack>
  );
}
