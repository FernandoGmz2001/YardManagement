import { ComponentType } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
  returnUrl: string;
  CreateDialog?: ComponentType;
}
export default function Header({ title, returnUrl, CreateDialog }: HeaderProps) {
  return (
    <div className="flex justify-between items-center ">
      <Link to={returnUrl} className="hover:bg-gray-100 rounded text-2xl">
        <FiChevronLeft />
      </Link>
      <div>
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>
      {CreateDialog && (
        <div className="">
          <CreateDialog />
        </div>
      )}
    </div>
  )
}

