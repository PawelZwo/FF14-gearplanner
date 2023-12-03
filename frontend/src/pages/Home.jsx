// Project's components
import JobList from "../components/JobList";

// Project's small components
import PageTitle from "../small_components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Home" />

      <div>
        <JobList />
      </div>
    </>
  );
}
