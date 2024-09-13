import React, { useState } from 'react';

type Student = {
  id: number, 
  name: string, 
  teacher: boolean
}
/*
	Eksempel på formatet på dataen
	[{id: '1', name: 'Lars', teacher: false}]
*/
const SchoolSystem = () => {
	const [students, setStudents] = React.useState<Student[]>([]); 
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState(false); 

  function addStudent(){
    const newId = students.length + 1;  
    const newStudent: Student = {id: newId, name: name, teacher: teacher}; 
    setStudents([...students, newStudent]); 
    setName(''); 
    setTeacher(false); 
  }

  function removeLastStudent(){
    return setStudents(students => students.slice(0, -1)); 
  }

  function clearStudents(){
    return setStudents([]); 
  }
  
  return (
    <div>
      <h2>Antall i listen: {students.length}</h2>
      <input type="text" placeholder='Enter name' id="name" onChange={(n) => setName(n.target.value)}/>
      <button onClick={() => setTeacher(!teacher)}>is a teacher? click me</button>
      <button onClick={addStudent} >Legg til i listen</button>
      <button onClick={removeLastStudent}>Fjern fra siste fra listen</button>
      <button onClick={clearStudents}>Tøm listen</button>

      <ul>
        {students?.map((student) => 
        <li key={student.id}> {student.name} - {student.teacher ? "Lærer": "Student"}</li>)}
      </ul>
    </div>
  ); 
};

export default SchoolSystem;