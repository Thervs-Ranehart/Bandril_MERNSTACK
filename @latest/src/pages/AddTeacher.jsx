import { useState } from 'react';
import { Link } from "react-router-dom";

export default function AddTeacher() {
    const [name, setName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [teacherNum, setTeacherNum] = useState("");
    const [information, setInformation] = useState([]);

    const handleTeacherSubmit = (e) => {
        e.preventDefaults();
        const newInformation = {
            name, 
            specialization,
            teacherNum,
        }
        setInformation([...information, newInformation]);
        setName("");
        setSpecialization("");
        setTeacherNum("");
        
    }
    return (
        <div>
            <h1>Add Teacher</h1>
            <br /><br />
            <form onSubmit={handleTeacherSubmit}>
                        <input className="addName"
                            type="text" 
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter name'/>
                        <input className="addSpecialization"
                            type="text" 
                            onChange={(e) => setSpecialization(e.target.value)}
                            placeholder='Enter specialization'/>
                        <input className='addTeacherNum'
                            type="text" 
                            onChange={(e) => setTeacherNum(e.target.value)}
                            placeholder='Enter teacher number'/>

                        <button type="submit" className="submitBtn" onClick={handleTeacherSubmit}>Submit</button>
            </form>


            {information.map((info, index) => {
                <div key={index}>
                    <p>Name: {info.name}</p>
                    <p>Specialization: {info.specialization}</p>
                    <p>Teacher Num: {info.teacherNum}</p>
                </div>
            })}
        </div>
    );
}