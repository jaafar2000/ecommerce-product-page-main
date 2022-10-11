import { useState } from "react";
import  {createContext}  from "react";

export const MyContext = createContext();

const MyContextProvider = (props)=>{
  
  const [count  , setCount] = useState(0)

  const increase = ()=>{
    setCount(count => count + 1)
  }
  
  const decrease = ()=>{
    if (parseInt(count) === 0 ){
      return null
     }else{
      setCount(count => count - 1)

    }
  }
  const value = {count ,setCount, increase ,decrease}
  return (
    <MyContext.Provider value={value} >
      {props.children}
    </MyContext.Provider>
  )
}

export default MyContextProvider