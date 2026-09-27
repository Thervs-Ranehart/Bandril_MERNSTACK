import Student from "../components/Student";

function Students({students}) {
    return (
        <div className="page-container">
            <h1>Students</h1>
            <Student students={students}/>
        </div>
    );
}
export default Students;