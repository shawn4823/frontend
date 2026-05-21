import React, { useState, useEffect } from 'react'
import EmployeeList from '../no2_components/employee/EmployeeList'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegister'
import EmployeeUpdate from '../no2_components/employee/EmployeeUpdate'
import styled from 'styled-components'

const initialEmps = [
    {id: "1", name: "John", email: "john@example.com", job: "frontend", pay: 600},
    {id: "2", name: "Peter", email: "peter@example.com", job: "backend", pay: 600},
    {id: "3", name: "Susan", email: "susan@example.com", job: "db", pay: 600},
    {id: "4", name: "Sue", email: "sue@example.com", job: "ai", pay: 600},
]

const inintialEmp = {
  id: '', name: '', email:'', job:'', pay:''
}

const initialState = {
  empTable: initialEmps, 
  emp: inintialEmp,
  mode: "",
  selectedId:""
}

const EmployeePage = () => {
  const [state,setState] = useState(initialState);
  const {empTable, selectedId, emp, mode} = state;

  useEffect(()=>{
    selectedId &&
    setState(prev => (
      {
        ...prev, 
        emp: empTable.find(item => item.id === selectedId)
       }
    ))      // emp를 다시 화면에 뿌려줌
}, [selectedId, empTable])

const handleDelete =()=>{
  if(!selectedId){
    alert("삭제할 데이터를 선택하시오");
    return;
  }
  setState(prev => (
    {
      ...prev,
      empTable: prev.empTable.filter(item => item.id !== selectedId),
      emp: initialEmp,
      selectedId: ""

    }
  ))
}
  return (

  <Container>

    <Title>Employee Management</Title>

    <ContentBox>

      <EmployeeList
        state={state}
        setState={setState}
      />

      <EmployeeTable
        state={state}
      />

      <ButtonGroup>

        <RegisterButton
          onClick={() =>
            setState(prev => ({
              ...prev,
              mode: "register"
            }))
          }
        >
          등록
        </RegisterButton>

        <UpdateButton
          onClick={() =>
            setState(prev => ({
              ...prev,
              mode: "update"
            }))
          }
        >
          수정
        </UpdateButton>

        <DeleteButton
          onClick={() =>
            setState(prev => ({
              ...prev,
              mode: "delete"
            }))
          }
        >
          삭제
        </DeleteButton>

      </ButtonGroup>

      <FormArea>

        {
          mode === "register" ?

            <EmployeeRegister
              setState={setState}
            />

            : mode === "update" ?

              <EmployeeUpdate
                emp={emp}
                setState={setState}
              />

              : mode === "delete" &&

              <DeleteConfirmButton
                onClick={handleDelete}
              >
                위 데이터를 삭제하시겠습니까?
              </DeleteConfirmButton>
        }

      </FormArea>

    </ContentBox>

  </Container>
)
}
export default EmployeePage

const Container = styled.div`

  width: 100%;
  min-height: 100vh;

  padding: 50px 20px;

  background:
    linear-gradient(
      135deg,
      #020617,
      #0f172a,
      #1e293b
    );

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`

  font-size: 42px;
  font-weight: 900;

  color: white;

  margin-bottom: 35px;

  letter-spacing: 1px;

  text-shadow:
    0 8px 20px rgba(0,0,0,0.35);
`

const ContentBox = styled.div`

  width: 100%;
  max-width: 1200px;

  padding: 35px;

  border-radius: 28px;

  background:
    rgba(255,255,255,0.08);

  backdrop-filter: blur(18px);

  border:
    1px solid rgba(255,255,255,0.12);

  box-shadow:
    0 12px 40px rgba(0,0,0,0.35);
`

const ButtonGroup = styled.div`

  display: flex;
  gap: 14px;

  margin-top: 30px;
  margin-bottom: 30px;

  flex-wrap: wrap;
`

const BaseButton = styled.button`

  padding: 14px 24px;

  border: none;
  border-radius: 16px;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.25s;

  color: white;

  &:hover{

    transform:
      translateY(-3px);

    opacity: 0.92;
  }
`

const RegisterButton = styled(BaseButton)`

  background:
    linear-gradient(
      90deg,
      #38bdf8,
      #6366f1
    );
`

const UpdateButton = styled(BaseButton)`

  background:
    linear-gradient(
      90deg,
      #10b981,
      #059669
    );
`

const DeleteButton = styled(BaseButton)`

  background:
    linear-gradient(
      90deg,
      #ef4444,
      #dc2626
    );
`

const DeleteConfirmButton = styled(BaseButton)`

  width: 100%;

  background:
    linear-gradient(
      90deg,
      #ef4444,
      #991b1b
    );
`

const FormArea = styled.div`

  margin-top: 20px;
`
