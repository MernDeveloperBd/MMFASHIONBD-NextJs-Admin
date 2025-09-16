"use client"
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

const Chat = () => {
    const [currentActiveUser, setCurrentActiveUser] = useState(null);
    
    const activeUser = (user, index) => {
        setCurrentActiveUser(user)
    }
    return (
        <section className='bg-white z-[1000] w-full h-screen fixed top-0 left-0 flex gap-8'>
            <Sidebar activeUser={activeUser} />
            <Content currentActiveUser={currentActiveUser} />
        </section>
    );
};

export default Chat;