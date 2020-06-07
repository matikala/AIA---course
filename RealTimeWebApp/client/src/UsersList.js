import React from "react"


export default function UsersList({ users }) {
    return (
        <div>
            <h3>Active users</h3>
            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </div>
    )
}