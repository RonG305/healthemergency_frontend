import React, { lazy, Suspense, useState } from "react";

import Loader from "../components/Loader";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  const Sidebar = lazy(() => import("../components/Sidebar"));
  const Emergency = lazy(() => import("../components/Emergency/Emergency"))

  const [showSidebar, setShowSidebar] = useState(true)

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <Suspense  fallback={<Loader />}>
      <div className=" text-sm ">
        <Sidebar 
            showSidebar={showSidebar}
            handleShowSidebar={handleShowSidebar}
             />
        
        <div className={` ${showSidebar ? "md:ml-52" : "ml-0"} `}>
        <Navbar handleShowSidebar={handleShowSidebar} />
        <div className=" pt-[70px]">
        <Routes>
            <Route path="/emergencies" Component={Emergency} />
        </Routes>
        </div>
       
        </div>
      </div>
    </Suspense>
  );
};

export default Main;
