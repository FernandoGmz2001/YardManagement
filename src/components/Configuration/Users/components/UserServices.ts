import { User } from "@/types/user"

// const URL = import.meta.env.URL
export const UserServices = () => {

  const postUser = async (user: User) => {
    try {
      const response = await fetch(`http://localhost:3020/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)

      })
      console.log(user)
      const data = await response.json()
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }

  return { postUser }
}
