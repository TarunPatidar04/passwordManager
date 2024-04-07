import React, { useRef } from "react";
const Manager = () => {
  const ref = useRef();
  const showPassword = () => {
    if (ref.current.src.includes("/public/view.png")) {
      console.log(ref.current.src);
      ref.current.src = "/public/hide.png";
    } else {
      console.log(ref.current.src);

      ref.current.src = "/public/view.png";
    }
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
            name=""
            placeholder="Enter website url"
          />
          <div className="flex w-full justify-between gap-8 ">
            <input
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              name=""
              placeholder="Enter username"
            />
            <div className="relative w-full">
              <input
                type="text"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                name=""
                placeholder="Enter Password"
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

          <button className="flex justify-center items-center bg-green-600 rounded-full px-6 py-2 w-fit gap-2 hover:bg-green-500 border-2 border-green-600">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
