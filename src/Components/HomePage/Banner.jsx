import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto pt-5 md:pt-15 pb-8 border-b border-gray-200">
        <div className="text-center space-y-6 py-5">
          <h2 className="font-bold text-[48px] text-[#1F2937]">
            Friends to keep close in your life
          </h2>
          <p className="text-[16px] text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br />
            relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white rounded-sm py-6">
            + Add a Friend
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 py-5 px-5 lg:px-0">
            <div className="text-center bg-white py-10 shadow-sm rounded-xl">
                <h3 className="font-semibold text-[32px] text-[#244D3F]">10</h3>
                <p className="text-[18px] text-[#64748B]">Total Friends</p>
            </div>
            <div className="text-center bg-white py-10 shadow-sm rounded-xl">
                <h3 className="font-semibold text-[32px] text-[#244D3F]">3</h3>
                <p className="text-[18px] text-[#64748B]">On Track</p>
            </div>
            <div className="text-center bg-white py-10 shadow-sm rounded-xl">
                <h3 className="font-semibold text-[32px] text-[#244D3F]">6</h3>
                <p className="text-[18px] text-[#64748B]">Need Attention</p>
            </div>
            <div className="text-center bg-white py-10 shadow-sm rounded-xl">
                <h3 className="font-semibold text-[32px] text-[#244D3F]">12</h3>
                <p className="text-[18px] text-[#64748B]">Interactions This Month</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Banner;
