import React, { useState } from 'react'
import EmployeePage from '../../no1_pages/EmployeePage';

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]

const initialEmp = {
    id: '', name: '', email: '', job: '', pay: ''
}

const initialState = {
    empTable: initialEmps,
    emp: initialEmp
}

const reducer = (state, action) = {
    switch(action.type){
        case "change":
            const{name, value} = event.target;
            return 
                {
                    ...state, 
                    emp: {...state.emp, [name] : value}
                }
                

            
    }
}



const EmployeeRegister = ({ setState }) => {
    const [emp, setEmp] = useState(initialEmp);
    const handleChange = () => {
        const { name, value } = event.target;
        setEmp(prev => (
            { ...prev, [name]: value }
        ))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        emp &&          //데이터가 있으면 실행
            setState(prev => (
                {
                    ...prev,
                    empTable: [...prev.empTable,
                    { ...emp, id: Date.now() }
                    ]
                }
            ) )
            setState(prev=>({...prev, selectedId: prev.empTable[prev.empTable.length-1].id
                //등록 버튼을 눌렀을 때 데이터가 바로 바뀌도록 empTable에서 마지막 직원의 id를 자동으로 선택 

            }))
        setEmp(initialEmp)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        value={emp.name}
                        onChange={handleChange}
                        placeholder='이름'
                    />
                </div>
                <div>
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={emp.email}
                        onChange={handleChange}
                        placeholder='이메일'
                    />
                </div>
                <div>
                    <label>직업</label>
                    <input
                        type="text"
                        name="job"
                        value={emp.job}
                        onChange={handleChange}
                        placeholder='직업'
                    />
                </div>
                <div>
                    <label>급여</label>
                    <input
                        type="number"
                        name="pay"
                        value={emp.pay}
                        onChange={handleChange}
                        placeholder='급여'
                    />

                </div>
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default EmployeeRegister
