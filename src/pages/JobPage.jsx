import { Link, useNavigate, useLoaderData } from "react-router-dom";
// import DotLoader from "react-spinners/DotLoader";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import Button from "../components/Button";
import apiRequest from "../utility/apiRequest";
import { toast } from "react-toastify";
import Modal from "../components/Modal"; // imported D modal component
import { useState } from "react";

const JobPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null); // stores job id to delte
  const { data, error } = useLoaderData();
  const navigate = useNavigate();
  console.log(data);

  /* 
  const [dataObj, setDataObj] = useState({});
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); */

  /*   useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${apiUrl}${id}`);
        if (!res.ok) {
          throw new Error("Error fetching data, Please, reload...");
        }
        const fetchedJob = await res.json();
        console.log(fetchedJob);
        setDataObj(fetchedJob);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Adding a delay before fetching data
    setTimeout(fetchJob, 2000);
  }, []);
 */
  /*   return (
    <main className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px]">
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <DotLoader loading={isLoading} size={200} color="#0000ff" />
        </div>
      ) : fetchError ? (
        <h6 className="text-xl font-semibold text-red-500 flex w-full h-auto justify-center text-center">
          {fetchError}
        </h6>
      ) : (
        <div className="">
          {dataObj.title && <p className="">{dataObj.title}</p>}
        </div>
      )}
    </main>
  );
}; */

  //function to trigger modal before deletion
  const handleConfirmDelete = (id) => {
    setJobToDelete(id);
    setIsModalOpen(true);
  };

  //function to handleDelete
  const handleDelete = async (id) => {
    const apiUrl = `/api/jobListings/${id}`;
    if (!id) {
      return;
    } else {
      // delete functionality
      const deleteOptionsObj = {
        method: "DELETE",
      };
      //call the api
      const result = await apiRequest(apiUrl, deleteOptionsObj);
      if (result) {
        toast.success("Deleted successfully!!");
      } else {
        toast.error("Deletion unsuccessful");
      }
    }
    navigate("/jobs");
  };

  //function to handle edit
  const handleEdit = (id) => {
    //take me to the edit page
    navigate(`/edit-job/${id}`);
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h6 className="text-xl font-semibold text-red-500">{error}</h6>
      </div>
    );
  }

  // if no error return
  return (
    <main
      className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[120px] font-lato
"
    >
      {/* first section to go back */}
      <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto">
        <section className=" w-full h-auto flex fixed top-[60px] bg-blue-50 left-0 right-0">
          <div>
            <Link to="/jobs" className="flex items-center space-x-2 p-4">
              <FaArrowLeft />
              <span className="font-medium text-md"> Back to Job Listings</span>
            </Link>
          </div>
        </section>

        {/* second main section */}
        <section
          aria-label="overall container for main elements"
          className="w-full  h-auto justify-start space-x-3 flex max-sm:flex-col max-lg:flex-col  max-sm:space-x-0 max-lg:space-x-0 max-sm:space-y-3"
        >
          <main className="flex-1 h-auto flex-col space-y-4 flex font-lato p-3">
            {/* upper div */}
            <div
              aria-label="top section"
              className=" flex flex-col w-full h-fit p-4 space-y-4  bg-transparent border-[1.5px] border-slate-200"
            >
              <p className="font-merriweatherSans text-sm w-full h-auto text-slate-400 uppercase font-semibold">
                {data.type}
              </p>
              <h6 className="w-full h-auto text-xl font-semibold font-merriweatherSans">
                {data.title}
              </h6>
              {/* the location and icon div */}
              <div className="flex -full h-auto items-center justify-start space-x-1  text-red-700">
                <span>
                  {/* the location icon */}
                  <FaMapMarkerAlt />
                </span>
                <p className="text-sm font-medium">{data.location}</p>
              </div>
            </div>

            {/* lower div */}
            <div
              aria-label="lower section"
              className=" flex flex-col w-full h-fit p-4 space-y-4 bg-transparent border-[1.5px] border-slate-200"
            >
              <p className="font-merriweatherSans text-sm w-full h-auto text-slate-400 capitalize font-semibold">
                Job Description
              </p>
              <p className="w-full h-auto text-base font-semibold font-lato">
                {data.description}
              </p>
              <div className=" w-full h-fit flex flex-col space-y-1">
                <p className="font-merriweatherSans text-sm w-full h-auto text-slate-400 capitalize font-semibold">
                  Salary
                </p>
                <p className="w-full h-auto text-sm font-semibold font-lato">
                  {data.salary}
                </p>
              </div>
            </div>
          </main>
          {/* the aside element */}
          <aside className=" p-6 rounded-lg bg-transparent border-[1.5px] border-slate-200 w-[400px] min-h-[80vh] font-merriweatherSans flex flex-col  justify-start space-y-5">
            <div
              aria-label="top top section"
              className="flex flex-col w-full h-fit p-4 space-y-5 border-2 border-gray-100 rounded-md"
            >
              <h6 className="text-sm font-medium">Company Info.</h6>

              <div
                aria-label="bottom top section"
                className="w-full h-fit flex flex-col space-y-2 text-xl"
              >
                <h6 className="w-full h-fit font-semibold ">
                  {data.company.name}
                </h6>
                <p className=" font-lato info-text">
                  {data.company.description}
                </p>
              </div>
            </div>
            {/* the seperator liner */}
            <div aria-label="liner-container" className="flex justify-center">
              <div aria-label="section seperator" className="underline "></div>
            </div>
            {/* the seperator line end */}

            {/* the contact information */}
            <div className="w-full h-fit  border-2 border-gray-100 rounded-md p-4">
              {/* first divison */}
              <div className="w-full h-fit">
                <label className="font-merriweatherSans text-lg font-semibold">
                  Contact Email:
                </label>

                <p className="bg-slate-200 p-1 rounded-sm font-medium text-slate-600">
                  {data.company.contactEmail}
                </p>
              </div>

              {/* second divison */}
              <div className="w-full h-fit">
                <label className="font-merriweatherSans text-lg font-semibold">
                  Contact Phone:
                </label>

                <p className="bg-slate-200 p-1 rounded-sm font-medium text-slate-600">
                  {data.company.contactPhone}
                </p>
              </div>
            </div>
            {/* the contact information end */}

            {/* the seperator liner */}
            <div aria-label="liner-container" className="flex justify-center">
              <div aria-label="section seperator" className="underline "></div>
            </div>
            {/* the seperator line end */}

            {/* manage job test & buttons */}
            <div className="flex flex-col space-y-3">
              <h6 className="font-merriweatherSans font-semibold text-slate-400">
                Manage Job
              </h6>
              {/* the two btns */}
              <div
                className="flex flex-col space-y-1"
                aria-label="the two buttons container "
              >
                <Button
                  width="w-full"
                  maxWidth="max-w-full"
                  text="Edit job"
                  paddingY="py-2"
                  borderRad="rounded-md"
                  backgroundColor="bg-blue-600"
                  onClick={() => handleEdit(data.id)}
                />
                <Button
                  width="w-full"
                  maxWidth="max-w-full"
                  text="Delete job"
                  paddingY="py-2"
                  borderRad="rounded-md"
                  backgroundColor="bg-red-500"
                  onClick={() => handleConfirmDelete(data.id)}
                />
              </div>
            </div>
          </aside>
        </section>
      </section>
      {/* the modal component */}
      <Modal
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => handleDelete(jobToDelete)}
      />
    </main>
  );
};

//Defining JobLoader from react-dom //future of react-dom

const jobLoader = async ({ params }) => {
  const apiUrl = "/api/jobListings/";
  try {
    const res = await fetch(`${apiUrl}${params.id}`);
    if (!res.ok) {
      throw new Error("Error fetching data, Please, reload...");
    }
    //run functionality if res is ok
    const fetchedJob = await res.json();

    return { data: fetchedJob, error: null }; // Return a structured response //
  } catch (err) {
    console.log(err.message);
    return { data: null, error: err.message }; // handles error
  }
};

export { JobPage as default, jobLoader };
//at video 2:08:00
