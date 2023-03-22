import useGetUsers from "../../data/queries/useGetUsers";
import Avatar from "../../assets/avatar.png"
type Props= {
  role:string
}
function UserList(props: Props) {
  const users= useGetUsers(props.role)
  const role= localStorage.getItem("role")
  return (
    <>
      <div className="h-full items-center justify-center w-full flex flex-col mt-4">
        <h2 className="text-xl font-semibold mb-4 capitalize ">{props.role} List</h2>
        <ul className="w-1/2 flex justify-center items-center">

          {users.data?.data.map((user:any)=> {
            return (
              <div key={user.id} className=" border-2 border-[#9dca00] rounded-md p-2 w-2/3 flex justify-around items-center ">
            <img src={Avatar} alt="avatar" className="h-11 w-11"/>
                <div>
                <h3>Name: {user.username}</h3>
                <h3>Email: {user.email}</h3>
                </div>
                {role === "ROLE_ADMIN"? <button className="bg-[#9dca00] p-2 rounded-lg font-bold text-white">Block</button>: null }
             </div>
            )
          })}
          
        </ul>
      </div>
    </>
  );
}

export default UserList;
