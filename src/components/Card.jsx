const Card = ({ children, bgColor = "bg-indigo-100" }) => {
  return (
    <div
      className={`flex flex-col  w-full ${bgColor} px-6 py-10 rounded-lg shadow-md space-y-6`}
    >
      {children}
    </div>
  );
};

export default Card;
