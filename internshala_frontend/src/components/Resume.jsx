import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Resume } from "../store/Actions/resumeActions";
import { RiArrowLeftLine, RiBookmarkLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import Studentdropdown from "./StudentDropdown";

const Resume = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [ShowDropdown, setShowDropdown] = useState(false);

  const opendropdown = () => {
    setShowDropdown(true);
  };
  const closedropdown = () => {
    setShowDropdown(false);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  //   const dispatch = useDispatch();
  //   const resume = useSelector((state) => state.resume.data);
  //   console.log(resume);
  //   useEffect(() => {
  //     dispatch(Resume());
  //   }, [dispatch]);

  //   if (!resume) {
  //     return (
  //       <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
  //         <img
  //           className="w-[20%]"
  //           src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
  //           alt=""
  //         />
  //         Loading...
  //       </div>
  //     );
  //   }
  return (
    <>
      {ShowDropdown && <Studentdropdown onClose={closedropdown} />}
      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img className="w-[15%] ml-[20vh]" src="/images/logo.jpeg" alt="" />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl">Internships</h3>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <h3 className="text-2xl">Jobs</h3>
        </div>
        <div className="flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <RiBookmarkLine
            size={20}
            className="mt-1"
            color="#1a1a1aa8" // set custom `width` and `height`
          />
        </div>
        <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
        <button onClick={opendropdown}><img
              className="h-16 w-16 object-cover rounded-full"
              src=""
              alt=""
            /></button>
        </div>
      </div>
      <div className="flex px-[90px] text-sky-500 font-semibold gap-5 items-center ml-[10vh] mt-[5vh] text-2xl ">
        <RiArrowLeftLine size={20} />
        <Link to={-1}>Go back</Link>
      </div>
      <div className="flex justify-center items-center text-[#151515d2] text-5xl font-semibold w-full h-[10vh] bg-red-400  ">
        Resume
      </div>
      <div className=""></div>
      {showLogin && <Login onClose={handleLoginClose} />}
    </>
  );
};

export default Resume;
