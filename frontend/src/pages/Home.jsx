// Project's components
import JobList from "../components/JobList";
import PageTitle from "../components/PageTitle";

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
