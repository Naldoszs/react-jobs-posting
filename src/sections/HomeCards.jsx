import Card from "../components/Card";
import CardContent from "../components/CardContent";

const Homecards = () => {
  return (
    <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto bg-blue-50">
      {/* the cards container wrapper */}
      <div className="flex w-full h-auto justify-between items-start max-sm:flex-col space-x-5 max-sm:space-x-0 max-sm:space-y-5 p-10 max-lg:p-2 max-sm:p-10">
        <Card bgColor="bg-blue-200">
          <CardContent
            headingText="For Developers"
            bodyText="Browse our React jobs and start your career today"
            buttonText="Browse jobs"
            bgColor="bg-blue-500"
            hoverColor="hover:bg-purple-500"
            to="/jobs"
          />
        </Card>
        <Card bgColor="bg-purple-200">
          <CardContent
            headingText="For Employers"
            bodyText="List your job to find the perfect developer for the role"
            buttonText="Add job"
            bgColor="bg-purple-500"
            hoverColor="hover:bg-blue-500"
            to="/add-job"
          />
        </Card>
      </div>
    </section>
  );
};

export default Homecards;
