import React from 'react'
import styled from '@emotion/styled'

const SubContainer = ({ children} : { children: React.ReactNode }) => {
  return (
    <Container>
        {children}
    </Container>
  )
}
export default SubContainer

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;
`