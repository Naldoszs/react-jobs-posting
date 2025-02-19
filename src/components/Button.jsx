import { motion } from "framer-motion";
const Button = ({
  icon: Icon, // accepts a component a props
  text = "Button text",
  path,
  hoverColor = "hover:bg-green-500",
  hoverTextColor = null,
  hoverBorderColor = null,
  maxWidth = "max-w-[50%]",
  minWidth = "min-w-[65%]",
  onClick,
  marginBottom = "mb-0",
  backgroundColor = "bg-black",
  borderColor = "border-none",
  borderWeight = null,
  color = "text-white",
  disabled,
  disabledBgColor = null,
  width = "w-full",
  cursorType = "cursor-pointer",
  padding = "p-0",
  paddingX = "px-0",
  paddingY = "py-0",
  borderRad = "rounded-md",
  textColor = "text-white",
  type = null,
  iconTextColor = "text-white",
  iconHoverTextColor = "group-hover:text-white",
  marginRight = "mr-3",
  hoverScale = "",
  duration = 0.3,
  easeMethod = null,
  tapScale = "",
}) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: hoverScale,
      }}
      whileTap={{ scale: tapScale }}
      transition={{
        duration,
        ease: easeMethod,
      }}
      type={type}
      to={path}
      className={`flex ${width} h-auto justify-center items-center ${padding} ${paddingX} ${paddingY} text-base  font-lato font-semibold ${borderRad} ${hoverColor} ${backgroundColor} ${color} ${maxWidth} ${minWidth} transition-all duration-500 ease-in-out ${marginBottom} ${borderColor} ${borderWeight} shadow-3xl ${hoverTextColor} ${hoverBorderColor} ${disabledBgColor} ${cursorType} ${textColor} flex justify-center items-center group`}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Renders icon if provided */}
      {Icon && (
        <Icon
          className={`${marginRight} ${iconTextColor} ${iconHoverTextColor}`}
        />
      )}
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
