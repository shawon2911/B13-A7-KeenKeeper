import React from 'react';

const FriendsCard = ({friend}) => {
    // console.log(friend)
    const statusClassObj = {
        "on-track"   : "bg-green-800 px-3 rounded-full text-white",
        "almost due" : "bg-[#EFAD44] px-3 rounded-full text-white",
        "overdue"    : "bg-[#EF4444] px-3 rounded-full text-white",
    }
    return (
        <div className='flex flex-col justify-center items-center bg-white py-7 space-y-3 shadow-sm rounded-xl'>
            <img className='h-15 ' src={friend.picture} alt="" />
            <h2 className='font-semibold text-[20px]'>{friend.name}</h2>
            <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</p>
            <span className='flex justify-center items-center gap-2'>
            {
                friend.tags.map((tag, index) => 
                    <span key={index} className='bg-green-200  px-3 rounded-full '>{tag}</span>
                )
            }
            </span>
            <div className={statusClassObj[friend.status]}>{friend.status}</div>
        </div>
    );
};

export default FriendsCard;