import React from 'react'
const pic  = "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/04/goma-perrito-japones-famoso-instagram-11.jpg"
const Promo = ({id,name,price})=>{
    return(
        <div className="home-promo-card">
            <h2>{name}</h2>
            <img alt="iamgen"src={pic}/>
            <p>${price}MXN</p>
        </div>
    )
}

export default Promo;