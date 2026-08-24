import Student from "./components/studentComponent.jsx";
import Subject from "./components/subjectComponent.jsx";
function App() {
  return (
    <div>
      <Student name="Thervin Bandril" age={20} section={3-1} stud_num={202404143} course="BSIT"/>
      <hr></hr>
      <Student name="Jesreel Domanais" age={19} section={3-1} stud_num={202404789} course="BSIT"/>
      <hr></hr>
      <Student name="Errol Miranda" age={20} section={3-1} stud_num={202404654} course="BSIT"/>
      <hr></hr>
      <Student name="Kevin Gelle" age={20} section={3-1} stud_num={202404741} course="BSIT"/>
      <hr></hr>
      <Student name="Rolando Anacta" age={20} section={3-1} stud_num={202404951} course="BSIT"/>
      <hr></hr>
      <Subject subjectName="Application Development and Emerging Technologies" subjectCode="DCIT 26" subjectUnits={3}/>
      <Subject subjectName="Methods of Research" subjectCode="DCIT 60" subjectUnits={3}/>
      <Subject subjectName="Information Assurance and Security 1" subjectCode="ITEC 85" subjectUnits={3}/>

    </div>
  

    
  )
}
export default App;