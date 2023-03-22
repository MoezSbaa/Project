import React, { useState } from "react";
import {Link, matchPath, useLocation} from "react-router-dom";
import {UnauthorizedPaths} from "../navigation/paths";
import useAccount from "../data/queries/authentication/useAccount";
import useSignUp from "../data/mutation/authentication/useSignUp";

const Register = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");

  const {pathname} = useLocation();
  const {mutate: signUp} = useSignUp()

  const profileType = matchPath(UnauthorizedPaths.registerUser, pathname ) ? 'user' : 'coach'


  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (profileType === 'user') {
      signUp({
        username,
        name,
        email,
        password,
        address,
        gender,
        phone,
      })
      return;
    }

    signUp({
      username,
      name,
      email,
      password,
      address,
      gender,
      phone,
      speciality
    })

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        console.log("User registered successfully");
      } else {
        console.log("Failed to register user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-[#9dca00] p-3 rounded-xl md:w-1/2 flex flex-col justify-around h-1/2 m-2"
      >
        <div className="flex justify-around items-center flex-wrap">
          <h1 className="text-3xl font-bold text-[#9dca00]">Registration</h1>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center   flex-wrap">
          <label htmlFor="gender" className="">Gender:</label>
         <div className='flex gap-1 w-2/3'>
           <div className="flex justify-around items-center w-24 ">
             <label htmlFor="male">Male</label>
             <input
                 type="radio"
                 id="male"
                 name='gender'
                 value="male"
                 onChange={(e) => setGender(e.target.value)}
             />
           </div>

           <div className="flex justify-around items-center w-24 ">
             <label htmlFor="female">Female</label>
             <input
                 type="radio"
                 id="female"
                 name='gender'
                 value="female"
                 onChange={(e) => setGender(e.target.value)}
             />
           </div>
         </div>
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center flex-wrap">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center flex-wrap ">
          <label htmlFor="image">Image</label>
          <input type="file" id="image"  />
        </div>
        {
          profileType == 'coach' && (
              <>
                <div className="flex justify-around items-center flex-wrap">
                  <label htmlFor="speciality">Speciality:</label>
                  <input
                      type="text"
                      id="speciality"
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                      className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
                  />
                </div>
                <div className="flex justify-around items-center flex-wrap">
                  <label htmlFor="cv">CV</label>
                  <input type="file" id="cv"  />
                </div>
              </>
            )
        }
        <div className="flex justify-around items-center flex-wrap">
          <button
            className="bg-[#9dca00] py-2 px-3 w-1/3 text-white rounded-md"
            type="submit"
          >
            Register
          </button>
          <Link to={UnauthorizedPaths.login} className="bg-gray-500 py-2 px-3 w-1/3 text-white text-center rounded-md">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
