import styled from '@emotion/styled'

const SubTitle = ({ children} : { children: React.ReactNode }) => {
  return (
    <Contents>
        {children}
    </Contents>
  )
}
export default SubTitle

const Contents = styled.div`
    color: var(--green-300);
    font-size: 48px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.96px;
`