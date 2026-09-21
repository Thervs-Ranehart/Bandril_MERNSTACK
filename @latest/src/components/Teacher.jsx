import { useState } from "react";
import { Link } from "react-router-dom";

import teachers from "../data/teachers.json";

export default function Teacher() {
    const [search, setSearch] = useState("");
    const filteredTeachers = teachers.filter( (teacher) =>
        teacher.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="teacher-container">
            <h2>Teacher List</h2>
            <input type="text" placeholder="Search teacher name here." value={search} onChange={(event) => setSearch(event.target.value)}/>
            <p>Total teachers: {filteredTeachers.length}</p>
            {filteredTeachers.map((teacher) => (
                <div className="teacher-card" key={teacher.id}>
                    <h3>{teacher.name}</h3>
                    <p>Teacher Number: {teacher.teacherNum}</p>
                    <p>Specialization: {teacher.specialization}</p>
                    <Link to={`/teachers/${teacher.id}`}>View Full Details</Link>
                </div>
            ))}
            {filteredTeachers.length === 0 && (<p>No teachers found.</p>)}
            <p>Newly Added:</p>
        </div>
    );
}