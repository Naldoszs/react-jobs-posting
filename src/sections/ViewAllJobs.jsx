import LinkButton from "../components/LinkButton";

const ViewAllJobs = () => {
  return (
    <section className="padding-desktop max-lg:padding-tablet max-sm:padding-mobile flex flex-col w-full h-auto bg-blue-50">
      <div className="w-full h-auto flex px-4">
        <LinkButton
          to="/jobs"
          borderWeight="border-none"
          text="View All Jobs"
          textColor="text-white"
          width="w-full"
          paddingY="py-3"
          fontSize="text-xl"
          fontWeight="font-medium"
          hoverTextColor="text-white"
          hoverColor="hover:bg-purple-700"
        />
      </div>
    </section>
  );
};

export default ViewAllJobs;
