import Teacher from "../components/Teacher";

export default function Teachers({teachers}) {
    return (
        <div className="page-container">
            <h1>Teachers</h1>
            <Teacher teachers={teachers}/>
        </div>
    );
}
