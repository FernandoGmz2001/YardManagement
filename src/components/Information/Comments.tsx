import { LuPaperclip } from "react-icons/lu";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Input } from "../ui/input";

export default function Comments() {
  return (
    <div className="flex flex-col h-[calc(98vh-200px)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 border-b pb-4">
        <div className="bg-[#226FFF] rounded-[8px] w-fit px-4 py-2 text-white ml-auto">
          <p>Motor defectuoso</p>
        </div>
      </div>

      <div className="flex gap-2 items-center w-full pt-2">
        <div className="sticky bottom-0 bg-white w-full mb-2">
          <div className="relative w-full">
            <Input
              id="search"
              className="w-full pl-12 pr-4 py-6 bg-[#f5f5f5] rounded-md"
              placeholder="Escribe un comentario..."
              type="text"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <LuPaperclip className="text-gray-400 text-lg" />
            </div>
          </div>
        </div>
        <div className="text-2xl  bg-black text-white flex items-center justify-center rounded-full p-3">
          <IoMdArrowRoundUp />
        </div>
      </div>
    </div>
  )
}
