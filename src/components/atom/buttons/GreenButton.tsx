import styled from '@emotion/styled'

interface GreenButtonProps {
    children: React.ReactNode;
    onClick?: () => void; 
}

const GreenButton = ({ children, onClick } : GreenButtonProps) => {
  return (
    <Buttons onClick={onClick}>
        {children}
    </Buttons>
  )
}

export default GreenButton

const Buttons = styled.button`
    width: 100%;
    padding: 12px;
    background: var(--green-100);
    color: #000;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.42px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid var(--green-100);
    &:hover {
        border: 1px solid var(--green-300);
        background: var(--grey-50);
    }
`