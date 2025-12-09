import { useState } from 'react';
import styled from '@emotion/styled';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from './components/organism/Header';
import SubTitle from './components/atom/title/SubTitle';
import MainContainer from './components/atom/container/MainContainer';
import ProjectCard from './components/molecule/ProjectCard';
import { projectList, type ProjectType } from './data/ProjectList';
import ProjectModal from './components/organism/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  return (
    <>
      <Header />
      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        credits={{ enabled: false }}
        anchors={['home', 'skills', 'projects', 'contact']}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <MainTitle>
                  <p>WEB FRONT-END PORTFOLIO</p>
                  <span>매일 성장하는 개발자 <b>김채은</b>입니다.</span>
                </MainTitle>
                <MainSub>
                  <span><img src="./assets/img/캐릭터1.png" alt="" /></span>
                  <MainContents>
                    <p>
                      안녕하세요. 꾸준함과 책임감을 바탕으로 성장하는 김채은입니다.<br />
                      어떤 일이든 끝까지 해내며, 매일 한 걸음씩 발전해 나가고 있습니다.<br />
                      문의는 아래에서 편하게 연락 주세요.
                    </p>
                    <ButtonGroup>
                      <a href="mailto:chaeeunkim30@gmail.com" target='_blank'>EMAIL</a>
                      <a href="https://github.com/chaeeunkim30" target='_blank'>GITHUB</a>
                      <a href="sms:01064000581" target='_blank'>SMS</a>
                    </ButtonGroup>
                  </MainContents>
                </MainSub>
              </div>
              
              <div className="section">
                <MainContainer>
                  <SkillsContents>
                    <SubTitle>SKILLS</SubTitle>
                    <div className="imgs">
                      <span><img src="./assets/img/htmlIcon.png" alt="" /></span>
                      <span><img src="./assets/img/cssIcon.png" alt="" /></span>
                      <span><img src="./assets/img/jsIcon.png" alt="" /></span>
                      <span><img src="./assets/img/tsIcon.png" alt="" /></span>
                      <span><img src="./assets/img/reactIcon.png" alt="" /></span>
                    </div>
                  </SkillsContents>
                  <SkillsContents>
                    <SubTitle>Tools</SubTitle>
                    <div className="imgs">
                      <span><img src="./assets/img/gitIcon.png" alt="" /></span>
                      <span><img src="./assets/img/githubIcon.png" alt="" /></span>
                    </div>
                  </SkillsContents>
                </MainContainer>
              </div>
              <div className="section">
                <MainContainer>
                  <SubTitle>PROJECTS</SubTitle>
                  <Projects>
                    {projectList.map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        data={project} 
                        onClickDetail={() => setSelectedProject(project)}
                      />
                    ))}
                  </Projects>
                  <MoreBtn><a href="https://github.com/chaeeunkim30" target='_blank'>더 보러 가기</a></MoreBtn>
                </MainContainer>
              </div>
              <div className="section">
                <MainContainer>
                  <ContactWrapper>
                    <ContactTop>
                      <p>THANK YOU</p>
                      <span><img src="./assets/img/캐릭터2.png" alt="" /></span>
                    </ContactTop>
                    <ContactSub>
                      <p>오늘보다 더 나은 내일을 위해 나아가겠습니다.<br />읽어주셔서 감사합니다.</p>
                      <ButtonGroup>
                        <a href="mailto:chaeeunkim30@gmail.com" target='_blank'>EMAIL</a>
                        <a href="https://github.com/chaeeunkim30" target='_blank'>GITHUB</a>
                        <a href="sms:01064000581" target='_blank'>SMS</a>
                    </ButtonGroup>
                    </ContactSub>
                  </ContactWrapper>
                </MainContainer>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      {selectedProject && (
        <ProjectModal 
          data={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
}

export default App;

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background: var(--green-300);
  color: #fff;
  padding: 0 20px;
  & > p {
    font-size: 48px;
    font-weight: 700;
    line-height: 140%;
  }
  & > span {
    font-size: 40px;
  }
  @media all and (max-width: 1024px) {
    & > p {
      font-size: 22px;
    }
    & > span {
      font-size: 20px;
    }
  }
  @media all and (max-width: 768px) {
    & > p {
      font-size: 20px;
    }
    & > span {
      font-size: 18px;
    }
  }
`;

const MainSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 50vh;
  padding: 0 20px;
  & > span {
    display: block;
    max-width: 280px;
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  @media all and (max-width: 1024px) {
    flex-direction: column;
    gap: 8px;
    & > span {
      max-width: 190px;
    }
  }
  @media all and (max-width: 768px) {
    & > span {
      max-width: 150px;
    }
  }
`

const MainContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    text-align: center;
    padding: 48px;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    color: #fff;
    background: var(--green-300);
    border-radius: 4px;
  }
  @media all and (max-width: 1024px) {
    gap: 8px;
    & > p {
      font-size: 16px;
      padding: 20px;
    }
  }
  @media all and (max-width: 768px) {
    gap: 5px;
    & > p {
      font-size: 14px;
      padding: 10px;
    }
  }
`

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  & > a {
    text-align: center;
    width: 130px;
    padding: 12px 0;
    background: var(--green-200);
    border: 1px solid var(--green-300);
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    line-height: 120%;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: var(--green-300);
    }
  }
  @media all and (max-width: 768px) {
    gap: 8px;
    & > a {
      width: 100px;
      padding: 8px 0;
      font-size: 14px;
    }
  }
`

const SkillsContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1620px;
  width: 100%;
  & > .imgs {
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      border-radius: 8px;
      width: 120px;
      height: 120px;
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.15);
      & > img {
        width: 80%;
      }
    }
  }
  @media all and (max-width: 1024px) {
    gap: 15px;
    & > .imgs {
      gap: 20px;
      margin-bottom: 30px;
      & > span {
        width: 80px;
        height: 80px;
      }
    }
  }
  @media all and (max-width: 768px) {
    gap: 10px;
    & > .imgs {
      gap: 15px;
      margin-bottom: 20px;
      & > span {
        width: 60px;
        height: 60px;
      }
    }
  }
`

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
  @media all and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
`

const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    width: 100%;
    padding: 18px;
    background: var(--green-200);
    color: #fff;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.42px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid var(--green-100);
    &:hover {
        border: 1px solid var(--green-300);
        background: var(--green-200);
    }
  }
  @media all and (max-width: 1024px) {
    & > a {
      max-width: 280px;
      padding: 12px 16px;
      font-size: 14px;
    }
  }
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  height: 100%;
  @media all and (max-width: 1024px) {
    gap: 50px;
  }
  @media all and (max-width: 768px) {
    gap: 30px;
  }
  @media all and (max-width: 410px) {
    gap: 10px;
  }
`

const ContactTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  & > p {
    color: var(--green-300);
    font-size: 100px;
    font-weight: 900;
    letter-spacing: 1px;
    opacity: 0.5;
  }
  & > span {
    position: absolute;
    top: 115%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 180px;
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  @media all and (max-width: 1024px) {
    & > p {
      font-size: 80px;
    }
    & > span {
      max-width: 120px;
    }
  }
  @media all and (max-width: 768px) {
    & > p {
      font-size: 60px;
    }
    & > span {
      max-width: 80px;
    }
  }
  @media all and (max-width: 410px) {
    & > p {
      font-size: 48px;
    }
    & > span {
      max-width: 60px;
    }
  }
`

const ContactSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 50px;
  & > p {
    color: var(--green-300);
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
  }
  @media all and (max-width: 1024px) {
    & > p {
      font-size: 18px;
    }
  }
  @media all and (max-width: 1024px) {
    & > p {
      font-size: 16px;
    }
  }
`