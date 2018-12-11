import React, {Component} from 'react'
import Promo from './Promo';
import Character from './Character';
import "./home.css";
import axios from 'axios';

class Home extends Component{
    state = {
        items:[
            {
                id:1,
                name:"Rene",
                price:20
            
            },
            {
                id:2,
                name:"cocina",
                price:22
            }
        ]
    }
    componentWillMount(){
        const url = "http://ih-crud-api.herokuapp.com/characters"
        axios.get(url)
        .then(result =>{
            this.setState({items:result.data})

        }).catch(e=>{
            console.log(e)
        });

    }
    render(){
        const { items } = this.state;
        return (<div><div>
            {items.map((items,key)=><Promo key={key} {...items}/>)}
        </div>
        <div>
        {items.map((items,key)=><Character key={key} {...items}/>)}
        </div>
        </div>
        
        );
    }
}

export default Home;