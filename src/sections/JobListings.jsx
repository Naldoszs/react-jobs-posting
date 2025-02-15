import { jobListings } from "../constants/jobListings";
import JobListing from "../components/JobListing";

const JobListings = () => {
  //slicing the 4 most recent jobs
  const recentJobs = jobListings.slice(0, 4);

  return (
    <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto bg-purple-50">
      <div
        aria-label="job lisitings overall container"
        className="w-full grid grid-cols-2 gap-3 h-auto items-start max-lg:grid-cols-1 justify-items-center p-4"
      >
        {recentJobs.map((jobList) => (
          <JobListing key={jobList.id} jobList={jobList} />
        ))}
      </div>
    </section>
  );
};

export default JobListings;
