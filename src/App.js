import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

function App() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  
  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields);
  }
  useEffect(() => {
    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id }) ));
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      <input onChange={(event) => {setNewName(event.target.value)}} placeholder="Name..." />
      <input onChange={(event) => {setNewAge(event.target.value)}} type="number" placeholder="Age..." />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => {
        return (
          <div>
              {" "}
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button onClick={() => {updateUser(user.id, user.age)}}>Increate age</button>
              <button onClick={()=> {deleteUser(user.id)}}>Delete</button>
           </div>
        )
      })}
    </div>
  );
}

export default App;
