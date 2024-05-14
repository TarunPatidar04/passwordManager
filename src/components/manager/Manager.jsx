import React, { useEffect, useRef, useState } from "react";
const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let password = localStorage.getItem("password");
    let passwordArray;
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type="text";
    if (ref.current.src.includes("/public/view.png")) {
      ref.current.src = "/public/hide.png";
      passwordRef.current.type="password";
    } else {
      ref.current.src = "/public/view.png";
      passwordRef.current.type="text";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="bg-slate-50 mycontainer">
        <h1 className="text-4xl font-bold text-center">
          {" "}
          <span className="text-green-700"> &lt;</span>
          Pass
          <span className="text-green-700">OP/ &gt;</span>
        </h1>
        <p className="text-green-900  text-center text-lg">
          Your own Password Manager
        </p>
        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            type="text"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            name="site"
            placeholder="Enter website url"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex w-full justify-between gap-8 ">
            <input
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              name="username"
              placeholder="Enter username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative w-full">
              <input
                type="password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                ref={passwordRef}
              />
              <span
                className="absolute right-[4px] top-[5px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  src="/public/view.png"
                  alt=""
                  className="p-1"
                  width={24}
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-600 rounded-full px-6 py-2 w-fit gap-2 hover:bg-green-500 border-2 border-green-600"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">YourPasswords</h2>

          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full  rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-2 border border-white text-center w-32">
                        <a href={item.site} target="_blank">{item.site}</a>
                      </td>
                      <td className=" py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className=" py-2 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
