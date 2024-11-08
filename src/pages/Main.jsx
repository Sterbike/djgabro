import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Events from "../Components/Events";
import Contact from "../Components/Contact";

const Main = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [links, setLinks] = useState({})
  const [isloading, setIsloading] = useState()

  const renderContent = () => {
    switch (selectedMenu) {
      case 0:
        return <Events />;
      case 1:
        return <Contact data={links} />;
      default:
        return <Events />;
    }
  };

  useEffect(() => {
    setIsloading(true)
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hiba a JSON fájl lekérésekor.");
        }
        return response.json();
      })
      .then((data) => {
        setLinks(data)
      })
      .catch((error) => {
        console.error("Hiba történt a lekérés során:", error);
      }).finally(()=>{
        setIsloading(false)
      });
  }, []);

  return (
    <div className="bg-[url('../public/data/hatter.png')] bg-cover bg-center h-screen">
      <div className="text-white font-saira">
        <div className="text-center">
          <img
            onClick={() => setSelectedMenu(0)}
            src="/data/logo_white.png"
            alt="logo_white"
            className="lg:w-1/4 md:w-3/6 w-10/12 h-max m-auto lg:pt-14 pt-24 py-6 cursor-pointer"
          />
          <div
            id="link_container_lg"
            className="hidden md:flex text-2xl gap-3 w-3/4 mt-1 m-auto justify-center items-center "
          >
            <a
              className={`hover:text-slate-400 cursor-pointer transition-all active:text-xl ${
                selectedMenu === 0 ? "underline" : ""
              }`}
              onClick={() => setSelectedMenu(0)}
            >
              Események
            </a>
            
            <a className="hover:text-slate-400 transition-all active:text-xl" href={links.Instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-slate-400 transition-all active:text-xl" href={links.Facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="hover:text-slate-400 transition-all active:text-xl" href={links.Youtube} target="_blank" rel="noreferrer">
              Youtube
            </a>
            <a className="hover:text-slate-400 transition-all active:text-xl" href="" target="_blank" rel="noreferrer">
              Press
            </a>
            <a
              className={`hover:text-slate-400 cursor-pointer transition-all active:text-xl ${
                selectedMenu === 1 ? "underline" : ""
              }`}
              onClick={() => setSelectedMenu(1)}
            >
              Kapcsolat
            </a>
          </div>
          <div id="link_container_sm">
            <Dropdown links={links} onSelectMenu={setSelectedMenu} />
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Main;
