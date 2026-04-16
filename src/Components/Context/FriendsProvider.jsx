import React, { createContext, useState } from 'react';



export const FriendsContext = createContext();

const FriendsProvider = ({children}) => {
    const [communication, setCommunication] = useState("");
    const [selectedFriend, setSelectedFriend] = useState([]);
    // const [communicationHistory, setCommunicationHistory] = useState([]);
    

    const handleCommunication = (target,type) => {
        // console.log(target,type, "clicked");


        const updatedfriend = {
            ...target,
            type : type,
            time: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        }
        // setCommunication(type);
        setSelectedFriend(prev => [...prev, updatedfriend]);
        
        // const newEntry = {
        //     friend : selectedFriend.name,
        //     type : communication,
        //     time : new Date().toLocaleString("en-US", {
        //             year: "numeric",
        //             month: "long",
        //             day: "numeric",
        //             }),
        // }
        
    }
    
    


    const data = {
        communication,
        setCommunication,
        selectedFriend,
        setSelectedFriend,
        // communicationHistory,
        // setCommunicationHistory,
        
        handleCommunication,
    }
    
    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>;
};

export default FriendsProvider;