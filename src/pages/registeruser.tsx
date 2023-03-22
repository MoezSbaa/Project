import React, { useState } from "react";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

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
        className="border-2 border-[#9dca00] p-3 rounded-xl w-1/2 flex flex-col justify-around h-1/2"
      >
        <div className="flex justify-around items-center">
          <h1 className="text-3xl font-bold text-[#9dca00]">Registration</h1>
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="gender" className="ml-[-60px]">Gender:</label>
          <div className="flex justify-around items-center w-24">
            <label htmlFor="gender">Male</label>
            <input
              type="radio"
              id="gender"
              value="male"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex justify-around w-24 items-center">
            <label htmlFor="gender">Female</label>
            <input
              type="radio"
              id="gender"
              value="female"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" border-2 border-[#9dca00] p-2 rounded-md w-2/3"
          />
        </div>
        <div className="flex justify-around items-center">
          <button
            className="bg-[#9dca00] py-2 px-3 w-1/3 text-white rounded-md"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
