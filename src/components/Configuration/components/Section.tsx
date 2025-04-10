import { FiChevronRight } from "react-icons/fi";

interface Section {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Section({ title, description, icon: Icon }: Section) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-200">
      <div className="flex-1">
        <div className="flex gap-2">
          <div className="p-2 bg-gray-100 rounded-full">
            {Icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <div className="text-2xl">
        <FiChevronRight />
      </div>
    </div>
  );
}
