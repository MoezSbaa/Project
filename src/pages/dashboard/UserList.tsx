import useGetUsers from "../../data/queries/useGetUsers";
import Avatar from "../../assets/avatar.png"
import useBlock from "../../data/mutation/block/useBlock";

type Props = {
    role: string
}

function UserList(props: Props) {
    const users = useGetUsers(props.role)
    const {mutate} = useBlock()

    const role = localStorage.getItem("role")

    const onBlock = (username: string) => mutate(username)
    return (
        <>
            <div className="h-full items-center justify-center w-full flex flex-col mt-4">
                <h2 className="text-xl font-semibold mb-4 capitalize ">{props.role} List</h2>
                <ul className=" sm:w-full md:w-1/3 flex justify-center w-full items-center">

                    {users.data?.data.map((user: any) => {
                        return (
                            <div key={user.id}
                                 className=" border-2 border-[#9dca00] rounded-md p-2 w-2/3 flex flex-wrap justify-around items-center ">
                                <img src={Avatar} alt="avatar" className="h-11 w-11"/>
                                <div>
                                    <h3>Name: {user.username}</h3>
                                    <h3>Email: {user.email}</h3>
                                </div>
                                {role === "ROLE_ADMIN" ? <button
                                    onClick={() => onBlock(user.username)}
                                    className={`${user.isBanned ? 'bg-red-600' : 'bg-[#9dca00]'} p-2 rounded-lg font-bold text-white`}>{user.isBanned ? 'UnBlock' : 'Block' }</button> : null}
                            </div>
                        )
                    })}

                </ul>
            </div>
        </>
    );
}

export default UserList;
