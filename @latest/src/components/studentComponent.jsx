function StudentComponent({name, age, section, stud_num, course}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Section: {section}</p>
      <p>Student Number: {stud_num}</p>
      <p>Course: {course}</p>
    </div>
    
  )
}
export default StudentComponent;