
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MsgArea from './MsgArea';

const Content = (props) => {
    const [currentActiveUser, setCurrentActiveUser] = useState(null);
    useEffect(() =>{
        setCurrentActiveUser(props.currentActiveUser)
    },[props])
    return (
        <>
            <div className="w-[75%] h-screen p-5 pl-0 ">
                {
                    currentActiveUser === null ?  <div className='noMsg flex flex-col items-center justify-center h-screen gap-2'>
                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757941738/chat_anjadp.png"} width={450} height={500} alt='chat Image' />
                        <h3 className='font-bold text-[25px] text-center'>Start Chatting</h3>
                        <p className='text-[18px] text-center text-gray-700'>Pick a conversation or begin a new chat</p>
                    </div> :
                     <> 
                     {
                        currentActiveUser !== null && <MsgArea currentActiveUser={currentActiveUser}/>
                     }
                    </>
                }
               

            </div>
        </>
    );
};

export default Content;