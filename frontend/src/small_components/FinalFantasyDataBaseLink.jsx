// React-bootstrap components
import Button from "react-bootstrap/Button";

export default function useFFdb({ item_index }) {
  return (
    <a
      href={
        "https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/" +
        item_index +
        "/"
      }
      className="eorzeadb_link td-none"
      target="_blank"
    >
      <Button
        size="sm"
        type="button"
        variant="dark"
        style={{ color: "#658bf5" }}
      >
        Lodestone
      </Button>
    </a>
  );
}
