import { useState } from "react";

export default function AddTeacher({ teachers, setTeachers }) {

    const [name, setName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [teacherNum, setTeacherNum] = useState("");

    const handleTeacherSubmit = (e) => {
        e.preventDefault();

        const newTeacher = {
            id: String(teachers.length + 1),
            name: name,
            specialization: specialization,
            teacherNum: teacherNum
        };

        setTeachers([...teachers, newTeacher]);

        setName("");
        setSpecialization("");
        setTeacherNum("");
    };

    return (
        <div>
            <h1>Add Teacher</h1>

            <br />
            <br />

            <form onSubmit={handleTeacherSubmit}>

                <input
                    className="addName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />

                <input
                    className="addSpecialization"
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    placeholder="Enter specialization"
                />

                <input
                    className="addTeacherNum"
                    type="text"
                    value={teacherNum}
                    onChange={(e) => setTeacherNum(e.target.value)}
                    placeholder="Enter teacher number"
                />

                <button
                    type="submit"
                    className="submitBtn"
                >
                    Submit
                </button>

            </form>
        </div>
    );
}