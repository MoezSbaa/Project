import { useState } from "react";
import { useParams } from "react-router-dom";
import useResetPassword from "../data/mutation/authentication/useResetPassword";
const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const {mutate} = useResetPassword()

  const {id} = useParams()

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    mutate({id,password})
  };

  return (
    <main className="h-screen w-full flex items-center  justify-center flex-col">
      <div className="w-1/3 h-1/3 border-[#9dca00] border-2 rounded-lg flex items-center  justify-center flex-col p-3">
        <h1 className="text-[#9dca00] font-extrabold text-3xl">Reset Password</h1>
        <form className="  w-full flex flex-col justify-center items-center p-3" onSubmit={handleSubmit}>
          <div className="p-3 flex  justify-between w-full items-center">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="w-3/4 border-[#9dca00] border-2 rounded-lg  p-1"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="p-3 mt-1 flex justify-center w-full items-center">
            <button 
              type="submit"
              className="bg-[#9dca00] w-2/3 px-5 py-2 rounded text-white font-bold"
            >
              Confirm
            </button>
          </div>
          
        </form>
      </div>
    </main>
  );
};

export default ResetPassword;
