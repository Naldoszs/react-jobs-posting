import { FaExclamationTriangle } from "react-icons/fa";
import LinkButton from "../components/LinkButton";

const NotFoundPage = () => {
  return (
    <main className="min-h-[100vh] w-[100vw] flex flex-col justify-center items-start pt-[60px]">
      <section className="text-center flex flex-col w-full justify-center items-center h-full">
        <FaExclamationTriangle className="text-yellow-400 text-8xl mb-4" />
        <h1 className="text-8xl mb-5 text-main-black font-bold font-workSans">
          404 Not Found
        </h1>
        <p className="text-xl mb-5 font-normal font-montserrat">
          This page does not exist
        </p>
        <LinkButton
          borderWeight="border-none"
          text="Go back to Home"
          textColor="text-white"
          padding="p-4"
          fontSize="text-xl"
          fontWeight="font-medium"
          hoverColor="hover:bg-blue-700"
          hoverTextColor="text-white"
          to="/"
        />
      </section>
    </main>
  );
};

export default NotFoundPage;
