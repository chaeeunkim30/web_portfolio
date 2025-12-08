import React from 'react'
import styled from '@emotion/styled'

const MainContainer = ({ children} : { children: React.ReactNode }) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default MainContainer

const Container = styled.div`
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
    padding: 0 20px;
`