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
    "http://127.0.0.1:8000/api/gear/"
  );

  const [isFiltered, setIsFiltered] = useState({ filtered: false, by: null });

  const jobs = [
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

  // const jobs2 = data && jobs.map(job => {return job})

  // console.log(jobs2);

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
        {isFiltered.by === null || isFiltered.by === "All"
          ? "All"
          : isFiltered.by}{" "}
        gear
      </h3>
      {isPending && <Loading />}

      {data && data.length !== 0 && (
        <Stack direction="horizontal" gap={2} className="category-list">
          {jobs.map((job, index) => {
            return (
              <Button
                disabled={
                  job === "All"
                    ? isFiltered.by === null
                      ? true
                      : ""
                    : isFiltered.by === job
                    ? true
                    : ""
                }
                key={index}
                size="sm"
                type="button"
                value={job}
                onClick={(e) => handleFiltration(e.target.value)}
                variant={
                  job === "All"
                    ? isFiltered.by === null
                      ? "secondary"
                      : "light"
                    : isFiltered.by === job
                    ? "secondary"
                    : "light"
                }
              >
                {job}
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
          <CategoryTableColumn data={data} category={isFiltered.by} />
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
          {jobs.slice(1).map((category) => (
            <CategoryTableColumn data={data} category={category} />
          ))}

          {/* <CategoryTableColumn data={data} category="Fending" />
          <CategoryTableColumn data={data} category="Healing" />
          <CategoryTableColumn data={data} category="Maiming" />
          <CategoryTableColumn data={data} category="Striking" />
          <CategoryTableColumn data={data} category="Slaying" />
          <CategoryTableColumn data={data} category="Casting" />
          <CategoryTableColumn data={data} category="Aiming" />
          <CategoryTableColumn data={data} category="Scouting" /> */}
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {data && data.length === 0 && <h4>Nothing to see here... 🤷‍♂️</h4>}
    </>
  );
}
export default AllGear;
