import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, {useEffect, useState} from 'react';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./Chat.css"
import { useParams } from 'react-router-dom';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, []);


    const sendMessage = (e) => {
        e.preventDefault();
        console.log("typed: ", input);
        setInput("");
    };

    return (
        <div className="chat">
             <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}/>
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Lasst seen At ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className={`chat_message ${ true && "chat_reviever"}`}>
                    <span className="chat_name">Carlos</span>
                    Hey guys
                    <span className="chat_timestamp">3:52pm</span>
                </p>

                
                
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                   <input type="text" placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)}/> 
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
