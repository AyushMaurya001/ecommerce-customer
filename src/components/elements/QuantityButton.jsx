import React, { useState } from 'react'
import { Description } from '.';

export default function QuantityButton({ quantity, setQuantity }) {

  return (
    <div className=' flex justify-center items-center gap-2 p-1'>
      <Description description={`Quantity:`} classname={` text-primary p-1`} />
      <div className=' flex justify-center items-center border border-border rounded-md'>
        <button onClick={() => quantity>1 ? setQuantity(i => i-1) : null} className=' px-4 p-2'>-</button>
        {quantity}
        <button onClick={() => setQuantity(i => i+1)}  className=' px-4 p-2'>+</button>
      </div>
    </div>
  )
}
