// Project's components
import JobList from "../components/JobList";

// Project's small components
import PageTitle from "../components/small_components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle />

      <div>
        <JobList />
      </div>
    </>
  );
}
