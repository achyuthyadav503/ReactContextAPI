import React,{useContext} from 'react'
import { store } from './App'
const ComponentB = () => {
    const [data,setData] = useContext(store);
  return (
    <div className="card">
    <div className="card-body">
    <div>ComponentB {data}</div>
    </div>
    </div>
  )
}

export default ComponentB