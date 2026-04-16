import React, { use } from 'react';
import FriendsCard from './FriendsCard';


const friendsPromise = fetch("/friends.json").then(res => res.json());
// console.log(friendsPromise)

const AllFriends = () => {
    const friends = use(friendsPromise);
    // console.log(friends)
    return (
        <div className='bg-[#F8FAFC] py-7'>
            <div className='max-w-7xl mx-auto'>
                <h3 className='font-semibold text-[24px] text-[#1F2937] mx-5 lg:mx-0'>Your Friends</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-5 mx-5 lg:mx-0'>
                    {
                        friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default AllFriends;