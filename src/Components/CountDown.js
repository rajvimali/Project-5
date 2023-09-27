import React, { useState } from 'react'

const CountDown = () => {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [input, setInput] = useState('Enter Number')

  if (isActive && count > 0) {
    setTimeout(function () {
      setCount(count - 1)
    }, 1000)
  }

  const handleClick = () => {
    setIsActive(true)
    setCount(input)
  }

  return (
    <>
      <center>
        <input className='mt-3 py-1 mb-2' type="number" placeholder='Enter any number' value={input} onChange={(e) => setInput(e.target.value)} /><br/>
        <h1 className='fs-2'>{count}</h1>
        <button className='px-3 fs-5 bg-secondary text-white border-0 text-center py-2 rounded ' onClick={handleClick}>start</button>
        <button className='px-3 fs-5 bg-danger text-white border-0 text-center py-2 rounded ms-3' onClick={() => setIsActive(false)}>stop</button>
      </center>

    </>
  )
}

export default CountDown