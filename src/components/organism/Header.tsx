import styled from '@emotion/styled'

interface FullPageApi {
  moveTo: (section: string) => void;
}

interface CustomWindow extends Window {
  fullpage_api?: FullPageApi;
}

const Header = () => {
    const handleScroll = (id: string) => {
        const customWindow = window as unknown as CustomWindow;

        if (customWindow.fullpage_api) {
            customWindow.fullpage_api.moveTo(id);
        } else {
            window.location.hash = id; 
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
    top: 25px;
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
    @media all and (max-width: 1024px) {
      padding: 8px 12px;
      max-width: 350px;
      height: 48px;
    }
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
    @media all and (max-width: 1024px) {
      font-size: 16px;
      padding: 8px;
    }
`