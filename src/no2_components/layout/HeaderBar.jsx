import React from 'react'
import styled from 'styled-components'

const HeaderBar = ({ setOpen }) => {

  return (
    <Container>

      <Left>

        <MenuButton
          onClick={() => setOpen(prev => !prev)}
        >
          ☰
        </MenuButton>

        <Logo>
          React Admin
        </Logo>

      </Left>

      <Right>

        <ActionButton>
          로그인
        </ActionButton>

        <SignupButton>
          회원가입
        </SignupButton>

      </Right>

    </Container>
  )
}

export default HeaderBar

const Container = styled.header`
  height:70px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:0 25px;

  background:rgba(15,23,42,0.9);

  backdrop-filter:blur(10px);

  border-bottom:
    1px solid rgba(255,255,255,0.08);

  position:sticky;
  top:0;

  z-index:1100;
`

const Left = styled.div`
  display:flex;
  align-items:center;
  gap:15px;
`

const Logo = styled.h1`
  font-size:24px;
  font-weight:800;

  background:linear-gradient(
    90deg,
    #38bdf8,
    #818cf8
  );

  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`

const Right = styled.div`
  display:flex;
  gap:12px;
`

const MenuButton = styled.button`
  display:none;

  background:none;
  border:none;

  color:white;

  font-size:28px;

  cursor:pointer;

  @media (max-width:768px){
    display:block;
  }
`

const ActionButton = styled.button`
  padding:10px 18px;

  border:none;
  border-radius:12px;

  background:#334155;
  color:white;

  cursor:pointer;

  transition:0.3s;

  &:hover{
    background:#475569;
    transform:translateY(-2px);
  }
`

const SignupButton = styled.button`
  padding:10px 18px;

  border:none;
  border-radius:12px;

  background:linear-gradient(
    90deg,
    #38bdf8,
    #6366f1
  );

  color:white;

  font-weight:700;

  cursor:pointer;

  transition:0.3s;

  &:hover{
    transform:translateY(-2px) scale(1.03);

    box-shadow:
      0 8px 20px rgba(99,102,241,0.4);
  }
`