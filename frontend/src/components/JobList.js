// React imports
import { useState, useEffect } from "react";

// React-Bootstrap imports
import Spinner from "react-bootstrap/Spinner";

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    const fetchJobs = await fetch("http://127.0.0.1:8000/api/job/");
    const jobData = await fetchJobs.json();
    setJobs(jobData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="job-list">
      <h2>JobList</h2>
      {isLoading ? (
        <>
          <Spinner animation="border" variant="dark" /> Loading...
        </>
      ) : (
        <ul>
          {jobs.length !== 0 &&
            jobs.map((job) => {
              return <li key={job.id}>{job.name}</li>;
            })}
        </ul>
      )}
    </div>
  );
}

export default JobList;
