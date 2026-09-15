import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { get, push, ref } from 'firebase/database'
import { database } from './firebase'

function App() {
  const [count, setCount] = useState(0);
  const [userlist, setUserList] = useState([]);

  // example effect to write into database
  // useEffect(()=> {
  //   // cree la ref de collection fb
  //   const collection = ref(database, 'demo-user');
  //   const userDemo = {
  //     firstname: 'nico',
  //     lastname: 'fazio',
  //     address: {
  //       street: 'rue du clos',
  //       number: '6',
  //       npa: 'CH-1207'
  //     }
  //   };
  //   // ajouter un nouveau noeu avec identifiant unique pour l'objet
  //   push(collection, userDemo);
  // }, []);

  // example effect to read from database
  useEffect(() => {
    const collection = ref(database, 'demo-user');
    get(collection).then((snap)=> {
      const formatedUserList = Object.entries(snap.val())
        .map(user => user[1]);
      setUserList(formatedUserList);
    });
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {userlist.map(user => {
          return <li>{user.firstname}</li>
        })}
      </ul>
    </>
  )
}

export default App
