import React, {useState, useEffect} from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  /*const contacts = [
    {avatarUrl: "https://via.placeholder.com/150",
      name: "Jaakko Muhokoski",
      email: "jaakko.muhokoski@notreal.com",
      age: 25
      },
      {avatarUrl: "https://via.placeholder.com/150",
      name: "Paul Jones",
      email: "paul.jones@notreal.com",
      age: 33
      },
      {avatarUrl: "https://via.placeholder.com/150",
      name: "Saara Lehtinen",
      email: "saara.lehtinen@notreal.com",
      age: 29
      }
  ]*/

  const [results, setResults] = useState([]);

  useEffect(() =>{
  fetch("https://randomuser.me/api/?results=5")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setResults(data.results)
  })
  }, []);

  return(
    <div>
      {results.map((result, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large} 
          name = {result.first} 
          email = {result.email}
          age = {result.dob.age}/>
        )
      })}
    </div>
  )
}

export default App;
