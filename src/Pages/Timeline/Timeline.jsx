import React, { useContext } from 'react';
import { FriendsContext } from '../../Components/Context/FriendsProvider';
import HistoryCard from './HistoryCard';

const Timeline = () => {
    const {selectedFriend} = useContext(FriendsContext);
    // console.log(selectedFriend );
    return (
        <div className='bg-[#F8FAFC]'>
           <div className='max-w-7xl mx-auto py-10'>
            <h2 className='font-bold text-[48px] text-[#1F2937]'>Timeline</h2>
            {
                selectedFriend.map(friend => <HistoryCard key={friend.id} friend={friend}></HistoryCard>)
            }

           </div>
        </div>
    );
};

export default Timeline;