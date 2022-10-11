import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import {FaMinus, FaPlus} from "react-icons/fa"

import "./Counter.css"

const Counter = () => {
  const {count , increase ,decrease} = useContext(MyContext)
  return (
    <div  className='counter'>
            <button onClick={()=>decrease(count)} ><i><FaMinus/></i></button>

      <p>{count}</p>
      <button onClick={()=>increase(count)} ><i><FaPlus/></i></button>

    </div>
  )
}

export default Counter