import { useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";

import Teachers from "./pages/Teachers";
import TeacherDetails from "./pages/TeacherDetails";
import AddTeacher from "./pages/AddTeacher";

import teachersData from "./data/teachers.json";


function App() {

    const [teachers, setTeachers] = useState(teachersData);

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/students"
                    element={<Students />}
                />

                <Route
                    path="/students/:id"
                    element={<StudentDetails />}
                />

                <Route
                    path="/addstudent"
                    element={<AddStudent />}
                />

                <Route
                    path="/teachers"
                    element={
                        <Teachers
                            teachers={teachers}
                        />
                    }
                />

                <Route
                    path="/teachers/:id"
                    element={
                        <TeacherDetails
                            teachers={teachers}
                        />
                    }
                />

                <Route
                    path="/addteacher"
                    element={
                        <AddTeacher
                            teachers={teachers}
                            setTeachers={setTeachers}
                        />
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;