import React, { useState } from "react";
import NavBar from "../../Layout/NavBar";
import useAccount from "../../data/queries/authentication/useAccount";
import useUpdateProfile from "../../data/mutation/profile/useUpdateProfile";
import useDeleteAccountMutation from "../../data/mutation/authentication/useDeleteAccount";

function Profile() {
  const { data } = useAccount();

  const [username, setUsername] = useState(data?.username);
  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState(data?.adress);
  const [gender, setGender] = useState(data?.gender);
  const [phone, setPhone] = useState(data?.phone);
  const [speciality, setSpeciality] = useState(data?.specialite);

  const { mutate } = useUpdateProfile();
 const {mutate:deleteUser} = useDeleteAccountMutation();
  const onUpdate = (e: any) => {
    if (data?.roles[0].name === "coach") {
      mutate({
        username,
        name,
        email,
        password,
        address,
        gender,
        phone,
        speciality,
      });

      return;
    }
    mutate({
      username,
      name,
      email,
      password,
      address,
      gender,
      phone,
    });
  };
  const onDelete = (e:any) => {
    deleteUser({})
  }

  return (
    <>
      <NavBar />
      <div>
        <div className="bg-gray-100 h-screen">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <h1 className="text-3xl font-bold text-gray-800">Profile Page</h1>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    User Information
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Personal details and application.
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="image"
                      >
                        Image
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        placeholder="Image"
                      />
                    </div>
                    {data?.roles[0]?.name === "coach" && (
                      <>
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="cv"
                          >
                            CV
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cv"
                            type="file"
                          />
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="speciality"
                          >
                            Speciality
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="speciality"
                            type="text"
                            value={speciality}
                            onChange={(e) => setSpeciality(e.target.value)}
                            placeholder="Speciality"
                          />
                        </div>
                      </>
                    )}
                  </dl>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                    <button
                      onClick={onDelete}
                      className="bg-red-600 px-5 py-2 rounded text-white font-bold"
                    >
                      Delete
                    </button>
                    <button
                      onClick={onUpdate}
                      className="bg-yellow-300 px-5 py-2 rounded text-white font-bold"
                    >
                      Deactivate
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={onUpdate}
                className="bg-[#9dca00] px-5 py-2 rounded text-white font-bold"
              >
                Save
              </button>
              <button
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                type="reset"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
