import { Link, useParams} from "react-router-dom";
import  teachers from "../data/teachers.json";

export default function TeacherDetails() {
    const { id } = useParams();
    const teacher = teachers.find((teacher) => teacher.id === parseInt(id, 10));

    if (!teacher) {
        return (
            <div className="page-container">
                <h1>Teacher Not Found.</h1>
                <Link to="/teachers" className="back-link">Back to Teachers</Link>
            </div>
        );
    }

    return(
        <div className="page-container">
            <h1>Teacher Details</h1>
            <div className="details-card">
                <h2>{teacher.name}</h2>
                <p>Teacher Number: {teacher.teacherNum}</p>
                <p>Specilization: {teacher.specialization}</p>

                <Link to="/teachers" className="back-link">Back to Teachers</Link>
            </div>
        </div>
    );    
}