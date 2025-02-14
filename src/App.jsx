import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomeCards from "./sections/HomeCards";
import JobListing from "./components/JobListing";
import JobListings from "./sections/JobListings";

const App = () => {
  return (
    <main className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px]">
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <Routes>
        <Route></Route>
      </Routes>
    </main>
  );
};

export default App;
