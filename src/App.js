
import './App.css';
import React,{createContext, CreateContext,useState} from 'react';
import Count from './Count';
import Display from './Display';

export const store = createContext();

function App() {
   const [data,setData] = useState([
     {
       brandname: "Nokia"
     },
     {
      brandname: "RealMe"
     },
     {
      brandname: "MI"
     }
   ]);
  return (
    <store.Provider value={[data,setData]}>
   <center>
    <Count />
    <Display />
    <button onClick={()=> setData(data+1)}>Increament</button>
    </center>
    </store.Provider>
  );
}

export default App;
