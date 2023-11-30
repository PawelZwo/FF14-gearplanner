// React imports
import { useState } from "react";

// Custom hooks
import { useFetch } from "../hooks/useFetch";

// React-Bootstrap imports
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Project's components
import Loading from "../components/Loading";
import CategoryTableColumn from "../components/CategoryTableColumn";
import PageTitle from "../components/PageTitle";

function AllGear() {
  const { data, isPending, error } = useFetch(
    "http://192.168.0.73:8000/api/gear/"
  );

  const [isFiltered, setIsFiltered] = useState({ filtered: false, by: null });

  const roles = [
    "All",
    "Fending",
    "Healing",
    "Maiming",
    "Striking",
    "Slaying",
    "Scouting",
    "Aiming",
    "Casting",
  ];

  // const roles2 = data && roles.map(role => {return role})

  // console.log(roles2);

  function handleFiltration(chosenFilter) {
    if (chosenFilter !== "All") {
      setIsFiltered({ filtered: true, by: chosenFilter });
    }
    if (chosenFilter === "All") {
      setIsFiltered({ filtered: false, by: null });
    }
  }

  return (
    <>
      <PageTitle />
      <h3>
        {isFiltered.by === null || isFiltered.by === "All" ? (
          "All "
        ) : (
          <strong className="categories">{isFiltered.by} </strong>
        )}
        gear
      </h3>
      {isPending && <Loading />}

      {data && data.length !== 0 && (
        <Stack direction="horizontal" gap={2} className="category-list">
          {roles.map((role, index) => {
            return (
              <Button
                disabled={
                  role === "All"
                    ? isFiltered.by === null
                      ? true
                      : ""
                    : isFiltered.by === role
                    ? true
                    : ""
                }
                key={index}
                size="sm"
                type="button"
                value={role}
                onClick={(e) => handleFiltration(e.target.value)}
                variant={
                  role === "All"
                    ? isFiltered.by === null
                      ? "secondary"
                      : "light"
                    : isFiltered.by === role
                    ? "secondary"
                    : "light"
                }
              >
                {role}
              </Button>
            );
          })}
        </Stack>
      )}

      {data && data.length !== 0 && isFiltered.filtered && (
        <div
          style={{
            marginTop: "1vh",
            display: "inline-flex",
            gap: "1vw",
            flexWrap: "wrap",
          }}
        >
          <CategoryTableColumn data={data} category={isFiltered.by} filtered />
        </div>
      )}

      {data && data.length !== 0 && !isFiltered.filtered && (
        <div
          style={{
            marginTop: "1vh",
            display: "inline-flex",
            gap: "1vw",
            flexWrap: "wrap",
          }}
        >
          {roles.slice(1).map((category) => (
            <CategoryTableColumn
              key={category}
              data={data}
              category={category}
            />
          ))}
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default AllGear;
