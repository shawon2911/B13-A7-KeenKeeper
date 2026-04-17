import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsCameraReelsFill } from 'react-icons/bs';
import { IoIosCall } from 'react-icons/io';

const HistoryCard = ({friend}) => {
    // console.log(friend);
    // console.log(selectedFriend);
    // console.log(length);
    
    
    
    return (
        <div className='bg-white flex justify-start items-center gap-5 mt-7 py-3 px-6 rounded-sm shadow-md'>
        <div>
            {
              (friend.type === "call" ? <IoIosCall className='text-3xl font-' /> : friend.type === "text" ? <AiOutlineMessage className='text-3xl font-' /> : <BsCameraReelsFill className='text-3xl font-' />)
            }
        </div>

        <div>
            <h3><span className='font-medium text-[20px] text-[#244D3F]'>{friend.type}</span> with <span className='text-[18px] text-[#64748B]'>{friend.name}</span></h3>
            <p className='text-[16px] text-[#64748B]'>{friend.time}</p>
        </div>
        </div>
);
        
        
};

export default HistoryCard;