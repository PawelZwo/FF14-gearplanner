export default function useFFdb({ item_index, item_name }) {
  return (
    <a
      href={
        "https://eu.finalfantasyxiv.com/lodestone/playguide/db/item/" +
        item_index +
        "/"
      }
      class="eorzeadb_link"
    >
      {item_name}
    </a>
  );
}
