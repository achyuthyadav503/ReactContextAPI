import React,{useContext} from 'react'
import { store } from './App'

const Count = () => {
    const [data,setData] = useContext(store);
  return (
    <div className="card">
    <div className="card-body"> 
    <div className="card-title">Count : {data.length}</div>
    </div>
    </div>
  )
}

export default Count