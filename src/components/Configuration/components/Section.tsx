// Section.tsx
import { FiChevronRight } from "react-icons/fi";

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg?: string;
}

export function Section({ title, description, icon, iconBg = "bg-gray-100" }: SectionProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group-hover:bg-gray-50 group-active:bg-gray-100 cursor-pointer border border-gray-100 hover:border-gray-200">
      <div className={`p-3 rounded-lg ${iconBg} shadow-sm`}>
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 leading-snug">{description}</p>
      </div>

      <FiChevronRight className="text-gray-400 text-xl ml-2 flex-shrink-0 group-hover:text-gray-600" />
    </div>
  );
}
