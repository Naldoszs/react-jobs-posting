import JobListings from "../sections/JobListings";
const JobsPage = () => {
  return (
    <main className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px]">
      <JobListings isHome={false} />
    </main>
  );
};

export default JobsPage;
