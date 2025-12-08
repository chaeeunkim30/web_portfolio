import styled from "@emotion/styled"
import GreenButton from '../atom/buttons/GreenButton'
import type { ProjectType } from '../../data/ProjectList';

interface Props {
  data: ProjectType;
  onClickDetail: () => void;
}

const ProjectCard = ({ data, onClickDetail }: Props) => {
    const handleGithub = () => {
    if (data.github) {
      window.open(data.github, '_blank');
    } else {
      alert("Github 링크가 없습니다.");
    }
  };
  return (
    <Container>
        <Title>{data.title}</Title>
        <Contents>
            <p className="date">{data.date}</p>
            <p className="desc">{data.subTitle}</p> 
        </Contents>
        <BtnContainer>
            <GreenButton onClick={onClickDetail}>자세히 보기</GreenButton>
            <GreenButton onClick={handleGithub}>Github</GreenButton>
        </BtnContainer>
    </Container>
  )
}

export default ProjectCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 330px;
    padding: 20px;
    background: var(--green-300);
    border-radius: 4px;
`

const Title = styled.h3`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 10px;
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    & > p {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;
    }
`

const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-top: auto;
`