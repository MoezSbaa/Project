import axios from "axios"
import { useQuery } from "react-query"

const useGetUsers = (role:string) => {
  return useQuery({
    queryKey : ["users",role],
    queryFn: ()=> {return axios.get(`http://localhost:8008/api/user/${role}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })}
  })
  
}

export default useGetUsers