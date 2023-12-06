// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

export default function ErrorMessage({ error, variant }) {
  return (
    <Stack direction="horizontal" gap={2}>
      {variant === "danger" && (
        <Image
          src="/media/error.png"
          width="48"
          height="48"
          alt="Error icon"
          className="mb15"
        />
      )}
      <Alert variant={variant}>{error}</Alert>
    </Stack>
  );
}
