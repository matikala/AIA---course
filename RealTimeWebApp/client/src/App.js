import React, { useState, useEffect } from "react"
import io from "socket.io-client";
import Input from "./Input"
import MesssagesList from './MessagesList'
import UsersList from './UsersList'
const socket = io("http://localhost:3000")

export default function App() {
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [isRegistered, setRegistered] = useState(false)

  useEffect(() => {
    socket.on('message', data => setMessages(m => [...m, data]))
    socket.on('users', users => setUsers(users))
    socket.on('registration complete', () => setRegistered(true))
  }, [])

  const send = message => socket.emit('message', message)

  const register = user => socket.emit('register-user', user)

  return (
    <div>
      {!isRegistered
        ? 
        <div id="register-div">
          <Input send={register} buttonText="Enter chat" />
        </div>
        :
        <div id="main-div">
          <div id="messages-div">
            <MesssagesList messages={messages} />
            <Input send={send} buttonText="Send" />
          </div>
          <div id="users-div">
            <UsersList users={users} />
          </div>
        </div>
      }
    </div>
  )
}