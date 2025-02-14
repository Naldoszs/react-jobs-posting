import { FaMapMarkerAlt } from "react-icons/fa";
import LinkButton from "../components/LinkButton";
const JobListing = ({ jobList }) => {
  return (
    <div
      aria-label="job listing card"
      className="flex flex-col w-full h-auto p-4 bg-trasparent border-2 border-blue-500 border-opacity-30  rounded-md max-w-[500px]"
    >
      <div
        aria-label="overall section container"
        className="flex flex-col w-full h-auto space-y-5"
      >
        {/* the header sub-section */}
        <header className="flex w-full h-auto flex-col font-workSans space-y-1">
          <p className="w-full h-auto text-sm">{jobList.type}</p>
          <h4 className="text-xl font-semibold w-full h-auto">
            {jobList.title}
          </h4>
        </header>
        {/* the body subsection */}
        <main className="w-full h-auto font-montserrat flex-col flex space-y-6">
          {/* paragraph & prize wrapper */}
          <div
            className="w-full h-auto space-y-4"
            aria-label="paragraph & prize wrapper"
          >
            {/* the paragraph */}
            <p className="w-full h-auto info-text">{jobList.description}</p>
            {/* the prize */}
            <p className="text-sm font-medium"> {jobList.salary}</p>
          </div>

          {/* the location & button wrapper */}
          <div
            className="w-full h-auto space-y-4"
            aria-label="the location & button wrapper"
          >
            {/* the location text & location icon wrapper */}
            <div
              className="w-full h-auto flex items-center space-x-1"
              aria-label="the location text & location icon wrapper"
            >
              {/* the location */}
              <FaMapMarkerAlt className="text-blue-500" />
              <p className="w-full h-auto text-red-700 font-medium text-sm">
                {jobList.location}
              </p>
            </div>

            {/* the location button */}
            <LinkButton
              text="Read more"
              textColor="text-white"
              borderWeight="border-none"
              width="w-full"
              paddingY={"py-4"}
              fontWeight="font-medium"
              backgroundColor="bg-purple-500"
              borderRadius="rounded-md"
              fontSize="text-lg"
              hoverColor="hover:bg-blue-500"
              hoverTextColor="hover:text-white"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobListing;
