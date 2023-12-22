import React, { useState } from 'react'
import Menu  from './componets/Menu';
import '../src/componets/Home.css'
import Item from './Item';

const App = () => {
  const [cardData,setcardData] = useState(Item)

const filterItem =(category)=>{
  const updatelist =Item.filter((curElem)=>{
    return curElem.category === category;
  });
  setcardData(updatelist);

};



  return (
 <>
 <nav className='navbar'>
  <div className='btn-group'>
    <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>breakfast</button>
    <button className='btn-group__item'onClick={()=>filterItem("lunch")}> lunch</button>
    <button className='btn-group__item' onClick={()=>filterItem("evening")}>evening</button>
    <button className='btn-group__item' onClick={()=>filterItem("dinner")}>dinner</button>
    <button className='btn-group__item' onClick={()=>setcardData(Item)}>all</button>
  </div>
 </nav>
 <Menu  cardData={cardData}/>  
 </>




  )
}

export default App
