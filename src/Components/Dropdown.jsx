import React, { useState } from "react";

const Dropdown = ({ onSelectMenu, links }) => {
  const [isVisibleDropdownMenu, setIsVisibleDropDownMenu] = useState(false);

  return (
    <div className="md:hidden absolute top-0 h-max">
      <button
        className="relative group z-20 left-1"
        onClick={() => setIsVisibleDropDownMenu(!isVisibleDropdownMenu)}
      >
        <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[70px] h-[40px] transform border transition-all bg-slate-700 duration-200 shadow-md">
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
              isVisibleDropdownMenu ? "group-focus" : ""
            }`}
          >
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                isVisibleDropdownMenu ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                isVisibleDropdownMenu ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 ${
                isVisibleDropdownMenu ? "translate-x-10" : ""
              }`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                isVisibleDropdownMenu ? "translate-x-0 flex w-12" : "w-0"
              }`}
            >
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                  isVisibleDropdownMenu ? "rotate-45" : ""
                }`}
              ></div>
              <div
                className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                  isVisibleDropdownMenu ? "-rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
      {isVisibleDropdownMenu ? (
        <div
          onClick={() => setIsVisibleDropDownMenu(false)}
          className="absolute bg-black h-screen w-screen top-0 opacity-30"
        ></div>
      ) : null}
      <div
        id="link_container_lg"
        className={`flex flex-col text-2xl w-72 h-screen m-auto bg-slate-700 shadow-xl shadow-black rounded-xl p-3 absolute left-0 top-0 pt-14 transition-all duration-200 ease-in-out ${
          isVisibleDropdownMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          onClick={() => {
            onSelectMenu(0);
            setIsVisibleDropDownMenu(false);
          }}
          className="py-2 cursor-pointer hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl"
        >
          Események
        </a>

        <hr />
        <a
          href={links.Instagram}
          className="py-2 hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <hr />
        <a
          href={links.Facebook}
          className="py-2 hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <hr />
        <a
          href={links.Youtube}
          className="py-2 hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          Youtube
        </a>
        <hr />
        <a href="" className="py-2 hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl" target="_blank" rel="noreferrer">
          Press
        </a>
        <hr />
        <a
          onClick={() => {
            onSelectMenu(1);
            setIsVisibleDropDownMenu(false);
          }}
          className="py-2 hover:bg-slate-600 transition-all active:text-xl hover:rounded-xl cursor-pointer"
        >
          Kapcsolat
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
