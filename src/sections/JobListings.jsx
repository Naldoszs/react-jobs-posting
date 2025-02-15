import { useEffect, useState } from "react";
import JobListing from "../components/JobListing";
import DotLoader from "react-spinners/DotLoader";
const JobListings = ({ isHome = false }) => {
  //check functionality of url to fetch
  const apiUrl = isHome ? "/api/jobListings?_limit=4" : "/api/jobListings";

  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("Error fetching data, Please, reload...");
        }
        const fetchedJobs = await res.json();
        console.log(fetchedJobs);
        setData(fetchedJobs);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Adding a delay before fetching data
    setTimeout(fetchJobs, 3000);
  }, []);

  return (
    <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto bg-purple-50">
      <h3
        className={`text-3xl w-full flex h-auto justify-center font-bold mb-5 ${
          isLoading ? "hidden" : "flex"
        }`}
      >
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h3>

      {isLoading ? (
        //gonna render a spinner here
        <div className="min-h-screen flex justify-center items-center">
          <DotLoader loading={isLoading} size={200} color="#0000ff" />
        </div>
      ) : fetchError ? (
        <h6 className="text-xl font-semibold text-red-500 flex w-full h-auto justify-center text-center">
          {fetchError}
        </h6>
      ) : (
        <div
          aria-label="job listings overall container"
          className="w-full grid grid-cols-2 gap-3 h-auto items-start max-lg:grid-cols-1 justify-items-center p-4"
        >
          {data.map((jobList) => (
            <JobListing key={jobList.id} jobList={jobList} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobListings;
