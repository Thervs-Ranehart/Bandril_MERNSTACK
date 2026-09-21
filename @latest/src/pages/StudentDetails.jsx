import { Link, useParams } from "react-router-dom";
import students from "../data/students.json";

function StudentDetails() {
    const { id } = useParams();
    const student = students.find((student) => student.id === parseInt(id, 10));

    if (!student) {
        return (
            <div className="page-container">
                <h1>Student Not Found</h1>
                <Link to="/students" className="back-link">Back to Students</Link>
            </div>
        );
    }

    return (
        <div className="page-container">
            <h1>Student Details</h1>
            <div className="details-card">
                <h2>{student.name}</h2>
                <p>Student Number: {student.studentNumber}</p>
                <p>Course: {student.course}</p>
                <p>Section: {student.section}</p>
                <p>Year: {student.year}</p>
                <p>Email: {student.email}</p>
                
                <Link to="/students" className="back-link">Back to Students</Link>
             
            </div>
        </div>
    );
}

export default StudentDetails;