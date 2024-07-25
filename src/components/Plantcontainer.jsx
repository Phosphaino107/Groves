import React from 'react'
import "../styles/plant.css"


const Plantcontainer = ({data}) => {

  
  return (
    <section className={`plantcont ${data.hasbg ? "hasbg" : ''}`}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
     

        <div className="plants">
            {data.plants.map(plant => (
                <div key={plant.id} className="plant">
                    <img src={plant.image} alt="" />
                    <h3>{plant.title}</h3>
                    <p>{plant.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Plantcontainer