import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

function SiderBar({ open, setOpen }) {

  const location = useLocation()

  return (
    <>
      <Container open={open}>

        <LogoArea>
          ⚡ Dashboard
        </LogoArea>

        <MenuList>

          <StyledLink
            to="/"
            active={location.pathname === '/'}
            onClick={() => setOpen(false)}
          >
            <span>🏠</span>
            Home
          </StyledLink>

          <StyledLink
            to="/todo"
            active={location.pathname === '/todo'}
            onClick={() => setOpen(false)}
          >
            <span>✅</span>
            Todo
          </StyledLink>

          <StyledLink
            to="/employee"
            active={location.pathname === '/employee'}
            onClick={() => setOpen(false)}
          >
            <span>👨‍💼</span>
            Employee
          </StyledLink>

        </MenuList>

      </Container>

      {open && (
        <Overlay
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default SiderBar

const Container = styled.aside`
  width:280px;
  min-height:calc(100vh - 70px);

  padding:25px 18px;

  background:
    linear-gradient(
      180deg,
      #0f172a,
      #111827,
      #020617
    );

  border-right:
    1px solid rgba(255,255,255,0.08);

  box-shadow:
    4px 0 25px rgba(0,0,0,0.25);

  overflow:hidden;

  @media (max-width:768px){

    position:fixed;

    top:70px;

    left:${props => props.open ? '0' : '-320px'};

    width:280px;
    height:100vh;

    transition:0.4s ease;

    z-index:1000;
  }
`

const LogoArea = styled.div`
  font-size:28px;
  font-weight:800;

  margin-bottom:40px;

  text-align:center;

  background:
    linear-gradient(
      90deg,
      #38bdf8,
      #818cf8
    );

  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
`

const MenuList = styled.div`
  display:flex;
  flex-direction:column;
  gap:16px;
`

const StyledLink = styled(Link)`
  position:relative;

  display:flex;
  align-items:center;
  gap:14px;

  text-decoration:none;

  padding:16px 18px;

  border-radius:18px;

  color:white;

  font-size:17px;
  font-weight:600;

  background:${props =>
    props.active
      ? 'linear-gradient(90deg,#38bdf8,#6366f1)'
      : 'rgba(255,255,255,0.05)'
  };

  border:
    1px solid rgba(255,255,255,0.08);

  backdrop-filter:blur(8px);

  overflow:hidden;

  transition:0.35s;

  box-shadow:${props =>
    props.active
      ? '0 10px 25px rgba(99,102,241,0.35)'
      : 'none'
  };

  span{
    font-size:20px;
  }

  &:hover{

    transform:
      translateX(8px)
      scale(1.02);

    background:
      linear-gradient(
        90deg,
        #38bdf8,
        #6366f1
      );

    box-shadow:
      0 10px 25px rgba(99,102,241,0.35);
  }

  &::before{
    content:'';

    position:absolute;

    top:0;
    left:-100%;

    width:100%;
    height:100%;

    background:
      linear-gradient(
        120deg,
        transparent,
        rgba(255,255,255,0.2),
        transparent
      );

    transition:0.6s;
  }

  &:hover::before{
    left:100%;
  }
`

const Overlay = styled.div`
  position:fixed;

  top:70px;
  left:0;

  width:100%;
  height:100vh;

  background:rgba(0,0,0,0.55);

  backdrop-filter:blur(3px);

  z-index:999;
`