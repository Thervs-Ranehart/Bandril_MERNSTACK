import { useState } from 'react';

function AddStudent() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [information, setInformation] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newInformation = {
            name,
            email
        }
        setInformation([...information, newInformation]);

        setName("");
        setEmail("");
    }
    return (
    
        <div>
            <h1>My App</h1>
            <p>Counter: {counter}</p>
            <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded" onClick = {() => setCounter(counter + 1)}>+</button>
            <br></br>
        
        <input className="border border-gray-300"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name" />

        <input className="border border-gray-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded" onClick={handleSubmit}>
            Submit
        </button>
        {
        information.map((info, index) => (
            <div className="border border-gray-300 p-2 m-2 flex w-64 flex-col flex-wrap" key={index}>
                <p>Name: {info.name}</p>
                <p>Email: {info.email}</p>
            </div>
        ))
        }
        </div>
    );
}

export default AddStudent;