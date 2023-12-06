// React-router
import { useSearchParams } from "react-router-dom";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Project's components
import CategoryTableColumn from "../components/CategoryTableColumn";
import SlotTableColumn from "../components/SlotTableColumn";

// Project's small components
import PageTitle from "../small_components/PageTitle";
import Loading from "../small_components/Loading";
import ErrorMessage from "../small_components/ErrorMessage";

export default function Gear() {
  const { data, isPending, error } = useFetch("api/gear/");

  const [categoryFilter, setCategoryFilter] = useSearchParams({ category: "" });
  const filteredCategory = categoryFilter.get("category");

  const roles = [
    "Fending",
    "Healing",
    "Maiming",
    "Striking",
    "Slaying",
    "Scouting",
    "Aiming",
    "Casting",
  ];

  const slots = [
    "Head",
    "Body",
    "Legs",
    "Hands",
    "Feet",
    "Earring",
    "Necklace",
    "Bracelet",
    "Ring",
    "Shield",
    "Weapon",
  ];

  const filteredData =
    data && filteredCategory !== ""
      ? data.filter((item) =>
          item.category === "" ? item : item.category === filteredCategory
        )
      : data;

  return (
    <>
      <PageTitle pageName="All gear" />
      <h3>
        {filteredCategory === null || filteredCategory === "" ? (
          "All "
        ) : (
          <strong>{filteredCategory} </strong>
        )}
        gear
      </h3>

      {isPending && <Loading />}

      {data && (
        <Stack direction="horizontal" gap={2} className="category-list">
          <Button
            value=""
            size="sm"
            type="button"
            onClick={(e) => setCategoryFilter({ category: e.target.value })}
            disabled={
              filteredCategory === "" || filteredCategory === null
                ? true
                : false
            }
            variant={
              filteredCategory === "" || filteredCategory === null
                ? "secondary"
                : "light"
            }
          >
            All
          </Button>

          {roles.map((item) => (
            <Button
              key={item}
              value={item}
              size="sm"
              type="button"
              onClick={(e) => setCategoryFilter({ category: e.target.value })}
              disabled={filteredCategory === item ? true : false}
              variant={filteredCategory === item ? "secondary" : "light"}
            >
              {item}
            </Button>
          ))}
        </Stack>
      )}

      {data && (filteredCategory === "" || filteredCategory === null) && (
        <div className="categories-tables">
          {roles.map((role) => (
            <CategoryTableColumn key={role} data={data} category={role} />
          ))}
        </div>
      )}

      {data && filteredCategory !== "" && filteredCategory !== null && (
        <div className="categories-tables">
          {filteredData.length !== 0 &&
            slots.map((slot) => (
              <SlotTableColumn key={slot} data={filteredData} slot={slot} />
            ))}
        </div>
      )}

      {error && <ErrorMessage error={error} variant="danger" />}

      {filteredData && filteredData.length === 0 && (
        <h4>Nothing to see here... 🤷‍♂️</h4>
      )}
    </>
  );
}
