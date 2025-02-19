import { FaTrash } from "react-icons/fa";
import Button from "./Button";
const Modal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;
  // if valid return the below funcrionality
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-lato w-full h-full">
      <div className="bg-white p-6 rounded-sm shadow-lg flex flex-col items-center space-y-4">
        <FaTrash />
        <p className="text-base font-normal font-lato w-full h-fit text-center">
          Are you sure you want to delete?
        </p>
        <p className="text-sm font-normal font-lato w-full h-fit text-center text-slate-500">
          Once deleted. It can't be retrieved.
        </p>
        {/* the buttons container */}
        <div className="mt-4 flex justify-center space-x-2 w-full">
          {/* first button */}
          <Button
            onClick={onCancel}
            text="Cancel"
            backgroundColor="bg-none"
            borderColor="border-slate-500"
            borderWeight={"border-[1.5px]"}
            textColor="text-[#35353C]"
            paddingY="py-2"
            // paddingX="px-4"
            hoverBorderColor={"hover:border-transparent"}
            hoverColor="hover:bg-gray-300"
            maxWidth="max-w-full"
            minWidth="min-w-[0]"
          />
          {/* second button */}
          <Button
            onClick={onConfirm}
            text="Delete"
            backgroundColor="bg-red-500"
            borderColor="border-transparent"
            borderWeight={"border-[1.5px]"}
            textColor="text-[#ffffff]"
            paddingY="py-2"
            hoverBorderColor={"hover:border-transparent"}
            hoverColor="hover:bg-red-700"
            maxWidth="max-w-full"
            minWidth="min-w-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
