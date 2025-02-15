import Hero from "../sections/Hero";
// import NavBar from "./components/NavBar";
import HomeCards from "../sections/HomeCards";
import JobListings from "../sections/JobListings";
import ViewAllJobs from "../sections/ViewAllJobs";

const HomePage = () => {
  return (
    <main className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px]">
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </main>
  );
};

export default HomePage;
