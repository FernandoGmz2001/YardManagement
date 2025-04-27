import { FiChevronRight } from "react-icons/fi";

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg?: string;
}

export function Section({
  title,
  description,
  icon,
  iconBg = "bg-gray-100",
}: SectionProps) {
  return (
    <div className="flex items-center gap-3 p-3 active:bg-gray-50 active:scale-[0.98] transition-transform duration-150 rounded-xl cursor-pointer border border-gray-200">
      <div className={`p-2.5 rounded-lg ${iconBg} shadow-sm flex-shrink-0`}>
        {icon}
      </div>

      <div className="flex-1 min-w-0 space-y-0.5">
        <h3 className="text-[15px] font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-[13px] text-gray-600 leading-snug line-clamp-2">
          {description}
        </p>
      </div>

      <FiChevronRight className="text-gray-500 text-lg ml-1 flex-shrink-0" />
    </div>
  );
}
