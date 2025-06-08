import { CustomButtonProps } from "@/types/globalTypes";
import { FormattedMessage } from "react-intl";

export const CustomButton = ({
  id,
  type,
  width,
  onClick,
  icon,
}: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`${width}  bg-[#E52323] hover:bg-[#B30000] text-white py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 `}
      onClick={onClick}>
      {icon ? icon : <FormattedMessage id={id!} />}
    </button>
  );
};
