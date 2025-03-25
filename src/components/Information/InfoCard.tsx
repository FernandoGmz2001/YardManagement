import { IconType } from "react-icons/lib";
interface Props {
  title: string;
  description: string;
  icon: IconType
}
function InfoCard({ title, description, icon: Icon }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center justify-center rounded-full w-8 h-8 bg-[#EFEFEF]">
        <Icon />
      </div>
      <div className="flex flex-col">
        <p className="text-sm">{title}</p>
        <p className="font-bold text-sm">{description}</p>
      </div>

    </div>
  )
}

export default InfoCard
