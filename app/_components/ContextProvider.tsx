"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import type {ReactNode } from 'react'
type User = {
    id: string,
    name: string,
    age: number
}
type ContextType = {
  users: User[],
  addUser: ({ name, age  } : {  name: string,  age: number }) => void
}
export const Context = createContext<ContextType | null>(null)

export function useUsers(){
  const usersContext = useContext(Context)
  if(usersContext === null){
    throw new Error("Must use within provider")
  }
  return usersContext
}

function ContextProvider( { children } : { children : ReactNode} ) {
  
  const [users, setUsers] = useState<User[]>([])
  
  function addUser({ name, age } : { name: string, age: number }){
setUsers(prevUsers => {
  return [...prevUsers, {id : crypto.randomUUID(), name, age}]
})
  }
  useEffect(()=>{
    getUsers().then(setUsers)
  },[])

  return (
    <Context.Provider value={{users, addUser}}> { children }</Context.Provider>
  )
} 

async function getUsers(){
  return Promise.resolve([
    {id:crypto.randomUUID(),name:"John Doe",age:32},
    {id:crypto.randomUUID(),name:"Mike Doe",age:35},
    {id:crypto.randomUUID(),name:"Sam Doe",age:39},
  ])
}
export default ContextProvider