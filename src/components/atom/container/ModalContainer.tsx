import React from "react"
import styled from "@emotion/styled"

const ModalContainer = ({ children} : { children: React.ReactNode }) => {
    return <Div>
        {children}        
    </Div>
}

export default ModalContainer

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
`