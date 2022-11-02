import { useState } from "react";

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);

    const ageHandler = () => {
        return(
        setShowAge(!showAge)
        )
    }
    return(
        <div className="contact-card">
      <img src={props.avatarUrl} 
      alt="profile"/>
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={ageHandler}>Show age</button>
        {showAge ? <p>Age: {props.age}</p> : null}
        
      </div>

    </div>
    )
}

export default ContactCard;