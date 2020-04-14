import React,{Component} from 'react';
import './Contact.css';

const name = "Myrtle Porter";
const avatar = "https://randomuser.me/api/portraits/women/3.jpg";
const status = true ;



class Contact extends Component{
  
  render(){
    return (
        <div className="Contact">    
              <div>
                   <img src={avatar} alt="avatar" className="avatar" />
              </div>
              <div>
                    <div className="status"> 

                         <p className="name">{name}</p>

                         <div className= { status ?"status-online" : "status-offline"}/>

                         <p className="status-text"> { status ? "online" : "offline"}</p>

                   </div>
                
               </div>
        </div>
    );  
  }
}

export default Contact
