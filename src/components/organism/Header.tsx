import React from 'react'
import styled from '@emotion/styled'

const Header = () => {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <Container>
        <MenuItem onClick={() => handleScroll("home")}>HOME</MenuItem>
        <MenuItem onClick={() => handleScroll("skills")}>SKILLS</MenuItem>
        <MenuItem onClick={() => handleScroll("projects")}>PROJECTS</MenuItem>
        <MenuItem onClick={() => handleScroll("contact")}>CONTACT</MenuItem>
    </Container>
  )
}

export default Header

const Container = styled.div`
    position: fixed;
    top: 30px;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
    height: 60px;
    padding: 10px 20px;
    border-radius: 8px;
    background: var(--green-200);
`

const MenuItem = styled.button`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: var(--green-300);
    }
`