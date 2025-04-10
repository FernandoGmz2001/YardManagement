import { Trending } from "./Trending"

interface Props {
  title: string;
  quantity: number;
}

export const DashboardItem = ({ title, quantity }: Props) => {
  return (
    <div className='flex items-center flex-col p-3 bg-white rounded-xl w-full text-[#333333] gap-2'>
      <p className="font-medium">{title}</p>
      <h1 className="font-bold text-3xl text-black">{quantity}</h1>
      <Trending />
      <p className="text-xs">Vs el ultimo mes</p>
    </div>
  )
}
