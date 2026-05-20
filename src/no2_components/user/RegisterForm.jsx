import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const initialState = {
  id: "",
  username: "",
  password: "",
  confirmPassword: ""
}

const RegisterForm = ({ setUsers }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser(prev => (
      { ...prev, [name]: value }
    ))
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("비밀번호 일치하지 않습니다.")
      return;
    }

    setUsers(prev => (
      [
        ...prev,
        {
          id: Date.now(),
          username: user.username,
          password: user.password
        }
      ]
    ))

    alert("회원가입 성공!")
    navigate("/login")
  }

  return (
    <Form onSubmit={handleSubmit}>

      <Title>회원가입</Title>

      <Card>

        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder='사용자 이름'
        />

        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder='비밀번호'
        />

        <Input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder='비밀번호 확인'
        />

        <RegisterButton type="submit">
          회원가입
        </RegisterButton>

        <LoginButton
          type="button"
          onClick={() => navigate("/login")}
        >
          이미 회원이신가요? 로그인
        </LoginButton>

      </Card>

    </Form>
  )
}

export default RegisterForm;



const Form = styled.form`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;

  background:
    radial-gradient(
      circle at top left,
      rgba(59,130,246,0.15),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(99,102,241,0.18),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #020617,
      #0f172a,
      #1e293b
    );
`

const Title = styled.h2`
  font-size: 42px;
  font-weight: 900;

  margin-bottom: 28px;

  color: white;

  letter-spacing: 1px;

  text-transform: uppercase;

  text-shadow:
    0 6px 20px rgba(0,0,0,0.35);

  position: relative;

  &::after{
    content: '';

    position: absolute;

    bottom: -10px;
    left: 50%;

    transform: translateX(-50%);

    width: 80px;
    height: 4px;

    border-radius: 999px;

    background:
      linear-gradient(
        90deg,
        #38bdf8,
        #818cf8
      );
  }
`

const Card = styled.div`
  width: 430px;

  display: flex;
  flex-direction: column;

  padding: 38px;

  border-radius: 28px;

  background:
    rgba(255,255,255,0.08);

  backdrop-filter: blur(18px);

  border:
    1px solid rgba(255,255,255,0.12);

  box-shadow:
    0 12px 40px rgba(0,0,0,0.35);

  @media (max-width: 500px){
    width: 100%;
    padding: 28px;
  }
`

const Input = styled.input`
  width: 100%;

  padding: 16px 18px;

  margin-bottom: 18px;

  border: none;
  border-radius: 16px;

  background:
    rgba(255,255,255,0.08);

  color: white;

  font-size: 16px;
  font-weight: 500;

  outline: none;

  transition: 0.25s;

  border:
    1px solid rgba(255,255,255,0.08);

  &::placeholder{
    color: #cbd5e1;
  }

  &:focus{

    background:
      rgba(255,255,255,0.12);

    border-color: #38bdf8;

    box-shadow:
      0 0 0 4px rgba(56,189,248,0.18);

    transform:
      scale(1.015);
  }
`

const BaseButton = styled.button`
  width: 100%;

  padding: 15px;

  border: none;
  border-radius: 16px;

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.25s;

  margin-bottom: 14px;

  letter-spacing: 0.3px;
`

const RegisterButton = styled(BaseButton)`
  background:
    linear-gradient(
      90deg,
      #38bdf8,
      #6366f1
    );

  color: white;

  box-shadow:
    0 10px 25px rgba(99,102,241,0.35);

  &:hover{

    transform:
      translateY(-3px)
      scale(1.01);

    box-shadow:
      0 15px 30px rgba(99,102,241,0.5);
  }
`

const LoginButton = styled(BaseButton)`
  background:
    rgba(255,255,255,0.08);

  color: #e2e8f0;

  border:
    1px solid rgba(255,255,255,0.1);

  backdrop-filter: blur(8px);

  &:hover{

    background:
      rgba(255,255,255,0.15);

    color: white;

    transform:
      translateY(-2px);

    box-shadow:
      0 8px 20px rgba(255,255,255,0.08);
  }
`