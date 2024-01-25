
"use client"

import {  useUsers } from './ContextProvider'


function ContextChild() {
    const { users } = useUsers()
    
  return (
    <ul>{
    users.map(user => {
        return <li key={user.id}>{user.name}</li>
    })
    }
    </ul>
  )
}

export default ContextChild