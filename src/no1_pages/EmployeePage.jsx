import React from 'react'
import { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';



const initialState = [
  {id: 1, name: "JOHN", email: "shawn4823@example.com", job: "frontend", pay:600},
  {id: 2, name: "Peter", email: "Peter@example.com", job: "backend", pay:600},
  {id: 3, name: "susan", email: "susan@example.com", job: "DB", pay:400},
  {id: 4, name: "sue", email: "sue@example.com", job: "AI", pay:900},
]

const EmployeePage = () => {
  const [infos, setInfos] = useState(initialState); // state 구성 
  return (
    <div>
      <EmployeeTable infos={infos} />
      <Register setInfos={setInfos}/>

    </div>
  )
}

export default EmployeePage
