export default function useFFdb({ item_index, gear_name }) {
  return (
    <a
      href={
        "https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/" +
        item_index +
        "/"
      }
      className="eorzeadb_link"
      target="_blank"
    >
      {gear_name}
    </a>
  );
}
