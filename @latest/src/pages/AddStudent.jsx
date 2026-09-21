import { useState } from 'react';

function AddStudent() {

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
            <h1>Add Student</h1>

            <br></br>
        
        <form action="">
                    <input className="addName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name" />

        <input className="addEmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email" />

        <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Submit
        </button>
        </form>
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