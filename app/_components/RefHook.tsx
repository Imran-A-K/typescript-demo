"use client";
import React, { useRef } from "react";

function RefHook() {
  const inputRef = useRef<HTMLInputElement>(null);
  // const value = useRef<number>();
  const value = useRef(0);
  inputRef.current?.focus()
  value.current = 10;
  
  return <input ref={inputRef} className="border-2" />;
}

export default RefHook;
