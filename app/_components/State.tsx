"use client"
import React, { useState } from 'react'

function State() {
    const [value, setValue] = useState("type inference")
    // const [value, setValue] = useState<string>()
    const [numberArray, setNumberArray] = useState<number[]>()
  return (
    <input type="text" value={value} onChange={e => setValue(e.target.value)} className='border-2 border-blue-600' />
  )
}

export default State