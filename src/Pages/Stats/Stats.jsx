import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../Components/Context/FriendsProvider";

const Stats = () => {

    const {selectedFriend} = useContext(FriendsContext);
    // console.log(selectedFriend);
    const textList = selectedFriend.filter(t => t.type === "text");
    // console.log(textList);
    const callList = selectedFriend.filter(c => c.type === "call");
    const videoList = selectedFriend.filter(v => v.type === "video");



    const data = [
        {name:"Text", value: textList.length, fill:"#7E35E1" },
        {name:"Call", value: callList.length, fill:"#244D3F" },
        {name:"VIdeo", value: videoList.length, fill:"#37A163" },
        
    ]
  return (
    <div className="bg-[#F8FAFC] ">
      <div className="max-w-7xl mx-auto py-10 md:py-30">
        <h2 className="font-bold text-[48px] text-[#1F2937] px-4 md:px-0">
          Friendship Analytics
        </h2>
        <div className="bg-white shadow-sm rounded-lg p-10 mt-5">
          <h3 className="font-medium text-[20px] text-[#244D3F] mb-8 md:mb-5">
            By Interaction Type
          </h3>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "350px",
              maxHeight: "80vh",
              margin: "auto",
              paddingBottom:"30px",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
            
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
