import React, { useContext, useState } from "react";
import { FriendsContext } from "../../Components/Context/FriendsProvider";
import HistoryCard from "./HistoryCard";
import { IoIosArrowDown } from "react-icons/io";

const Timeline = () => {
  const { selectedFriend } = useContext(FriendsContext);
  // console.log(selectedFriend );
  const [sortingType, setSortingType] = useState("");
  let filteredFriend = selectedFriend;

  if(sortingType === "call"){
    filteredFriend = selectedFriend.filter(c => c.type === "call");
  }
  else if(sortingType === "text"){
    filteredFriend = selectedFriend.filter(t => t.type === "text");
  }
  if(sortingType === "video"){
    filteredFriend = selectedFriend.filter(v => v.type === "video");
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="font-bold text-[48px] text-[#1F2937] px-4 md:px-0">
          Timeline
        </h2>

        <div className="dropdown dropdown-start mt-5 mb-8">
          <div tabIndex={0} role="button" className="btn m-1">
           <h4 className="text-[18px] text-[#64748B]">Filter Timeline</h4>
           <IoIosArrowDown />

          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={()=> setSortingType("")}>
              <a>All</a>
            </li>
            <li onClick={()=> setSortingType("call")}>
              <a>Call</a>
            </li>
            <li onClick={()=> setSortingType("text")}>
              <a>Text</a>
            </li>
            <li onClick={()=> setSortingType("video")}>
              <a>Video</a>
            </li>
          </ul>
        </div>

        {filteredFriend.length === 0 ? (
          <h2 className="font-bold text-2xl text-center pt-35">
            No Communication History Found
          </h2>
        ) : (
          filteredFriend.map((friend) => (
            <HistoryCard key={friend.id} friend={friend} ></HistoryCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
