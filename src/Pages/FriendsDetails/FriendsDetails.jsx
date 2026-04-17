import React, { useContext } from "react";
import { BiBellMinus } from "react-icons/bi";
import { BsArchive } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdDelete, MdTextsms } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { FriendsContext } from "../../Components/Context/FriendsProvider";

const FriendsDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const friends = useLoaderData();
  // console.log(friends);
  const targetFriends = friends.find((friend) => friend.id == id);
  // console.log(targetFriends);
  const {handleCommunication} = useContext(FriendsContext);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = targetFriends;

  const statusClassObj = {
    "on-track": "bg-green-800 px-3 rounded-full text-white",
    "almost due": "bg-[#EFAD44] px-3 rounded-full text-white",
    overdue: "bg-[#EF4444] px-3 rounded-full text-white",
  };



  return (
    <div className="bg-[#F8FAFC]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5   max-w-7xl mx-auto py-8 md:py-25">
        <div className="col-span-1 space-y-5 mb-10 md:mb-0">
          <div className="flex flex-col justify-center items-center bg-white py-7 space-y-3 shadow-md rounded-xl">
            <img className="h-15 " src={picture} alt="" />
            <h2 className="font-semibold text-[20px]">{name}</h2>
            <div className={statusClassObj[status]}>{status}</div>
            <span className="flex justify-center items-center gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-green-200  px-3 rounded-full ">
                  {tag}
                </span>
              ))}
            </span>
            <p className="font-medium text-[16px] text-[#64748B] px-3 md:px-0 ml-2 md:ml-0">"{bio}"</p>
            <p className="text-[14px] text-[#64748B]">Prefered : {email}</p>
          </div>
          <div className="flex justify-center items-center gap-3 bg-white shadow-md rounded py-3  font-medium text-[16px] text-[#1F2937]">
            <BiBellMinus />
            <p>Snooze 2 Weeks</p>
          </div>
          <div className="flex justify-center items-center gap-3 bg-white shadow-md rounded py-3  font-medium text-[16px] text-[#1F2937]">
            <BsArchive />
            <h3>Archive</h3>
          </div>
          <div className="flex justify-center items-center gap-3 bg-white shadow-md rounded py-3  font-medium text-[16px] text-[#EF4444]">
            <MdDelete />
            <h3>Delete</h3>
          </div>
        </div>

        <div className="col-span-2 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="text-center bg-white py-5 md:py-10 shadow-sm rounded-xl mx-7 md:mx-0">
              <h3 className="font-semibold text-[32px] text-[#244D3F]">
                {days_since_contact}
              </h3>
              <p className="text-[18px] text-[#64748B]">Days Since Contact</p>
            </div>
            <div className="text-center bg-white py-5 md:py-10 shadow-sm rounded-xl mx-7 md:mx-0">
              <h3 className="font-semibold text-[32px] text-[#244D3F]">
                {goal}
              </h3>
              <p className="text-[18px] text-[#64748B]">Goal (Days)</p>
            </div>
            <div className="text-center bg-white py-5 md:py-10 shadow-sm rounded-xl mx-7 md:mx-0">
              <h3 className="font-semibold text-[32px] text-[#244D3F]">
                {next_due_date}
              </h3>
              <p className="text-[18px] text-[#64748B]">Next Due</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-xl py-5 px-6">
            <span className="flex justify-between items-center">
              <h3 className="font-medium text-[20px] text-[#244D3F]">
                Relationship Goal
              </h3>
              <button className="btn">Edit</button>
            </span>
            <p className="text-[18px] text-[#64748B]">
              Connect every{" "}
              <span className="font-bold text-[18px] text-[#1F2937]">
                {goal} days
              </span>
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-xl pt-8 pb-8 px-6">
            <h3 className="font-medium text-[20px] text-[#244D3F]">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-5 mt-4">
              <button onClick={()=>handleCommunication(targetFriends, "call" )} className=" bg-[#F8FAFC] flex flex-col justify-center items-center py-5 rounded-xl cursor-pointer hover:shadow-md transition">
                <FiPhoneCall className="font-extrabold text-2xl text-[#1F2937]"></FiPhoneCall>
                <p className="text-[18px] text-[#1F2937]">Call</p>
              </button>
              <button onClick={()=>handleCommunication(targetFriends, "text")} className="bg-[#F8FAFC] flex flex-col justify-center items-center py-5 rounded-xl cursor-pointer hover:shadow-md transition">
                <MdTextsms className="font-extrabold text-2xl text-[#1F2937]" />
                <p className="text-[18px] text-[#1F2937]">Text</p>
              </button>
              <button onClick={()=>handleCommunication(targetFriends, "video")} className="bg-[#F8FAFC] flex flex-col justify-center items-center py-5 rounded-xl cursor-pointer hover:shadow-md transition">
                <GoDeviceCameraVideo className="font-extrabold text-2xl text-[#1F2937]" />
                <p className="text-[18px] text-[#1F2937]">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
