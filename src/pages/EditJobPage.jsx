import { useState } from "react";
import apiRequest from "../utility/apiRequest";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../components/Button";
import { FaPen } from "react-icons/fa";

const EditJobPage = () => {
  //get the jobloader data
  const { id } = useParams();
  const { data, error } = useLoaderData();
  const apiUrl = `/api/jobListings/${id}`;
  const [title, setTitle] = useState(data.title);
  const [type, setType] = useState(data.type);
  const [location, setLocation] = useState(data.location);
  const [description, setDescription] = useState(data.description);
  const [salary, setSalary] = useState(data.salary);
  const [companyName, setCompanyName] = useState(data.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    data.company.description
  );
  const [contactEmail, setContactEmail] = useState(data.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(data.company.contactPhone);
  const navigate = useNavigate();

  //function to handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    //functionality
    //new obj to submit
    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
      },
    };
    console.log(updatedJob);
    const putOptionsObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    };

    const result = await apiRequest(apiUrl, putOptionsObj);

    if (result) {
      toast.success("Job updated successfully"); // gonna toast here
    } else {
      toast.error("Failed to update job"); // gonna toast here
    }

    navigate(`/jobs/${id}`);
  };

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h6 className="text-xl font-semibold text-red-500">{error}</h6>
      </div>
    );
  }

  return (
    <main
      className="min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px] font-lato
"
    >
      <section
        className="
             min-h-[100vh] w-[100vw] flex flex-col justify-start items-start pt-[60px] bg-blue-50 bg-opacity-20 text-main-black padding-desktop max-lg:padding-tablet max-sm:padding-mobile "
      >
        {/* elements go in here  */}

        {/* stopped here */}
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-merriweatherSans font-semibold mb-6">
                Edit Job
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold font-lato mb-2"
                >
                  Job Type
                </label>
                {/* first input */}
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                {/* the second input */}
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2 focus:outline-slate-400"
                  placeholder="eg. Beautiful Apartment In Los Angeles"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* the third input */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  maxLength={5000}
                  minLength={1}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                {/* fourth input */}
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                {/* fifth input */}
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2 focus:outline-slate-400"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                {/* sixth input */}
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                {/* seventh input */}
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                {/* eight input */}
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  placeholder="Email address for applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                {/* ninth input */}
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3 focus:outline-slate-400"
                  placeholder="Optional phone for applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div className="w-full flex justify-center">
                {/* the button */}
                <Button
                  text="Edit job"
                  backgroundColor="bg-blue-500"
                  paddingY="p-2"
                  maxWidth="max-w-full"
                  type={"submit"}
                  hoverColor="hover:bg-blue-700"
                  icon={FaPen}
                  iconHoverTextColor="group-hover:text-purple-300"
                  hoverScale={1.01}
                  duration={0.3}
                  easeMethod="easeInOut"
                  tapScale={0.98}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditJobPage;
