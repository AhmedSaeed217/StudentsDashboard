import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Students from "./Pages/Students/Students";
// import Courses from "./Pages/Courses/Courses";
import StudentDetails from "./Pages/StudentDetails/StudentDetails";
import AddStudent from "./Pages/AddStudent/AddStudent";
import UpdateStudent from "./Pages/UpdateStudent/UpdateStudent";
import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner/Spinner";
const Courses = lazy(() => import("./Pages/Courses/Courses"));

function App() {
  return (
    <div className="App">
      <div className="side">
        <Sidebar />
      </div>

      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentId" element={<StudentDetails />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/updatestudent/:studentId" element={<UpdateStudent />} />
          <Route
            path="/Courses"
            element={
              <Suspense fallback={<Spinner />}>
                <Courses />
              </Suspense>
            }
          />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
