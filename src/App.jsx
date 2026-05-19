import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import TodoPage from './no1_pages/TodoPage'
import HomePage from './no1_pages/HomePage'
import EmployeePage from './no1_pages/EmployeePage'
import SiderBar from './no2_components/layout/SiderBar'
import HeaderBar from './no2_components/layout/HeaderBar'
import EmployeeTable from './no2_components/employee/EmployeeTable'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>

      <HeaderBar setOpen={setOpen} />

      <Layout>

        <SiderBar open={open} setOpen={setOpen} />

        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/employee" element={<EmployeePage />} />
          </Routes>
        </Content>

      </Layout>

    </BrowserRouter>
  )
}

export default App

const Layout = styled.div`
  display:flex;
`

const Content = styled.main`
  flex:1;
  padding:20px;
`