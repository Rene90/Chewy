import React from 'react'
let pic  = "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/04/goma-perrito-japones-famoso-instagram-11.jpg"
const Character = ({name,occupation,debt,weapon,id})=>{
    pic  = "https://i1.wp.com/www.sopitas.com/wp-content/uploads/2018/04/goma-perrito-japones-famoso-instagram-11.jpg"
    if (id ===1) pic = "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewie-What_is_a_Wookiee.png/revision/latest?cb=20150331115116"
    return(
        <div className="home-promo-card star">
            <p>Character: {name}</p>
            <img src={pic}/>
            {
                debt? 
                <button>Paga perro!</button>
                :
                <p>Felicidades estas al corriente</p>
            }

        </div>

    )
}

export default Character;