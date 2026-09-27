import { useState } from "react";
import { Link } from "react-router-dom";

import students from "../data/students.json";

function Student() {

    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="student-container">

            <h2>Student List</h2>

            <input
                type="text"
                placeholder="Search student name here."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <p>Total students: {filteredStudents.length}</p>

            {filteredStudents.map((student) => (
                <div
                    className="student-card"
                    key={student.id}
                >

                    <h3>{student.name}</h3>

                    <p>
                        Student Number: {student.studentNumber}
                    </p>

                    <p>
                        Course: {student.course}
                    </p>

                    <p>
                        Section: {student.section}
                    </p>

                    <p>
                        Year: {student.year}
                    </p>

                    <Link to={`/students/${student.id}`}>
                        View Full Details
                    </Link>

                </div>
            ))}

            {filteredStudents.length === 0 && (
                <p>No students found.</p>
            )}

        </div>
    );
}

export default Student;