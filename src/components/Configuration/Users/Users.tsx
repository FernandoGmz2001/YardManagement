import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { useEffect } from "react";
import { useUsers } from "@/states/users";
import AddUser from "./components/AddUser";
import { UserList } from "./components/UserList";

export default function Yards() {
  const { users, loadUsers } = useUsers()
  useEffect(() => {
    loadUsers()
  }, [])
  return (
    <div className="flex flex-col gap-4 py-6 px-6">
      <Header
        title="Usuarios"
        returnUrl="/settings"
        CreateDialog={AddUser}
      />

      <div className="relative w-full">
        <Input
          id="search"
          className="peer ps-12 bg-white border-none rounded-full px-5 py-4 h-full"
          placeholder="Busca un usuario"
          type="text"
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 peer-disabled:opacity-50 text-2xl">
          <FiSearch />
        </div>
      </div>

      <UserList users={users} />
    </div>
  )
}
