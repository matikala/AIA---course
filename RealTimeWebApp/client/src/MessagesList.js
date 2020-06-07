import React from "react"


export default function MessagesList({ messages }) {
    return (
        <div className="message-list-div">
            <ul className="message-list-ul">
                {messages.map(m => <li>{m.user}: {m.message}</li>)}
            </ul>
        </div>
    )
}