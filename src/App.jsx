import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Counter'

function App() {
  const count = useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  console.log(count);

  return (
    <>
      <button className='btn  ' onClick={()=> dispatch(increment(5))}>Increment</button>
      <p className='font-bold'>{count.value}</p>
      <button className=' btn ' onClick={()=> dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
