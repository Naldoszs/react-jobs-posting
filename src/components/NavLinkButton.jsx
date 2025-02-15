import { NavLink } from "react-router-dom";

const NavLinkButton = ({
  text = "Button text",
  to,
  marginTop = "mt-0",
  textColor = "text-main-black-100",
  paddingX,
  paddingY,
  fontWeight = "font-normal",
  borderWeight = "border-2",
  borderColor = " border-slate-400",
  borderRadius = "rounded-md",
  hoverColor = "hover:bg-black",
  fontSize = "text-base",
  backgroundColor = "bg-black",
  hoverTextColor = "hover:text-red-500",
  padding = "p-0",
  width = "w-fit",
  bgOpacity = "bg-opacity-100",
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${borderWeight} ${borderColor} flex ${width} h-auto justify-center items-center ${paddingX}  ${paddingY} ${bgOpacity} ${fontSize}  font-workSans ${fontWeight} ${borderRadius}  ${textColor} ${hoverColor} transition-all duration-500 ease-in-out ${marginTop} ${backgroundColor} ${hoverTextColor} ${padding} ${isActive ? "bg-black bg-opacity-100 text-white" : ""}`
      }
    >
      {text}
    </NavLink>
  );
};

export default NavLinkButton;
