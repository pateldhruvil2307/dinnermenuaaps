import React from "react"



const Menu =({cardData})=>{
    console.log(cardData)
    return (
<>
   <section className="main-card--cointainer">
    {
        cardData.map((curElem)=>{
            return(
                <div className=" card-container" key={curElem.id}>
        <div className="card">
        <div className="card-body">
            <span className="card-number card-circle subtle"> {curElem.id}</span>
            <span className="card-author sublte">{curElem.category}</span>
            <h2 className="card-title">{curElem.name}</h2>
            <span className="card-description sublte">
            {curElem.description}
            </span>
            <div className="card-read"> Read</div>
        </div>
        <img src={curElem.image} alt="" className="card-media" />
        <span className="card-tag subtle">order now</span>
    </div>
    </div>
    
)       
} )}

</section>

</>
    )
}

export default Menu;