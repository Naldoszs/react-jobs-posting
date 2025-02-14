import LinkButton from "../components/LinkButton";

const CardContent = ({
  headingText = "The heading",
  buttonText = "Header Text",
  bodyText = "Body Text",
  to = "",
  bgColor = "bg-black",
  hoverColor = "hover:bg-red-500",
}) => {
  return (
    <>
      <div className="w-full h-auto flex flex-col space-y-1">
        <h2 class="text-2xl font-bold w-full h-auto">{headingText}</h2>
        <p class="w-full h-auto">{bodyText}</p>
      </div>
      <LinkButton
        backgroundColor={bgColor}
        text={buttonText}
        textColor="text-white"
        borderWeight="border-none"
        padding={"p-4"}
        hoverTextColor="text-white"
        hoverColor={hoverColor}
        fontWeight="font-medium"
        to={to}
      />
    </>
  );
};

export default CardContent;
