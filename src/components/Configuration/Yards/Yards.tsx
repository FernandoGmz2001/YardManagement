import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import AddYard from "./components/AddYard";
import { FiSearch } from "react-icons/fi";
import { YardList } from "./components/YardList.tsx";
import { useYards } from "@/states/yards.ts";
import { useEffect } from "react";

export default function Yards() {
  const { yards, loadYards } = useYards()
  useEffect(() => {
    loadYards()
  }, [])
  return (
    <div className="flex flex-col gap-4 py-6 px-6">
      <Header
        title="Yardas"
        returnUrl="/settings"
        CreateDialog={AddYard}
      />

      <div className="relative w-full">
        <Input
          id="search"
          className="peer ps-12 bg-white border-none rounded-full px-5 py-4 h-full"
          placeholder="Busca una yarda"
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50 text-2xl">
          <FiSearch />
        </div>
      </div>

      <YardList yards={yards} />
    </div>
  )
}
